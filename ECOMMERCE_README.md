# Vastu Consultant E-Commerce Website

A complete e-commerce solution for selling Vastu products with separate customer and admin interfaces.

## 🚀 Features

### Customer Features
- **Browse Products**: View all available Vastu products on the homepage
- **Product Details**: Click any product to see full description, pricing, and features
- **Secure Checkout**: Complete order form with customer details and shipping address
- **Order Confirmation**: Instant confirmation after successful purchase
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

### Admin Features (Client Dashboard)
- **Product Management**: Add, edit, and delete products
- **Order Management**: View all customer orders with full details
- **Dashboard Analytics**: See total products, orders, revenue, and pending orders
- **Real-time Updates**: All changes reflect immediately

## 📁 Project Structure

```
vastu-web/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Homepage (customer view)
│   │   ├── products/[id]/page.tsx      # Product detail page
│   │   ├── checkout/page.tsx           # Checkout & payment page
│   │   ├── admin/page.tsx              # Admin dashboard
│   │   └── api/
│   │       ├── products/route.ts       # GET all products, POST new product
│   │       ├── products/[id]/route.ts  # GET, PUT, DELETE single product
│   │       └── orders/route.ts         # GET all orders, POST new order
│   ├── components/
│   │   ├── ProductShowcase.tsx         # Product grid component
│   │   ├── Hero.tsx                    # Homepage hero section
│   │   ├── Services.tsx                # Services section
│   │   └── Testimonials.tsx            # Testimonials section
│   ├── data/
│   │   ├── products.json               # Product database (JSON file)
│   │   └── orders.json                 # Orders database (JSON file)
│   └── lib/
│       └── db.ts                       # Database helper functions
```

## 🛠️ Installation & Setup

1. **Navigate to project directory**:
   ```bash
   cd "c:/Users/rajsh/Desktop/Vastu consultant website/vastu-web"
   ```

2. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   - Customer Website: `http://localhost:3000`
   - Admin Dashboard: `http://localhost:3000/admin`

## 📖 How to Use

### For Customers:
1. Visit the homepage at `http://localhost:3000`
2. Browse available products in the "Sacred Artifacts" section
3. Click on any product to view full details
4. Click "Buy Now" to proceed to checkout
5. Fill in your contact and shipping information
6. Click "Place Order" to complete the purchase
7. Receive instant order confirmation

### For Admin (Client):
1. Visit the admin dashboard at `http://localhost:3000/admin`
2. **To Add a Product**:
   - Click "Add New Product" button
   - Fill in product name, price, category, image URL, and description
   - Click "Add Product"
3. **To Edit a Product**:
   - Click "Edit" button on any product card
   - Modify the details
   - Click "Update Product"
4. **To Delete a Product**:
   - Click "Delete" button on any product card
   - Confirm deletion
5. **To View Orders**:
   - Click "Orders & Requests" tab
   - View all customer orders with full details
   - See customer information, shipping address, and payment status

## 💳 Payment Integration

Currently using **simulated payment** for demo purposes. The system is ready to integrate with:

### Recommended Free/Test Payment Gateways:
1. **Razorpay** (India) - Free test mode
   - Sign up at https://razorpay.com
   - Get API keys from dashboard
   - Add to checkout page

2. **Stripe** (Global) - Free test mode
   - Sign up at https://stripe.com
   - Use test API keys
   - Integrate with Stripe Checkout

3. **PayPal** (Global) - Sandbox mode
   - Sign up at https://developer.paypal.com
   - Use sandbox credentials
   - Test payments without real money

### To Add Real Payment Gateway:
Edit `src/app/checkout/page.tsx` and replace the simulated payment section with actual payment gateway integration.

## 🗄️ Database

Currently using **JSON files** for simplicity:
- `src/data/products.json` - Stores all products
- `src/data/orders.json` - Stores all orders

### To Upgrade to Real Database:
For production, consider upgrading to:
- **MongoDB** (Free tier available)
- **PostgreSQL** with Supabase (Free tier)
- **Firebase** (Free tier)

Simply update the functions in `src/lib/db.ts` to connect to your chosen database.

## 🎨 Customization

### Change Colors/Theme:
Edit `src/app/globals.css` - CSS variables are defined at the top

### Add More Products:
Use the admin dashboard or directly edit `src/data/products.json`

### Modify Product Fields:
Update the `Product` interface in `src/lib/db.ts` and corresponding components

## 📱 Pages Overview

| Page | URL | Purpose |
|------|-----|---------|
| Homepage | `/` | Browse all products |
| Product Detail | `/products/[id]` | View single product details |
| Checkout | `/checkout?productId=[id]` | Complete purchase |
| Admin Dashboard | `/admin` | Manage products & orders |

## 🔒 Security Notes

**Important for Production:**
1. Add authentication to `/admin` route (currently public)
2. Implement proper payment gateway (not simulated)
3. Add input validation and sanitization
4. Use environment variables for API keys
5. Implement rate limiting on API routes
6. Add HTTPS/SSL certificate
7. Secure database with proper credentials

## 🚢 Deployment

### Deploy to Vercel (Recommended):
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify:
```bash
npm run build
# Upload .next folder to Netlify
```

## 📞 Support

For questions or issues, contact the developer or refer to Next.js documentation:
- Next.js Docs: https://nextjs.org/docs
- React Docs: https://react.dev

## 🎯 Future Enhancements

- [ ] User authentication for admin
- [ ] Email notifications for orders
- [ ] Inventory management
- [ ] Product reviews and ratings
- [ ] Shopping cart (multi-product checkout)
- [ ] Discount codes and coupons
- [ ] Order tracking
- [ ] Analytics dashboard
- [ ] Image upload for products
- [ ] Multi-currency support

---

**Built with Next.js 16, React 19, TypeScript, and Tailwind CSS**
