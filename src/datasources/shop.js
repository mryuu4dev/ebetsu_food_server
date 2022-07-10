const { RESTDataSource } = require('apollo-datasource-rest');
const { XMLHttpRequest } = require('xmlhttprequest');

const apiKey = process.env.GOURMET_API_KEY;

class ShopAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/';
  }

  load(_url) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", _url, false);  //同期モード
    xhr.send(null);
    return xhr.status;
  }

  shopReducer(shop) {
    const photo = shop.photo.pc.l || shop.photo.pc.m || shop.photo.pc.s;
    const origin_photo = this.load(photo.replace(/_[0-9]*/gi, '')) == 404 ? // [警告] 大量のリクエストを伴う可能性あり
      photo : photo.replace(/_[0-9]*/gi, '');

    return {
      id: shop.id || 0,
      name: shop.name,
      description: shop.other_memo || shop.catch || shop.genre.catch,
      address: shop.address,
      open: shop.open,
      close: shop.close,
      parking: shop.parking,
      photo: origin_photo,
      map: {
        lat: shop.lat,
        lng: shop.lng,
      },
      url: shop.urls.pc,
      wifi: shop.wifi,
    };
  }

  async getAllShops() {
    const response = await this.get(`?key=${apiKey}&small_area=XIIT&genre=G014&count=100&format=json`);
    const parse_data = JSON.parse(response);
    const shops = parse_data.results.shop;

    return Array.isArray(shops)
      ? shops.map(shop => this.shopReducer(shop)) : [];
  }
}

module.exports = ShopAPI;
