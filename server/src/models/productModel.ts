
import  pool  from "../config/db";

class Products {
  static async getAllProducts() {
    return await pool.query("SELECT * FROM products");
  }

  static async getProductById(id: number) {
    return await pool.query("SELECT * FROM products WHERE id = $1", [id]);
  }

  static async addProduct(product: any) {
    return await pool.query(
      "INSERT INTO products (name, price, color, category) VALUES ($1, $2, $3, $4) RETURNING *",
      [product.name, product.price, product.color, product.category]
    );
  }

  static async updateProduct(id: number, product: any) {
    return await pool.query(
      "UPDATE products SET name =$1, price = $2, color = $3, category = $4 WHERE id = $5",
      [product.name, product.price, product.color, product.category, id]
    );
  }
}

module.exports = Products;