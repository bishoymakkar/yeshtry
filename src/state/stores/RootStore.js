import ProductsStore from './ProductsStore';

export default class RootStore {
  constructor() {
    this.productsStore = new ProductsStore(this);
  }
}
