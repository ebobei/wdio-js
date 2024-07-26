const goodsPage = require("../../../page/goods.page/goods.page");
const basePage = require("../../../page/base.page/base.page");
const url = require("../../../testdata/url");

function checkGoodsOnStage(goodsUrl) {
  browser.url(url.main + goodsUrl);
  goodsPage.productDetail.checkGoodsTitle();
  goodsPage.productDetail.checkAvailabilityStatus();
  const goodsName = goodsPage.productDetail.getGoodsName();
  return goodsName;
}

describe("Проверка наличия товаров", function () {
  this.retries(process.env.RETRIES);

  before("Открытие главной страницы и вход в аккаунт", function () {
    browser.url(url.main);
    basePage.core.tryToAcceptCokies();
    basePage.core.tryToCloseSearchBanner();
  });

  Object.entries(url.goods).forEach(([key, value]) => {
    if (key === 'productOutOfStock') {
      return;
    }
    it(`Проверка наличия товаров для тестов ${key} ${url.main}${value}`, function () {
      checkGoodsOnStage(value);
    });
  });
});
