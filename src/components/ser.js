const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/shopping", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Product & Cart schema (Same structure)
const productSchema = new mongoose.Schema({
  id: Number,
  description: String,
  category: String,
  price: Number,
  dateAdded: String,
  stock: Number,
  image: String,
});

const cartSchema = new mongoose.Schema({
  id: Number, // Same as product ID
  description: String,
  category: String,
  price: Number,
  dateAdded: String,
  stock: Number,
  image: String,
  quantity: { type: Number, default: 1 },
});

const Product = mongoose.model("Product", productSchema);
const Cart = mongoose.model("Cart", cartSchema);

// Fetch products by category
app.get("/api/products", async (req, res) => {
  const { category } = req.query;
  try {
    const query = category ? { category } : {};
    const products = await Product.find(query);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products." });
  }
});

// Fetch cart items
app.get("/api/cart", async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cart." });
  }
});

// Add item to cart
app.post("/api/cart", async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const product = await Product.findOne({ id: productId });
    if (!product) return res.status(404).json({ error: "Product not found." });

    const existingCartItem = await Cart.findOne({ id: productId });
    if (existingCartItem) {
      existingCartItem.quantity += quantity;
      await existingCartItem.save();
    } else {
      const newCartItem = new Cart({ ...product.toObject(), quantity });
      await newCartItem.save();
    }

    res.json({ message: "Item added to cart." });
  } catch (err) {
    res.status(500).json({ error: "Failed to add item to cart." });
  }
});

// Update cart item quantity
app.put("/api/cart/:id", async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  try {
    const updatedCart = await Cart.findOneAndUpdate({ id }, { quantity }, { new: true });
    res.json({ message: "Cart updated.", updatedCart });
  } catch (err) {
    res.status(500).json({ error: "Failed to update cart." });
  }
});

// Remove an item from cart
app.delete("/api/cart/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Cart.deleteOne({ id });
    res.json({ message: "Item removed from cart." });
  } catch (err) {
    res.status(500).json({ error: "Failed to remove item from cart." });
  }
});

// Clear cart
app.delete("/api/cart", async (req, res) => {
  try {
    await Cart.deleteMany({});
    res.json({ message: "Cart cleared." });
  } catch (err) {
    res.status(500).json({ error: "Failed to clear cart." });
  }
});

// Reduce stock after checkout
app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const { stock } = req.body;
  try {
    const updatedProduct = await Product.findOneAndUpdate({ id }, { stock }, { new: true });
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: "Failed to update product stock." });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
