import { NextResponse } from 'next/server';
import { getProducts, saveProducts, Product } from '@/lib/db';

// GET single product
export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id: paramId } = await params;
    const products = getProducts();
    const id = Number(paramId);
    const product = products.find((p) => p.id === id);

    if (!product) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json(product);
}

// PUT update product
export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: paramId } = await params;
        const body = await req.json();
        const products = getProducts();
        const id = Number(paramId);
        const index = products.findIndex((p) => p.id === id);

        if (index === -1) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        // Update fields
        const updatedProduct = { ...products[index], ...body, id }; // Ensure ID doesn't change
        products[index] = updatedProduct;
        saveProducts(products);

        return NextResponse.json(updatedProduct);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
    }
}

// DELETE product
export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id: paramId } = await params;
    const products = getProducts();
    const id = Number(paramId);
    const filteredProducts = products.filter((p) => p.id !== id);

    if (products.length === filteredProducts.length) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    saveProducts(filteredProducts);
    return NextResponse.json({ message: 'Product deleted successfully' });
}
