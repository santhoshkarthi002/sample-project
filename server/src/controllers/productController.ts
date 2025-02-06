import { Request, Response } from "express";
const Products = require("../models/productModel");

exports.getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Products.getAllProducts();
    res.status(200).json(products.rows);
  } catch (err) {
    res.status(500).json(err);
    console.error("Error form getAllProducts:", err);
  }
};

exports.createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const newProduct = await Products.addProduct(product);
    res.status(201).json(newProduct.rows);
  } catch (err) {
    res.status(500).json(err);
    console.error("Error from createProduct:", err);
  }
};

exports.getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Products.getProductById(id);
    res.status(200).json(product.rows[0]);
  } catch (err) {
    res.status(500).json(err);
    console.error("Error from getProductById:", err);
  }
};

exports.updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = req.body;
    const updatedProduct = await Products.updateProduct(id, product);
    res.status(200).json(updatedProduct.rows);
  } catch (err) {
    res.status(500).json(err);
    console.error("Error from updateProduct:", err);
  }
};

exports.deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Products.deleteProduct(id);
    res.status(200).json(deletedProduct.rows);
  } catch (err) {
    res.status(500).json(err);
    console.error("Error from deleteProduct:", err);
  }
};
