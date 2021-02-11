import client from './api';

const productService = {
  getProduct(sku) {
    return client.request({
      method: 'get',
      url: `/V1/products/${sku}`,
    });
  },
  getProductByUrl(url) {
    return client.request({
      method: 'get',
      url,
    });
  },
  createProduct(data) {
    return client.request({
      method: 'post',
      url: '/V1/products',
      data,
    });
  },
  updateProduct(sku, data) {
    return client.request({
      method: 'put',
      url: `/V1/products/${sku}`,
      data,
    });
  },
  addImage(sku, data) {
    return client.request({
      method: 'post',
      url: `/V1/products/${sku}/media`,
      data,
    });
  },
};

export default productService;
