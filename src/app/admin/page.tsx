"use client";

import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Package, ShoppingCart, DollarSign, Users } from "lucide-react";
import Image from "next/image";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
}

interface Order {
    id: string;
    date: string;
    customer: {
        name: string;
        email: string;
        phone: string;
        address: string;
        city: string;
        state: string;
        zip: string;
    };
    items: any[];
    total: number;
    status: string;
}

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState<"products" | "orders">("products");
    const [products, setProducts] = useState<Product[]>([]);
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [showProductModal, setShowProductModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);

    const [productForm, setProductForm] = useState({
        name: "",
        price: "",
        image: "",
        category: "",
        description: ""
    });

    useEffect(() => {
        loadProducts();
        loadOrders();
    }, []);

    const loadProducts = async () => {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
    };

    const loadOrders = async () => {
        const res = await fetch("/api/orders");
        const data = await res.json();
        setOrders(data);
    };

    const handleAddProduct = () => {
        setEditingProduct(null);
        setProductForm({ name: "", price: "", image: "", category: "", description: "" });
        setShowProductModal(true);
    };

    const handleEditProduct = (product: Product) => {
        setEditingProduct(product);
        setProductForm({
            name: product.name,
            price: product.price.toString(),
            image: product.image,
            category: product.category,
            description: product.description
        });
        setShowProductModal(true);
    };

    const handleDeleteProduct = async (id: number) => {
        if (!confirm("Are you sure you want to delete this product?")) return;

        await fetch(`/api/products/${id}`, { method: "DELETE" });
        loadProducts();
    };

    const handleSubmitProduct = async (e: React.FormEvent) => {
        e.preventDefault();

        const method = editingProduct ? "PUT" : "POST";
        const url = editingProduct ? `/api/products/${editingProduct.id}` : "/api/products";

        await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: productForm.name,
                price: Number(productForm.price),
                image: productForm.image,
                category: productForm.category,
                description: productForm.description
            })
        });

        setShowProductModal(false);
        loadProducts();
    };

    const stats = {
        totalProducts: products.length,
        totalOrders: orders.length,
        totalRevenue: orders.reduce((sum, order) => sum + order.total, 0),
        pendingOrders: orders.filter(o => o.status === "pending").length
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
            <div className="container max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-slate-800 mb-2">Admin Dashboard</h1>
                    <p className="text-slate-600">Manage Maharishii Astrological Centre products and customer orders</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                        <div className="flex items-center justify-between mb-2">
                            <Package className="w-8 h-8 text-blue-500" />
                            <span className="text-3xl font-bold text-slate-800">{stats.totalProducts}</span>
                        </div>
                        <p className="text-slate-600 font-medium">Total Products</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                        <div className="flex items-center justify-between mb-2">
                            <ShoppingCart className="w-8 h-8 text-green-500" />
                            <span className="text-3xl font-bold text-slate-800">{stats.totalOrders}</span>
                        </div>
                        <p className="text-slate-600 font-medium">Total Orders</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                        <div className="flex items-center justify-between mb-2">
                            <DollarSign className="w-8 h-8 text-emerald-500" />
                            <span className="text-3xl font-bold text-slate-800">₹{stats.totalRevenue}</span>
                        </div>
                        <p className="text-slate-600 font-medium">Total Revenue</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                        <div className="flex items-center justify-between mb-2">
                            <Users className="w-8 h-8 text-purple-500" />
                            <span className="text-3xl font-bold text-slate-800">{stats.pendingOrders}</span>
                        </div>
                        <p className="text-slate-600 font-medium">Pending Orders</p>
                    </div>
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                    <div className="flex border-b border-slate-200">
                        <button
                            onClick={() => setActiveTab("products")}
                            className={`flex-1 px-6 py-4 font-bold text-lg transition-colors ${activeTab === "products"
                                ? "bg-blue-500 text-white"
                                : "bg-white text-slate-600 hover:bg-slate-50"
                                }`}
                        >
                            Products Management
                        </button>
                        <button
                            onClick={() => setActiveTab("orders")}
                            className={`flex-1 px-6 py-4 font-bold text-lg transition-colors ${activeTab === "orders"
                                ? "bg-blue-500 text-white"
                                : "bg-white text-slate-600 hover:bg-slate-50"
                                }`}
                        >
                            Orders & Requests
                        </button>
                    </div>

                    <div className="p-6">
                        {activeTab === "products" && (
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold text-slate-800">Your Products</h2>
                                    <button
                                        onClick={handleAddProduct}
                                        className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg"
                                    >
                                        <Plus className="w-5 h-5" /> Add New Product
                                    </button>
                                </div>

                                {loading ? (
                                    <div className="text-center py-12">
                                        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                                    </div>
                                ) : products.length === 0 ? (
                                    <div className="text-center py-12 text-slate-500">
                                        <Package className="w-16 h-16 mx-auto mb-4 opacity-50" />
                                        <p>No products yet. Add your first product!</p>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {products.map((product) => (
                                            <div key={product.id} className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow">
                                                <div className="relative h-48 bg-slate-200">
                                                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                                                </div>
                                                <div className="p-4">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div>
                                                            <h3 className="font-bold text-slate-800 text-lg">{product.name}</h3>
                                                            <p className="text-sm text-slate-500">{product.category}</p>
                                                        </div>
                                                        <span className="text-xl font-bold text-blue-600">₹{product.price}</span>
                                                    </div>
                                                    <p className="text-sm text-slate-600 line-clamp-2 mb-4">{product.description}</p>
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => handleEditProduct(product)}
                                                            className="flex-1 flex items-center justify-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-200 transition-colors"
                                                        >
                                                            <Edit2 className="w-4 h-4" /> Edit
                                                        </button>
                                                        <button
                                                            onClick={() => handleDeleteProduct(product.id)}
                                                            className="flex-1 flex items-center justify-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-lg font-medium hover:bg-red-200 transition-colors"
                                                        >
                                                            <Trash2 className="w-4 h-4" /> Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === "orders" && (
                            <div>
                                <h2 className="text-2xl font-bold text-slate-800 mb-6">Customer Orders</h2>

                                {orders.length === 0 ? (
                                    <div className="text-center py-12 text-slate-500">
                                        <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-50" />
                                        <p>No orders yet.</p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {orders.map((order) => (
                                            <div key={order.id} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <h3 className="font-bold text-slate-800 text-lg">Order #{order.id}</h3>
                                                        <p className="text-sm text-slate-500">{new Date(order.date).toLocaleDateString()}</p>
                                                    </div>
                                                    <span className={`px-4 py-1 rounded-full text-sm font-bold ${order.status === "paid" ? "bg-green-100 text-green-700" :
                                                        order.status === "shipped" ? "bg-blue-100 text-blue-700" :
                                                            "bg-yellow-100 text-yellow-700"
                                                        }`}>
                                                        {order.status.toUpperCase()}
                                                    </span>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-700 mb-1">Customer Details:</p>
                                                        <p className="text-sm text-slate-600">{order.customer.name}</p>
                                                        <p className="text-sm text-slate-600">{order.customer.email}</p>
                                                        <p className="text-sm text-slate-600">{order.customer.phone}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-slate-700 mb-1">Shipping Address:</p>
                                                        <p className="text-sm text-slate-600">{order.customer.address}</p>
                                                        <p className="text-sm text-slate-600">{order.customer.city}, {order.customer.state} {order.customer.zip}</p>
                                                    </div>
                                                </div>

                                                <div className="border-t border-slate-200 pt-4">
                                                    <p className="text-sm font-bold text-slate-700 mb-2">Order Items:</p>
                                                    {order.items.map((item: any, idx: number) => (
                                                        <div key={idx} className="flex justify-between text-sm text-slate-600 mb-1">
                                                            <span>{item.productName || `Product #${item.productId}`} (x{item.quantity})</span>
                                                            <span>₹{item.priceConfirm * item.quantity}</span>
                                                        </div>
                                                    ))}
                                                    <div className="flex justify-between font-bold text-lg text-slate-800 mt-3 pt-3 border-t border-slate-200">
                                                        <span>Total:</span>
                                                        <span className="text-green-600">₹{order.total}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Product Modal */}
            {showProductModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">
                            {editingProduct ? "Edit Product" : "Add New Product"}
                        </h2>

                        <form onSubmit={handleSubmitProduct} className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Product Name *</label>
                                <input
                                    type="text"
                                    required
                                    value={productForm.name}
                                    onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                    placeholder="e.g., Planetary Yantra"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Price (₹) *</label>
                                    <input
                                        type="number"
                                        required
                                        step="0.01"
                                        value={productForm.price}
                                        onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                        placeholder="299"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Category *</label>
                                    <input
                                        type="text"
                                        required
                                        value={productForm.category}
                                        onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                        placeholder="e.g., Navagraha"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Image URL *</label>
                                <input
                                    type="url"
                                    required
                                    value={productForm.image}
                                    onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                    placeholder="https://images.unsplash.com/..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Description *</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={productForm.description}
                                    onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
                                    placeholder="Detailed product description..."
                                />
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowProductModal(false)}
                                    className="flex-1 px-6 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-bold hover:bg-slate-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-6 py-3 rounded-xl bg-blue-500 text-white font-bold hover:bg-blue-600 transition-colors shadow-lg"
                                >
                                    {editingProduct ? "Update Product" : "Add Product"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
}
