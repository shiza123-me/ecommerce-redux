import axios from "../../lib/axios";
import { products } from "../../data/products";

// simulate API call
export const fetchProductsAPI = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: products });
    }, 500);
  });
};
