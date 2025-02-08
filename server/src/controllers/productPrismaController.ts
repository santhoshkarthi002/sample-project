import { addProduct, fetchAllProducts, fetchProductById, modifyProduct, removeProduct } from "../services/productsServices";

export const createUserController = async (req: any, res: any) => {
  try {
    console.log('req.body :', req.body);
    const product = await addProduct({
      data: req.body,
    });
    return res.status(201).json(product);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};

export const getAllUsersController = async (req: any, res: any) => {
  try {
    const products = await fetchAllProducts();
    return res.status(200).json(products);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};

export const getUserByIdController = async (req: any, res: any) => {
  try {
    const products = await fetchProductById(req.params.id);
    return res.status(200).json(products);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};

export const updateUserController = async (req: any, res: any) => {
  try {
    const product = await modifyProduct(req.params.id, req.body);
    return res.status(200).json(product);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};

export const deleteUserController = async (req: any, res: any) => {
  try {
    const product = await removeProduct(req.params.id);
    return res.status(200).json(product);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
};