const errorsPage = require("../../../page/errors.page");
const loginData = require("../../../testdata/logindata");
// const basePage = require("../../../page/base.page/base.page");
const url = require("../../../testdata/url");
// const loyaltyFormPage = require("../../../page/personal/loyalty/loyalty.form.page");
const userHelper = require('../../../helpers/user.helper');
require("dotenv").config();

function checkPageFull(testUrl) {
  browser.url(url.main + testUrl);
  errorsPage.checkCannotFindErrors();
  errorsPage.checkErrorMessages();
  errorsPage.checkPreTags();
}

function auth() {
  browser.url(url.main);
  userHelper.userAuthByEmail(loginData.email, loginData.password);
  // basePage.header.clickButtonSignIn();
  // basePage.auth.clickButtonSignInViaEMail();
  // basePage.auth.inputLoginEMail(loginData.email);
  // basePage.auth.inputPassword(loginData.password);
  // basePage.auth.selectCheckboxPolicy();
  // basePage.auth.clickButtonLogin();
  // loyaltyFormPage.tryToCloseLoyaltyForm();
  // basePage.header.clickButtonPersonalInMenu();
}

function cleanBrowser() {
  browser.url(url.main);
  browser.deleteAllCookies();
  browser.execute("window.localStorage.clear()");
}

describe("Проверка страницы профиля пользователя на наличие ошибок Cannot find и содержания тэга pre", function () {
  this.retries(process.env.RETRIES);

  after("Очистка cookies, local storage и разлогин", function () {
    cleanBrowser();
  });

  before("Разворачивание браузера на полный экран", function () {
    auth();
  });

  const config = [
    {
      testName: "Проверка страницы личного кабинета",
      url: "personal/",
    },
    {
      testName: 'Проверка страницы "Моя корзина"',
      url: "personal/cart/",
    },
    {
      testName: 'Проверка страницы "Кабинет врача"',
      url: "personal/doctor/",
    },
    {
      testName: 'Проверка страницы "Избранное"',
      url: "personal/favourite/",
    },
    {
      testName: 'Проверка страницы "Обратная связь"',
      url: "personal/feedback/",
    },
    {
      testName: 'Проверка страницы "История заказов"',
      url: "personal/order/",
    },
    {
      testName: 'Проверка страницы "Что с моим заказом"',
      url: "personal/order/status.php",
    },
    {
      testName: 'Проверка страницы "Профиль"',
      url: "personal/profile/",
    },
  ];

  config.forEach((config) => {
    it(config.testName, function () {
      checkPageFull(config.url);
    });
  });
});

describe("Проверка главной страницы на наличие ошибок Cannot find и содержания тэга pre", function () {
  this.retries(process.env.RETRIES);

  before("Очистка cookies, local storage и разлогин", function () {
    cleanBrowser();
  });

  const config = [
    {
      testName: "Проверка главной страницы",
      url: "",
    },
    {
      testName: 'Проверка страницы "Доставка"',
      url: "company/delivery/",
    },
    {
      testName: "Проверка страницы доставки для конкретного города",
      url: "company/delivery/arkhangelskoe/",
    },
    {
      testName: 'Проверка страницы "Самовывоз"',
      url: "company/pickup/",
    },
    {
      testName: "Проверка страницы самовывоза для конкретной локации",
      url: "company/pickup/baumanskaya/",
    },
    {
      testName: 'Проверка страницы "Скидки и акции в аптеке"',
      url: "company/stock/",
    },
    {
      testName: 'Проверка страницы "ВАУ-скидки аптеке"',
      url: "company/stock/wow-sales/",
    },
    {
      testName: 'Проверка страницы "Победим простуду вместе"',
      url: "meta/pobedim-prostudu-vmeste/",
    },
    {
      testName:
        'Проверка страницы "Победим простуду вместе" -> Антисептики для наружного и местного применения',
      url: "meta/pobedim-prostudu-vmeste/antiseptiki-dlya-naruzhnogo-i-mestnogo-primeneniya/",
    },
    {
      testName: 'Проверка страницы "Статьи"',
      url: "articles/",
    },
    {
      testName: "Проверка страницы конкретной статьи",
      url: "articles/health/koronavirus_kak_ne_zabolet_i_ne_poddatsya_panike/",
    },
    {
      testName: "Проверка страницы конкретного лендинга",
      url: "landing/flebodia/",
    },
  ];

  config.forEach((config) => {
    it(config.testName, function () {
      checkPageFull(config.url);
    });
  });
});

describe('Проверка раздела "Компания" на наличие ошибок Cannot find и содержания тэга pre', function () {
  this.retries(process.env.RETRIES);

  before("Очистка cookies, local storage и разлогин", function () {
    cleanBrowser();
  });

  const config = [
    {
      testName: 'Проверка страницы "О компании"',
      url: "landing/about/",
    },
    {
      testName: 'Проверка страницы "Реклама на сайте"',
      url: "company/advertising/",
    },
    {
      testName: 'Проверка страницы "Контакты"',
      url: "company/contacts/",
    },
    {
      testName: 'Проверка страницы "Пользовательское соглашение"',
      url: "company/contract/",
    },
    {
      testName: 'Проверка страницы "Обратная связь"',
      url: "company/feedback/",
    },
    {
      testName: 'Проверка страницы "Франшиза"',
      url: "company/franchise/",
    },
    {
      testName: 'Проверка страницы "Как купить"',
      url: "company/howto/",
    },
    {
      testName: 'Проверка страницы "Наша лицензия"',
      url: "company/license/",
    },
    {
      testName: 'Проверка страницы "Наша миссия"',
      url: "company/mission/",
    },
    {
      testName: 'Проверка страницы "Новости"',
      url: "company/news/",
    },
    {
      testName: 'Проверка страницы "Лекарства оптом"',
      url: "company/opt/",
    },
    {
      testName: 'Проверка страницы "Наши партнеры"',
      url: "company/partners/",
    },
    {
      testName: 'Проверка страницы "Способы оплаты"',
      url: "landing/payment/",
    },
    {
      testName: 'Проверка страницы "Политика конфиденциальности"',
      url: "company/policy/",
    },
    {
      testName: 'Проверка страницы "Отзывы о работе еаптеки"',
      url: "company/reviews_site/",
    },
    {
      testName: 'Проверка страницы "Наши поставщики"',
      url: "company/supplier/",
    },
    {
      testName: 'Проверка страницы "Вакансии"',
      url: "landing/vacancy/",
    },
    {
      testName: 'Проверка страницы "Медицинский справочник"',
      url: "medspravochnik/",
    },
  ];

  config.forEach((config) => {
    it(config.testName, function () {
      checkPageFull(config.url);
    });
  });
});

describe("Проверка списка товаров и КТ на наличие ошибок Cannot find и содержания тэга pre", function () {
  this.retries(process.env.RETRIES);

  before("Очистка cookies, local storage и разлогин", function () {
    cleanBrowser();
  });

  const config = [
    {
      testName: "Проверка корневой страницы поиска",
      url: "search/",
    },
    {
      testName: "Проверка страницы результатов поиска",
      url: "search/?q=%D0%BB%D0%B8%D0%BC%D0%BE%D0%BD",
    },
    {
      testName: "Проверка страницы лекарств",
      url: "goods/",
    },
    {
      testName: "Проверка страницы конкретного лекарства",
      url: "goods/id100177/",
    },
    {
      testName: "Проверка перехода в лекарство из каталога",
      url: "goods/id205185/?utm_referrer=https%3a%2f%2fwww.eapteka.ru%2fgoods%2fmedical%2f",
    },
    {
      testName: "Проверка перехода в лекарство с главной",
      url: "goods/adapter_beurer_setevoy_dlya_tonometra_bm70_07129_b/",
    },
    {
      testName: "Проверка страницы поиска по действующему веществу",
      url: "goods/active_ingredient/abakavir/",
    },
    {
      testName: "Проверка страницы поиска по бренду",
      url: "goods/brand/akku_chek/",
    },
    {
      testName: 'Проверка страницы "Средства для гигиены и красоты"',
      url: "goods/beauty/",
    },
    {
      testName: 'Проверка страницы "Косметика для загара"',
      url: "goods/beauty/kosmetika_dlya_zagara/",
    },
    {
      testName: 'Проверка страницы "Автозагары"',
      url: "goods/beauty/kosmetika_dlya_zagara/sredstva_dlya_avtozagara/",
    },
    {
      testName:
        'Проверка страницы "Автозагары" с выставленным фильтром по бренду',
      url: "goods/beauty/kosmetika_dlya_zagara/sredstva_dlya_avtozagara/?b=aven",
    },
  ];

  config.forEach((config) => {
    it(config.testName, function () {
      checkPageFull(config.url);
    });
  });
});
