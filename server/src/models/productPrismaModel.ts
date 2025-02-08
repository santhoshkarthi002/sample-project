import database from "../config/database";

export const getAllProducts = async () => {
  const products = await database.products.findMany();
  return products;
};

export const getProductById = async (id: number) => {
  const product = await database.products.findUnique({
    where: { id },
  });
  return product;
};

export const createProduct = async (product: any) => {
  const newProduct = await database.products.create({
    data: product,
  });
  return newProduct;
};

export const updateProduct = async (id: number, product: any) => {
  const updatedProduct = await database.products.update({
    where: { id },
    data: product,
  });
  return updatedProduct;
};

export const deleteProduct = async (id: number) => {
  const deletedProduct = await database.products.delete({
    where: { id },
  });
  return deletedProduct;
};