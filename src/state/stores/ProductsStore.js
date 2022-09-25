import {observable, action} from 'mobx';

import network from '../../Network';

export default class ProductsStore {

	@observable products = [];
	@observable pointsPopup = false;

	@action loadProducts(callback) {
		network.client.get(`yeshtery/products`).then(resp => {
			this.products = resp.data.products;
			if (callback) callback();
		});
	}

	@action setPointsPopup(showPopup) {
		this.pointsPopup = showPopup;
	}

	@action clearStore() {
		this.products = [];
	}
}