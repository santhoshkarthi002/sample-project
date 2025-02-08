import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../models/productPrismaModel";


  export const addProduct = async (product: any) => {
    return await createProduct(product.data);
  }

  export const fetchAllProducts = async () => {
    return await getAllProducts();
  };

  export const fetchProductById = async (id: number) => {
    return await getProductById(id);
  };

  export const modifyProduct = async (id: number, product: any) => {
    return await updateProduct(id, product);
  };

  export const removeProduct = async (id: number) => {
    return await deleteProduct(id);
  };