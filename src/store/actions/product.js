import { productService } from '@services';

const getProduct = sku => async () => {
  const result = await productService.getProduct(sku);
  return result.data;
};

const createProduct = data => async () => {
  const result = await productService.createProduct(data);
  return result.data;
};

const updateProduct = (sku, data) => async () => {
  const result = await productService.updateProduct(sku, data);
  return result.data;
};

const addImage = (sku, data) => async () => {
  const result = await productService.addImage(sku, data);
  return result.data;
};

export { getProduct, createProduct, updateProduct, addImage };
