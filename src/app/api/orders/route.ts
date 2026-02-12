import { NextResponse } from 'next/server';
import { getOrders, addOrder, getProducts } from '@/lib/db';

// GET all orders (Admin only effectively)
export async function GET() {
    const orders = getOrders();
    return NextResponse.json(orders);
}

// POST new order (Checkout)
export async function POST(req: Request) {
    try {
        const body = await req.json();
        // body: { customer: {...}, items: [{productId, quantity}] }

        if (!body.customer || !body.items || body.items.length === 0) {
            return NextResponse.json({ error: 'Invalid order data' }, { status: 400 });
        }

        const products = getProducts();
        let totalAmount = 0;
        const orderItems = body.items.map((item: any) => {
            const product = products.find((p) => p.id === item.productId);
            if (!product) throw new Error(`Product ${item.productId} not found`);

            totalAmount += product.price * item.quantity;
            return {
                productId: item.productId,
                quantity: item.quantity,
                productName: product.name, // Store snapshot
                priceConfirm: product.price
            };
        });

        const newOrder: any = {
            id: Date.now().toString(),
            date: new Date().toISOString(),
            customer: body.customer,
            items: orderItems,
            total: totalAmount,
            status: 'paid' // Since we simulate payment success before hitting this API
        };

        addOrder(newOrder);

        return NextResponse.json({ success: true, orderId: newOrder.id });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
    }
}
