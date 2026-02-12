# 💳 Payment Gateway Integration Guide

## Option 1: Razorpay (Recommended for India)

### Setup Steps:

1. **Sign up for Razorpay**
   - Visit: https://razorpay.com
   - Create account (free)
   - Get Test API Keys from Dashboard

2. **Install Razorpay SDK**
   ```bash
   npm install razorpay
   ```

3. **Add Environment Variables**
   Create `.env.local` file:
   ```
   RAZORPAY_KEY_ID=your_key_id
   RAZORPAY_KEY_SECRET=your_key_secret
   ```

4. **Update Checkout Page**
   Replace the simulated payment in `src/app/checkout/page.tsx`:

   ```typescript
   // Add this script to your checkout page
   useEffect(() => {
     const script = document.createElement('script');
     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
     document.body.appendChild(script);
   }, []);

   const handlePayment = () => {
     const options = {
       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
       amount: totalAmount * 100, // Amount in paise
       currency: 'INR',
       name: 'Vastu Consultant',
       description: product.name,
       handler: async function (response) {
         // Payment successful
         // Create order in your database
         await fetch("/api/orders", {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({
             customer: formData,
             items: [{ productId: product.id, quantity: formData.quantity }],
             paymentId: response.razorpay_payment_id
           })
         });
         setOrderSuccess(true);
       },
       prefill: {
         name: formData.name,
         email: formData.email,
         contact: formData.phone
       }
     };
     
     const rzp = new window.Razorpay(options);
     rzp.open();
   };
   ```

---

## Option 2: Stripe (Global)

### Setup Steps:

1. **Sign up for Stripe**
   - Visit: https://stripe.com
   - Create account
   - Get Test API Keys

2. **Install Stripe**
   ```bash
   npm install @stripe/stripe-js stripe
   ```

3. **Add Environment Variables**
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   ```

4. **Create Stripe Checkout API Route**
   Create `src/app/api/create-checkout-session/route.ts`:

   ```typescript
   import { NextResponse } from 'next/server';
   import Stripe from 'stripe';

   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
     apiVersion: '2023-10-16',
   });

   export async function POST(req: Request) {
     const { productId, quantity } = await req.json();
     
     // Get product details
     const product = await getProductById(productId);
     
     const session = await stripe.checkout.sessions.create({
       payment_method_types: ['card'],
       line_items: [
         {
           price_data: {
             currency: 'usd',
             product_data: {
               name: product.name,
               images: [product.image],
             },
             unit_amount: product.price * 100,
           },
           quantity: quantity,
         },
       ],
       mode: 'payment',
       success_url: `${req.headers.get('origin')}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
       cancel_url: `${req.headers.get('origin')}/checkout/cancel`,
     });

     return NextResponse.json({ sessionId: session.id });
   }
   ```

5. **Update Checkout Page**
   ```typescript
   import { loadStripe } from '@stripe/stripe-js';

   const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

   const handlePayment = async () => {
     const stripe = await stripePromise;
     
     const response = await fetch('/api/create-checkout-session', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
         productId: product.id,
         quantity: formData.quantity
       }),
     });

     const { sessionId } = await response.json();
     await stripe?.redirectToCheckout({ sessionId });
   };
   ```

---

## Option 3: PayPal

### Setup Steps:

1. **Sign up for PayPal Developer**
   - Visit: https://developer.paypal.com
   - Create Sandbox account

2. **Install PayPal SDK**
   ```bash
   npm install @paypal/react-paypal-js
   ```

3. **Add to Checkout**
   ```typescript
   import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

   <PayPalScriptProvider options={{ "client-id": "YOUR_CLIENT_ID" }}>
     <PayPalButtons
       createOrder={(data, actions) => {
         return actions.order.create({
           purchase_units: [{
             amount: {
               value: totalAmount.toString()
             }
           }]
         });
       }}
       onApprove={async (data, actions) => {
         const details = await actions.order.capture();
         // Create order in database
         handleOrderCreation(details);
       }}
     />
   </PayPalScriptProvider>
   ```

---

## Testing Payment Gateways

### Razorpay Test Cards:
- **Success**: 4111 1111 1111 1111
- **Failure**: 4000 0000 0000 0002
- CVV: Any 3 digits
- Expiry: Any future date

### Stripe Test Cards:
- **Success**: 4242 4242 4242 4242
- **3D Secure**: 4000 0027 6000 3184
- CVV: Any 3 digits
- Expiry: Any future date

### PayPal Sandbox:
- Use sandbox buyer account credentials
- No real money is charged

---

## Security Checklist

✅ Never expose secret keys in frontend code
✅ Use environment variables for API keys
✅ Validate payment on server-side
✅ Store payment IDs with orders
✅ Implement webhook handlers for payment confirmations
✅ Add error handling for failed payments
✅ Log all transactions
✅ Use HTTPS in production

---

## Recommended: Start with Razorpay

**Why Razorpay?**
- ✅ Easy integration
- ✅ Free test mode
- ✅ Supports UPI, Cards, Net Banking, Wallets
- ✅ Good for Indian market
- ✅ Excellent documentation
- ✅ Quick setup (15 minutes)

**Next Steps:**
1. Sign up at https://razorpay.com
2. Get test API keys
3. Follow Option 1 above
4. Test with test cards
5. Switch to live keys when ready

---

## Need Help?

- Razorpay Docs: https://razorpay.com/docs
- Stripe Docs: https://stripe.com/docs
- PayPal Docs: https://developer.paypal.com/docs

**Note**: All payment gateways have free test modes. You can test the entire flow without spending money!
