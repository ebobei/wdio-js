const searchResultsPage = require("../../../page/search.results.page/search.results.page");
const url = require("../../../testdata/url");
const goodsPage = require("../../../page/goods.page/goods.page");
const personalPage = require("../../../page/personal/personal.page");
const cartPage = require("../../../page/personal/cart/cart.page");
const { assert } = require("chai");
const makeOrderPage = require("../../../page/make.order.page/make.order.page");
const makeAdaptiveOrderPage = require("../../../page/make.order.page/make.adaptive.order.page");
const loginData = require("../../../testdata/logindata");
const searchData = require("../../../testdata/searchdata");
const basePage = require("../../../page/base.page/base.page");
const userHelper = require('../../../helpers/user.helper');
require("dotenv").config();

function makeOrderWithDelivery(address) {
  const checkuotType = makeOrderPage.checkMakeOrderTitle();
  if (checkuotType === "adaptive") {
    basePage.core.tryToAcceptCokies();
    makeAdaptiveOrderPage.clickButtonDelivery();
    makeAdaptiveOrderPage.checkAdress(address);
    makeAdaptiveOrderPage.waitUntilLoaderNotDisplayed();
    makeAdaptiveOrderPage.fillFlat();
    makeAdaptiveOrderPage.fillFloor();
    makeAdaptiveOrderPage.fillEntrance();
    makeAdaptiveOrderPage.fillKeycode();
    makeAdaptiveOrderPage.clickDatePicker();
    makeAdaptiveOrderPage.pickDate();
    makeAdaptiveOrderPage.clickDeliveryTimeZone();
    makeAdaptiveOrderPage.clickButtonSelectTimeZone();
    makeAdaptiveOrderPage.waitUntilLoaderNotDisplayed();
    makeAdaptiveOrderPage.addComment();
    makeAdaptiveOrderPage.pickCashAsPaymentMethod();
    makeAdaptiveOrderPage.waitUntilLoaderNotDisplayed();
    makeAdaptiveOrderPage.clickButtonConfirmOrder();
  } else {
    basePage.core.tryToAcceptCokies();
    makeOrderPage.disableSmsNotification();
    makeOrderPage.fillAddress(address);
    makeOrderPage.waitUntilLoaderNotDisplayed();
    makeOrderPage.fillEntrance();
    makeOrderPage.fillFloor();
    makeOrderPage.fillFlat();
    makeOrderPage.fillKeycode();
    makeOrderPage.clickTimeZonePicker();
    makeOrderPage.clickDeliveryTimeZone();
    makeOrderPage.waitUntilLoaderNotDisplayed();
    makeOrderPage.addComment();
    makeOrderPage.pickCashAsPaymentMethod();
    makeOrderPage.waitUntilLoaderNotDisplayed();
    //makeAdaptiveOrderPage.tryInputName();
    makeOrderPage.clickButtonConfirmOrder();
  }
}

function makeOrderWithPickUp() {
  const checkuotType = makeOrderPage.checkMakeOrderTitle();
  if (checkuotType === "adaptive") {
    basePage.core.tryToAcceptCokies();
    makeAdaptiveOrderPage.clickButtonPickup();
    makeAdaptiveOrderPage.waitUntilLoaderNotDisplayed();
    makeAdaptiveOrderPage.clickButtonPharmacyList();
    makeAdaptiveOrderPage.choosePharmacy();
    makeAdaptiveOrderPage.waitUntilLoaderNotDisplayed();
    makeAdaptiveOrderPage.pickCashAsPaymentMethod();
    //makeAdaptiveOrderPage.tryInputName();
    makeAdaptiveOrderPage.clickButtonConfirmOrder();
  } else {
    basePage.core.tryToAcceptCokies();
    makeOrderPage.disableSmsNotification();
    makeOrderPage.clickButtonPickup();
    makeOrderPage.waitUntilLoaderNotDisplayed();
    makeOrderPage.clickButtonPharmacyList();
    makeOrderPage.choosePharmacy();
    makeOrderPage.waitUntilLoaderNotDisplayed();
    makeOrderPage.pickCashAsPaymentMethod();
    makeOrderPage.clickButtonConfirmOrder();
  }
}

function tryToClearCard() {
  browser.url(`${url.main}personal/cart/`);
  cartPage.tryToClearCart();
}

function testDelivery(cityUrl, diliveryAdress) {
  browser.url(url.main + cityUrl);
  basePage.core.tryToCloseSearchBanner();
  basePage.search.inputSearchQuery(searchData.goodsForProdOrders);
  basePage.search.clickButtonSearch();
  searchResultsPage.clickGoodsTitle();
  goodsPage.productDetail.clickButtonAddToCart();
  goodsPage.productDetail.tryToClearActiveAnalog();
  goodsPage.productDetail.clickButtonInCart();
  goodsPage.productDetail.tryToClearActiveAnalog();
  cartPage.clickButtonMakeOrder();
  makeOrderPage.checkMakeOrderTitle();
  makeOrderWithDelivery(diliveryAdress);
  let number = makeOrderPage.getOrderNumber();
  makeOrderPage.clickButtonAccount();
  personalPage.clickOrdersInMenu();
  personalPage.openLastOrder();
  let numberInAcc = personalPage.getOrderNumberInAccount();
  assert.equal(
    number,
    numberInAcc,
    "Номер заказа со страницы успешного оформления заказа не совпадает с номером заказа в личном кабинете!"
  );
  personalPage.checkOrderInfoStatus();
}

function testPickup(cityUrl) {
  browser.url(url.main + cityUrl);
  basePage.core.tryToCloseSearchBanner();
  basePage.search.inputSearchQuery(searchData.goodsForProdOrders);
  basePage.search.clickButtonSearch();
  searchResultsPage.clickGoodsTitle();
  goodsPage.productDetail.clickButtonAddToCart();
  goodsPage.productDetail.tryToClearActiveAnalog();
  goodsPage.productDetail.clickButtonInCart();
  goodsPage.productDetail.tryToClearActiveAnalog();
  cartPage.clickButtonMakeOrder();
  makeOrderPage.waitUntilLoaderNotDisplayed();
  makeOrderPage.checkMakeOrderTitle();
  makeOrderWithPickUp();
  let number = makeOrderPage.getOrderNumber();
  makeOrderPage.clickButtonAccount();
  personalPage.clickOrdersInMenu();
  personalPage.openLastOrder();
  let numberInAcc = personalPage.getOrderNumberInAccount();
  assert.equal(
    number,
    numberInAcc,
    "Номер заказа со страницы успешного оформления заказа не совпадает с номером заказа в личном кабинете!"
  );
  personalPage.checkOrderInfoStatus();
}

const config = [
  {
    cityName: "Москва",
    url: "",
    diliveryAdress: "г Москва, Красная пл, д 1",
  },
  {
    cityName: "Тверь",
    url: "tver/",
    diliveryAdress: "г Тверь, пр-кт Ленина, д 2",
  },
  {
    cityName: "Воронеж",
    url: "voronezh/",
    diliveryAdress: "",
  },
];

describe("Оформление доставки и самовывоза", function () {
  this.retries(process.env.RETRIES);

  before("Открытие главной страницы и вход в аккаунт", function () {
    browser.url(url.main);
    userHelper.userAuthByEmail(loginData.email, loginData.password);
  });

  beforeEach("Открытие главной страницы и очистка корзины", function () {
    tryToClearCard();
  });

  config.forEach((city) => {
    it(`Оформление самовывоза в ${city.cityName}`, function () {
      testPickup(city.url);
    });
    if (city.diliveryAdress) {
      it(`Оформление доставки в ${city.cityName}`, function () {
        testDelivery(city.url, city.diliveryAdress);
      });
    }
  });
});
