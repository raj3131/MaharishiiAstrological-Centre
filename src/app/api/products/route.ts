import { NextResponse } from 'next/server';
import { getProducts, saveProducts, Product } from '@/lib/db';
import fs from 'fs';
import path from 'path';

// GET all products
export async function GET() {
    const products = getProducts();
    return NextResponse.json(products);
}

// POST new product
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const products = getProducts();

        // Simple validation
        if (!body.name || !body.price) {
            return NextResponse.json({ error: 'Name and price are required' }, { status: 400 });
        }

        const newProduct: Product = {
            id: Date.now(), // simple unique ID
            name: body.name,
            price: Number(body.price),
            image: body.image || '/placeholder.jpg',
            category: body.category || 'General',
            description: body.description || ''
        };

        products.push(newProduct);
        saveProducts(products);

        return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
    }
}
