import { addProduct, fetchAllProducts, fetchProductById, modifyProduct, removeProduct } from "../services/productsServices";

export const createProductController = async (req: any, res: any) => {
  try {
    const product = await addProduct({
      data: req.body,
    });
    return res.status(201).json(product);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};

export const getAllProductsController = async (req: any, res: any) => {
  try {
    const products = await fetchAllProducts();
    return res.status(200).json(products);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};

export const getProductByIdController = async (req: any, res: any) => {
  try {
    const productId = parseInt(req.params.id, 10);
    const products = await fetchProductById(productId);
    return res.status(200).json(products);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};

export const updateProductController = async (req: any, res: any) => {
  try {
    const product = await modifyProduct(req.params.id, req.body);
    return res.status(200).json(product);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};

export const deleteProductController = async (req: any, res: any) => {
  try {
    const product = await removeProduct(req.params.id);
    return res.status(200).json(product);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};