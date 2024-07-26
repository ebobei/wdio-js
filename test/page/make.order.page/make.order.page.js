const { default: AllureReporter } = require("@wdio/allure-reporter");
const { assert } = require("chai");

class MakeOrder {
  get makeOrderTitle() {
    return $('//div[@class="container"]//h1[.="Оформление"]');
  }

  get makeOrderTitleAdaptive() {
    return $('//*[contains(@class, "CheckoutMainHeader")]//h1');
  }

  get fieldName() {
    return $('//input[@name="ORDER_PROP[NAME]"]');
  }

  get fieldEMail() {
    return $('//input[@name="ORDER_PROP[EMAIL]"]');
  }

  get fieldPhoneNumber() {
    return $('//input[@name="ORDER_PROP[PHONE]"]');
  }

  get smsNotificationCheckbox() {
    return $('//label[@for="ALLOW_SMS"]');
  }

  get switchContactlessDelivery() {
    return $('//*[@data-ga-action="contactless_delivery"]');
  }

  get fieldAddress() {
    return $('//input[@name="ORDER_PROP[ADDRESS]"]');
  }

  get addressSuggestionsCollection() {
    return $$(
      '//div[@class="suggestions-suggestions"]//div[@class="suggestions-suggestion"]'
    );
  }

  get suggestionBlock() {
    return $('//div[@class="suggestions-suggestions"]');
  }

  get fieldEntrance() {
    return $('//input[@name="ORDER_PROP[ENTRANCE]"]');
  }

  get fieldFloor() {
    return $('//input[@name="ORDER_PROP[FLOOR]"]');
  }

  get fieldFlat() {
    return $('//input[@name="ORDER_PROP[FLAT]"]');
  }

  get fieldKeycode() {
    return $('//input[@name="ORDER_PROP[KEYCODE]"]');
  }

  get loader() {
    return $('//form[contains(@class, "is-loading") and @id="sec-order"]');
  }

  get deliveryTimeZonesCollection() {
    return $$('//*[@data-express="0"]');
  }

  get timeZonePicker() {
    return $(
      '//div[@class="select sec-order__form-field right"]//span[@class="select_title"]'
    );
  }

  get buttonCash() {
    return $('//label[contains(.,"аличными")]');
  }

  get paymentMethodCollection() {
    return $$('//div[@class="sec-order__text"]');
  }

  get buttonConfirmOrder() {
    return $('//div[@class="sec-order__final"]//button[@name="submit"]');
  }

  get successfulOrderingTitle() {
    return $('//div[@class="sec-thanks__title"]');
  }

  get buttonAccount() {
    return $('//a[contains(@href, "/personal/") and .="Личный кабинет"]');
  }

  get buttonPickup() {
    return $('//a[@data-id="pickup"]');
  }

  get buttonPharmacyList() {
    return $('//button[contains(text(), "Список")]');
  }

  get buttonDelivery() {
    return $('//a[contains(text(), "Заказать доставку")]');
  }

  get deliveryInfo() {
    return $('//div[@id="pickup-only-notice"]');
  }

  get buttonChoosePharmacyCollection() {
    return $$(
      '//*[@class="PickupCoreButtonPrimary_root PickupListItem_buttonSelect"]'
    );
  }

  get pharmaciesList() {
    return $('//div[@class="PickupList_item"]/parent::div');
  }

  get datePicker() {
    return $(
      '//div[@class="select sec-order__form-field left"]//span[@class="select_title"]'
    );
  }

  get dateCollection() {
    return $$(
      '//div[@class="select sec-order__form-field left is-opened"]//ul[@class="select_list"]//li'
    );
  }

  get buttonAddComment() {
    return $('//button[@class="address-comment__add"]');
  }

  get fieldComment() {
    return $('//textarea[@name="ORDER_PROP[ADDRESS_COMMENT]"]');
  }

  get buttonClearAddress() {
    return $('//button[@class="suggestions-clear show"]');
  }

  get fieldStreet() {
    return $('//input[@name="ORDER_PROP[STREET]"]');
  }

  get overload() {
    return $('//*[contains(., "Перевес")]');
  }

  get companyCheckbox() {
    return $('//label[@for="IS_CORPORATE"]');
  }

  get companyCheckboxHide() {
    return this.companyCheckbox.$(
      './parent::div[contains(@class, "is-hide-corporate")]'
    );
  }

  get fieldCompanyName() {
    return $('//input[@name="ORDER_PROP[COMPANY_NAME]"]');
  }

  get fieldCompanyINN() {
    return $('//input[@name="ORDER_PROP[INN]"]');
  }

  get fieldCompanyKPP() {
    return $('//input[@name="ORDER_PROP[KPP]"]');
  }

  get errorMessage() {
    return $('//span[@class="help-block form-error"]');
  }

  get cityForPickupCollection() {
    return $$('//a[@data-ga-event="poisk_pickup" and not(@style)]');
  }

  //FIXME: переодически Яндекс меняет цифру 79 на 80 и т.д., нужно придумать сьтабильный локатор
  get pickupPointsAtYandexMapCollection() {
    return $$(
      '//ymaps[@class="ymaps-2-1-79-placemark-overlay ymaps-2-1-79-user-selection-none"]//ymaps[@class="ymaps-2-1-79-image "]'
    );
  }

  get fieldSearchPickupPoint() {
    return $('//input[@class="PickupInputSearch_input"]');
  }

  get inputSuggestions() {
    return (query) =>
      $(
        `//div[contains(@class, "InputSuggestions_scrollbar")]//div[contains(text(), "${query}")]`
      );
  }

  get buttonPickupInputSearch() {
    return $('//button[@class="PickupInputSearch_buttonSubmit"]');
  }

  get pickupPointsWorkingHours() {
    return $$(
      '//div[@class="PickupList_item"]//div[@class="PickupBlockWorkingHours_root"]'
    );
  }

  get searchResultsCollection() {
    return (query) =>
      $$(
        `//div[@class="PickupListItem_columnLocation" and contains(.,"${query}")]`
      );
  }

  get pickupPointCardOnYandexMap() {
    return $('//div[@class="pickreg--dot"]');
  }

  get selectedPharmacyOnYandexMap() {
    return $('//ymaps[contains(@class, "placemark-overlay")]//ymaps//ymaps');
  }

  get buttonChoosePickupPointAtYandexMap() {
    return $(
      '//div[@class="pickreg--dot"]//a[@data-ga-action="Watch_pickup_map_order"]'
    );
  }

  get selectedPharmacyBlock() {
    return $('//div[@data-action="store-item"]');
  }

  get deliveryPriceInRightBlock() {
    return $('//span[@data-role="price_delivery"]');
  }

  get deliveryPriceInLowerBlock() {
    return $('//div[@class="right final-delivery-price"]//span');
  }

  get orderPriceInRightBlock() {
    return $('//div[contains(@class, "sidebar-summary")]//span');
  }

  get orderPriceInLowerBlock() {
    return $('//div[contains(@class, "final-field total")]//span');
  }

  get buttonBackToCart() {
    return $('//a[.="Корзина"]');
  }

  get visibleNotAvailablePharmaciesCollection() {
    return $$(
      '//tr[@data-action="store-item" and @class="gray-store bx-show"]//span[contains(., "Недоступно")] | //div[@data-action="store-item" and contains(@class, "gray-store bx-show")]//span[contains(., "Недоступно")]'
    );
  }

  get notAvailablePharmacy() {
    return $(
      '//*[@class="PickupBlockAvailabilityMessage_title" and contains(.,"Минимальная сумма заказа")]'
    );
  }

  get footer() {
    return $('//footer[contains(@class, "foot-lg")]');
  }

  get mobileFooter() {
    return $('//footer[contains(@class, "foot-xs")]');
  }

  get buttonScrollUp() {
    return $('//*[@id="tab-bar-app"]/div/div/div[1]');
  }

  get partiallyAvailablePharmaciesCollection() {
    return $$(
      '//div[@class="PickupBlockAvailabilityMessage_title" and contains(., "Недоступно")]'
    );
  }

  get notAvailablePharmaciesCollection() {
    return $$('//div[@class="PickupList_item" and not(.//button)]');
  }

  get disabledOnlinePayment() {
    return $('//div[@id="fake-card"]//small');
  }

  get buttonCard() {
    return $('//label[contains(.,"Картой онлайн")]');
  }

  get buttonCardInput() {
    return this.buttonCard.$(".//input");
  }

  get orderingWithOnlinePaymentErrorTitle() {
    return $(
      '//h2[contains(@class,"order-status") and contains(., "Оплата по заказу не прошла")]'
    );
  }

  get pickupBlock() {
    return $('//div[@data-id="pickup"]');
  }

  get openingHoursAtPharmacyInfo() {
    return $(
      '//div[@id="checkoutOrderPickup-root"]//div[@class="PickupConfirm_locationTime"]'
    );
  }

  get pharmacyFilter() {
    return (filterText) =>
      $(
        `//button[contains(@class, "PickupButtonFilter_root") and contains(., "${filterText}")]`
      );
  }

  get buttonChoosePartiallyAvailablePharmaciesCollection() {
    return $$(
      '//div[@class="PickupBlockAvailabilityMessage_title" and contains(., "Недоступно")]/ancestor::div[contains(@class, "PickupBlockAvailabilityMessage_root")]/following-sibling::button'
    );
  }

  get notInStoreItemsCollection() {
    return $$('//article[@class="PickupBlockUnavailableOffer_root"]');
  }

  get notInStoreItemTitle() {
    return $('//h4[@class="PickupBlockUnavailableOffer_title"]');
  }

  get buttonChangeStore() {
    return $('//button[contains(text(), "Изменить аптеку")]');
  }

  get displayedPharmaciesCollection() {
    return $$('//div[@class="PickupList_item"]');
  }

  get pharmaciesCollectionWithoutOnlinePayment() {
    return $$(
      '//div[@class="PickupList_item"]//*[local-name()="svg" and @class="PickupCoreIcon-colorLight"]'
    );
  }

  get buttonRepay() {
    return $('//button[@id="order_payment_repay"]');
  }

  get buttonPaymentChange() {
    return $('//button[@id="order_payment_change"]');
  }

  get previousAddressesTitle() {
    return $(
      '//div[@class="sec-order__delivery-title" and contains(., "адрес")]'
    );
  }

  get previousAddressesCollection() {
    return $$(
      '//div[@class="sec-order__address-item address"]//label[not(@for="address_new")]//span'
    );
  }

  get discounts() {
    return $$(
      '//div[contains(text(), "Скидка")]/following-sibling::div[@class="right"]//span'
    );
  }

  get pickupPointsCount() {
    return $('//span[@class="PickupPointsCount_root"]');
  }

  get addRecipientCheckbox() {
    return $('//label[@for="HAS_RECIPIENT"]');
  }

  get recipientName() {
    return $('//input[@name="ORDER_PROP[RECIPIENT_FIO]"]');
  }

  get recipientPhone() {
    return $('//input[@name="ORDER_PROP[RECIPIENT_PHONE]"]');
  }

  get pickupPointsCollection() {
    return $$('//tr[@data-action="store-item"]');
  }

  get pharmaciesListOld() {
    return $(
      '//table[@data-role="pickreg-table"] | //div[@class="pickreg--bins"]'
    );
  }

  get buttonChoosePharmacyCollectionOld() {
    return $$(
      '//tr[@data-action="store-item" and @class="bx-show"]//a[contains(@href, "") and contains(., "Выбрать")] | //div[@data-action="store-item" and @class="pickreg--item bx-show"]'
    );
  }

  get deliveryNotAvailWarning() {
    return $('//span[@id="address-temp-unavailable"]');
  }

  checkPreviousAddresses() {
    AllureReporter.addStep("Проверка списка адресов с прошлыми заказами");
    this.previousAddressesTitle.waitForDisplayed({
      timeout: 10000,
      timeoutMsg:
        "Заголовок раздела с ранее использованными адресами не отображается!",
    });
    this.previousAddressesTitle.scrollIntoView(false);
    const addresses = this.previousAddressesCollection;
    addresses.forEach((a) => {
      let addressText = a.getText();
      assert.isNotEmpty(
        addressText,
        "В списке ранее использованных адресов отображается заказ с пустым заголовком!"
      );
    });
  }

  checkNoPartiallyAvailablePharmacies() {
    AllureReporter.addStep(
      "Проверка отсутствия частично доступных аптек на странице оформления заказа"
    );
    wdioExpect(
      this.partiallyAvailablePharmaciesCollection
    ).toBeElementsArrayOfSize({
      eq: 0,
      message:
        "В списке аптек присуствуют аптеки с частично доступными товарами!",
      wait: 10000,
    });
  }

  openListOfPharmacies() {
    AllureReporter.addStep(
      "Открытие списка аптек до появления недоступных аптек или отображения полного списка"
    );
    const pharmacyCount = Number(
      this.pickupPointsCount.getText().replace(/[^\d]/g, "")
    );
    do {
      let pharmaciesCollection = this.displayedPharmaciesCollection;
      pharmaciesCollection[pharmaciesCollection.length - 1].scrollIntoView();
    } while (
      this.notAvailablePharmaciesCollection.length === 0 &&
      this.displayedPharmaciesCollection.length !== pharmacyCount
    );
  }

  changeStore() {
    AllureReporter.addStep('Нажатие на кнопку "Сменить пункт самовывоза"');
    this.buttonChangeStore.waitForClickable({
      timeout: 60000,
      timeoutMsg: 'Кнопка "Сменить пункт самовывоза" недоступна для клика! ',
    });
    this.buttonChangeStore.scrollIntoView();
    this.buttonChangeStore.click();
    this.waitUntilLoaderNotDisplayed();
    this.clickButtonPharmacyList();
    this.pharmaciesList.waitForDisplayed({
      timeout: 60000,
      timeoutMsg:
        'Список аптек не отображается после нажатия на кнопку "Сменить пункт самовывоза"!',
    });
  }

  checkNotAvailableGoods() {
    AllureReporter.addStep("Проверка недоступных для самовывоза лекарств");
    wdioExpect(this.notInStoreItemsCollection).toBeElementsArrayOfSize({
      gte: 1,
      message: "Нет недоступных для самовывоза лекарств!",
    });
    this.notInStoreItemTitle.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: "Заголовок недоступного лекарства не отображается!",
    });
    return this.notInStoreItemTitle.getText();
  }

  choosePartiallyAvailablePharmacy() {
    AllureReporter.addStep("Выбор частично доступной аптеки из списка");
    for (
      let i = 0;
      i < 5 && this.partiallyAvailablePharmaciesCollection.length === 0;
      i++
    ) {
      let buttonChoosePharmacyCollection = this.buttonChoosePharmacyCollection;
      buttonChoosePharmacyCollection[
        buttonChoosePharmacyCollection.length - 1
      ].scrollIntoView();
    }
    const buttons = this.buttonChoosePartiallyAvailablePharmaciesCollection;
    let randomPharmacy = buttons[Math.floor(Math.random() * buttons.length)];
    randomPharmacy.scrollIntoView(false);
    randomPharmacy.waitForClickable({
      timeout: 10000,
      timeoutMsg:
        "Кнопка выбора аптеки c частичным наличием товаров в десктоп версии или блок аптеки в мобильной версии недостуна для клика!",
    });
    browser.execute("arguments[0].click();", randomPharmacy);
  }

  clickPickupTodayPharmacyFilter() {
    AllureReporter.addStep(
      'Активация, проверка и деактивация фильтра "Сегодня" в блоке выбора аптек'
    );
    this.pharmacyFilter("Сегодня").waitForClickable({
      timeout: 10000,
      timeoutMsg: 'Фильтр "Сегодня" недоступен для клика!',
    });
    this.pharmacyFilter("Сегодня").scrollIntoView(false);
    this.pharmacyFilter("Сегодня").click();
    wdioExpect(this.pharmacyFilter("Сегодня")).toHaveAttributeContaining(
      "class",
      "active",
      { message: 'Фильтр "Сегодня" не активирован!' }
    );
    this.buttonChoosePharmacyCollection.forEach((button) => {
      wdioExpect(button).toHaveTextContaining("сегодня", {
        message:
          'После выставления фильтра "Сегодня" в списке аптек присутствуют аптеки без выдачи сегодня!',
        wait: 3000,
      });
    });
    this.pharmacyFilter("Сегодня").click();
    assert.notInclude(
      this.pharmacyFilter("Сегодня").getAttribute("class"),
      "active",
      'Фильтр "Сегодня" активен после отключения!'
    );
  }

  clickPickupInHourPharmacyFilter() {
    AllureReporter.addStep(
      'Активация, проверка и деактивация фильтра "Забрать за час" в блоке выбора аптек'
    );
    this.pharmacyFilter("Забрать за час").waitForClickable({
      timeout: 10000,
      timeoutMsg:
        'Фильтр "Забрать за час" недоступен для клика или не отображается!',
    });
    this.pharmacyFilter("Забрать за час").scrollIntoView(false);
    this.pharmacyFilter("Забрать за час").click();
    wdioExpect(this.pharmacyFilter("Забрать за час")).toHaveAttributeContaining(
      "class",
      "active",
      { message: 'Фильтр "Забрать за час" не активирован!' }
    );
    this.buttonChoosePharmacyCollection.forEach((button) => {
      wdioExpect(button).toHaveTextContaining("Забрать сегодня за час", {
        message:
          'После выставления фильтра "Забрать за час" в списке аптек присутствуют аптеки без выдачи в течение часа!',
        wait: 3000,
      });
    });
    this.pharmacyFilter("Забрать за час").click();
    assert.notInclude(
      this.pharmacyFilter("Забрать за час").getAttribute("class"),
      "active",
      'Фильтр "Забрать за час" активен после отключения!'
    );
  }

  clickPickupTomorrowPharmacyFilter() {
    AllureReporter.addStep(
      'Активация, проверка и деактивация фильтра "Завтра или позже" в блоке выбора аптек'
    );
    this.pharmacyFilter("Завтра или позже").waitForClickable({
      timeout: 10000,
      timeoutMsg:
        'Фильтр "Забрать за час" недоступен для клика или не отображается!',
    });
    this.pharmacyFilter("Завтра или позже").scrollIntoView(false);
    this.pharmacyFilter("Завтра или позже").click();
    wdioExpect(
      this.pharmacyFilter("Завтра или позже")
    ).toHaveAttributeContaining("class", "active", {
      message: 'Фильтр "Завтра или позже" не активирован!',
    });
    this.buttonChoosePharmacyCollection.forEach((button) => {
      assert.notInclude(
        button.getText(),
        "сегодня",
        'После выставления фильтра "Завтра или позже" в списке аптек присутствуют аптеки с выдачей сегодня!'
      );
    });
    this.pharmacyFilter("Завтра или позже").click();
    assert.notInclude(
      this.pharmacyFilter("Завтра или позже").getAttribute("class"),
      "active",
      'Фильтр "Завтра или позже" активен после отключения!'
    );
  }

  clickPickupAllDayPharmacyFilter() {
    AllureReporter.addStep(
      'Активация, проверка и деактивация фильтра "Круглосуточные" в блоке выбора аптек'
    );
    this.pharmacyFilter("Круглосуточные").waitForClickable({
      timeout: 10000,
      timeoutMsg:
        'Фильтр "Забрать за час" недоступен для клика или не отображается!',
    });
    this.pharmacyFilter("Круглосуточные").scrollIntoView(false);
    this.pharmacyFilter("Круглосуточные").click();
    wdioExpect(this.pharmacyFilter("Круглосуточные")).toHaveAttributeContaining(
      "class",
      "active",
      { message: 'Фильтр "Круглосуточные" не активирован!' }
    );
    this.pickupPointsWorkingHours.forEach((workingHours) => {
      wdioExpect(workingHours).toHaveTextContaining("Круглосуточно", {
        message:
          'После выставления фильтра "Круглосуточные" в списке аптек присутствуют аптеки без круглосуточной работы!',
        wait: 3000,
      });
    });
    this.pharmacyFilter("Круглосуточные").click();
    assert.notInclude(
      this.pharmacyFilter("Круглосуточные").getAttribute("class"),
      "active",
      'Фильтр "Круглосуточные" активен после отключения!'
    );
  }

  clickPickupOnlinePaymentPharmacyFilter() {
    AllureReporter.addStep(
      'Активация, проверка и деактивация фильтра "Онлайн оплата" в блоке выбора аптек'
    );
    this.pharmacyFilter("Онлайн оплата").waitForClickable({
      timeout: 10000,
      timeoutMsg:
        'Фильтр "Забрать за час" недоступен для клика или не отображается!',
    });
    this.pharmacyFilter("Онлайн оплата").scrollIntoView(false);
    this.pharmacyFilter("Онлайн оплата").click();
    wdioExpect(this.pharmacyFilter("Онлайн оплата")).toHaveAttributeContaining(
      "class",
      "active",
      { message: 'Фильтр "Онлайн оплата" не активирован!' }
    );
    wdioExpect(
      this.pharmaciesCollectionWithoutOnlinePayment
    ).toBeElementsArrayOfSize({
      eq: 0,
      message:
        'После выставления фильтра "Онлайн оплата" в списке аптек присутствуют аптеки без оплаты онлайн!',
    });
    this.pharmacyFilter("Онлайн оплата").click();
    assert.notInclude(
      this.pharmacyFilter("Онлайн оплата").getAttribute("class"),
      "active",
      'Фильтр "Онлайн оплата" активен после отключения!'
    );
  }

  getOpeningHoursAtPharmacyInfo() {
    AllureReporter.addStep(
      "Получение времени работы в карточке аптеки после ее выбора в списке аптек"
    );
    this.openingHoursAtPharmacyInfo.waitForDisplayed({
      timeout: 10000,
      timeoutMsg:
        "Информация об аптеке после ее выбора в списке аптек не отображается!",
    });
    this.openingHoursAtPharmacyInfo.scrollIntoView(false);
    return this.openingHoursAtPharmacyInfo
      .getText()
      .replace("\n", " ")
      .replace("<br>", "")
      .trim();
  }

  openSelectedPharmacyOnYandexMap() {
    AllureReporter.addStep(
      "Нажатие на кнопку на Яндекс карте для ранее выбранной аптеки"
    );
    this.selectedPharmacyOnYandexMap.scrollIntoView(false);
    this.selectedPharmacyOnYandexMap.waitForClickable({
      timeout: 10000,
      timeoutMsg: "Кнопка на яндекс карте недоступна для клика!",
    });
    this.selectedPharmacyOnYandexMap.moveTo();
    this.selectedPharmacyOnYandexMap.click();
  }

  getOpeningHoursOfPickupPointInList(index) {
    AllureReporter.addStep("Получение времени работы");
    const schedule = this.pickupPointsWorkingHours[index].getText();
    assert.isNotNull(schedule, "У аптеки нет времени работы!");
    return schedule;
  }

  getOpeningHoursOfPickupPointInListOld(index) {
    AllureReporter.addStep("Получение времени работы (до обновления функции)");
    const pickupPoint =
      this.pickupPointsCollection[index].getAttribute("data-store");
    const address = () => {
      let json = JSON.parse(pickupPoint);
      return json.SCHEDULE;
    };
    assert.isNotNull(address());
    return address();
  }

  checkOnlinePaymentError() {
    AllureReporter.addStep(
      "Проверка информации об ошибке онлайн оплаты в заголовке страницы подтверждения онлайн оплаты"
    );
    this.orderingWithOnlinePaymentErrorTitle.waitForDisplayed({
      timeout: 25000,
      timeoutMsg:
        "Заголовок на странице подтверждения оформления заказа не отображается!",
    });
    assert.include(
      this.orderingWithOnlinePaymentErrorTitle.getText(),
      "не прошла",
      "Сообщение после заказа с неудачной онлайн оплатой не содержит уведомление о том, что заказ не передан в работу!"
    );
  }

  clickButtonRepay() {
    AllureReporter.addStep('Нажатие на кнопку "Оплатить онлайн" (снова)');
    this.buttonRepay.waitForClickable({
      timeout: 15000,
      timeoutMsg:
        'Кнопка "Оплатить онлайн" (снова) на странице подтверждения оформления заказа не отображается!',
    });
    browser.execute("arguments[0].click();", this.buttonRepay);
  }

  changePayment() {
    AllureReporter.addStep('Нажатие на кнопку "Изменить способ оплаты"');
    this.buttonPaymentChange.waitForClickable({
      timeout: 15000,
      timeoutMsg:
        'Кнопка "Изменить способ оплаты" на странице подтверждения оформления заказа не отображается!',
    });
    browser.execute("arguments[0].click();", this.buttonPaymentChange);
    this.successfulOrderingTitle.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Заголовок об оформлении заказа не отображается!",
    });
    let title = this.successfulOrderingTitle.getText();
    let number = this.getOrderNumber();
    assert.include(
      title,
      `Спасибо, заказ ${number} оформлен!`,
      "Заголовок об успешном оформлении заказа не отображается!"
    );
    return number;
  }

  pickCardAsPaymentMethod() {
    AllureReporter.addStep('Выбор способа оплаты "Картой онлайн"');
    this.buttonCard.scrollIntoView();
    this.buttonCard.waitForClickable({
      timeout: 15000,
      timeoutMsg:
        "Кнопка выбора онлайн оплаты на странице оформления заказа недоступна для клика!",
    });
    browser.execute("arguments[0].click();", this.buttonCard);
    this.waitUntilLoaderNotDisplayed();
    wdioExpect(this.buttonCardInput).toHaveAttribute("checked", undefined, {
      message: 'Способ оплаты "Картой онлайн" не выбран!',
    });
  }

  checkDisabledDeliveryAndOnlinePayment(text) {
    AllureReporter.addStep(
      "Проверка недоступности доставки и онлайн оплаты при оформлении заказа, содержащего ПКУ или спиртосодержащий товар"
    );
    wdioExpect(this.buttonDelivery).toHaveAttributeContaining(
      "class",
      "disabled",
      {
        message:
          "Плашка доставки доступна при заказе ПКУ или спиртосодержщего товара!",
      }
    );
    this.buttonDelivery.waitForClickable({
      timeout: 5000,
      timeoutMsg:
        "Плашка доставки кликабельна при заказе ПКУ или спиртосодержщего товара!",
      reverse: true,
    });
    wdioExpect(this.deliveryInfo).toHaveTextContaining(
      `Курьерская доставка невозможна, в корзине ${text} препараты`,
      { message: "Некорректный текст предупреждения о недоступности доставки!" }
    );
    wdioExpect(this.buttonCard).toHaveAttribute("for", "tfake-card", {
      message: "Доступна онлайн оплата!",
    });
  }

  checkDisabledOnlinePaymentForPickup() {
    AllureReporter.addStep(
      "Проверка недоступности онлайн оплаты при самовывозе заказа, содержащего ПКУ или спиртосодержащие товары"
    );
    this.disabledOnlinePayment.waitForClickable({
      timeout: 10000,
      timeoutMsg: "Неактивная онлайн оплата доступна для клика!",
      reverse: true,
    });
    assert.equal(
      this.disabledOnlinePayment.getText(),
      "Онлайн оплата недоступна в этом пункте или заказ содержит рецептурные/спиртосодержащие препараты",
      "Некорректный текст предупреждения о недоступности онлайн оплаты!"
    );
  }

  getCountOfPartiallyOrNotAvailablePharmacies() {
    AllureReporter.addStep(
      "Получение количества аптек, которые недоступны для самовывоза или в которых есть только часть товара"
    );
    this.openListOfPharmacies();
    return (
      this.notAvailablePharmaciesCollection.length +
      this.partiallyAvailablePharmaciesCollection.length
    );
  }

  clickButtonScrollToTop() {
    AllureReporter.addStep('Нажатие на кнопку "Наверх"');
    browser.execute("window.scroll(0,1000);");
    this.buttonScrollUp.isClickable({
      timeout: 10000,
      timeoutMsg: "Кнопка Наверх не отображается или недоступна для клика!",
    });
    this.buttonScrollUp.click();
  }

  scrollToFooter() {
    AllureReporter.addStep("Прокрутка к футеру");
    this.footer.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Футер не отображается на странице оформления заказа!",
    });
    this.footer.scrollIntoView();
    wdioExpect(this.footer).toBeDisplayedInViewport();
  }

  scrollToMobileFooter() {
    AllureReporter.addStep("Прокрутка к футеру на мобильной версии сайта");
    this.mobileFooter.scrollIntoView();
    wdioExpect(this.mobileFooter).toBeDisplayedInViewport();
  }

  checkNotAvailablePharmacyHint() {
    AllureReporter.addStep(
      "Проверка наличия аптек с минимальной суммой заказа"
    );
    this.notAvailablePharmacy.scrollIntoView();
    this.notAvailablePharmacy.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Нет аптек с минимальной суммой заказа!",
    });
  }

  checkNotAvailablePharmacyMobileHint() {
    AllureReporter.addStep(
      "Проверка всплывающего уведомления с подсказкой о недоступности самовывоза из-за порога минимальной доставки в мобильной версии сайта"
    );
    let pharmacies = this.visibleNotAvailablePharmaciesCollection;
    let hints = this.notAvailablePharmacy;
    let pharmaciesCount = pharmacies.length;
    let randomPharmacy =
      pharmacies[Math.floor(Math.random() * pharmaciesCount)];
    let index = pharmacies.indexOf(randomPharmacy);

    randomPharmacy.scrollIntoView(false);
    randomPharmacy.waitForDisplayed({
      timeout: 6000,
      timeoutMsg:
        "Аптека, определяемая xpath, как видимая, фактически не отображается!",
    });
    randomPharmacy.click();
    hints[index].waitForDisplayed({
      timeout: 6000,
      timeoutMsg:
        'Подсказка о причинах недоступности аптеки не отображается после нажатия на надпись "Недоступно для самовывоза!"!',
    });
    let hintTxt = hints[index].getText();
    assert.equal(
      hintTxt,
      "Минимальная сумма заказа: 500 рублей.",
      "Некорректный текст подсказки при наведении на аптеку, недоступную для самовывоза!"
    );
  }

  backToCart() {
    AllureReporter.addStep("Возврат в корзину с страницы оформления заказа");
    this.buttonBackToCart.waitForClickable({
      timeout: 5000,
      timeoutMsg:
        'Кнопка "Корзина" недостуна для клика или не отображается в форме оформления заказа!',
    });
    browser.execute("arguments[0].click();", this.buttonBackToCart);
  }

  getDeliveryPrice() {
    AllureReporter.addStep(
      "Получение стоимости доставки на странице оформления заказа"
    );
    this.deliveryPriceInRightBlock.waitForDisplayed({
      timeout: 10000,
      timeoutMsg:
        "Стоимость доставки не отображается в правом блоке на форме оформления заказа!",
    });
    this.deliveryPriceInLowerBlock.waitForDisplayed({
      timeout: 10000,
      timeoutMsg:
        "Стоимость доставки не отображается в нижнем блоке на форме оформления заказа!",
    });
    let lowerPrice = this.deliveryPriceInLowerBlock.getText();
    let rightPrice = this.deliveryPriceInRightBlock.getText();
    assert.equal(
      lowerPrice,
      rightPrice,
      "Цена в блоке справа не совпадает с ценой в нижнеи блоке на форме оформления заказа!"
    );
    return lowerPrice;
  }

  getDeliveryPriceMobile() {
    AllureReporter.addStep(
      "Получение стоимости доставки на странице оформления заказа в мобильной версии сайта"
    );
    this.deliveryPriceInLowerBlock.waitForDisplayed({
      timeout: 10000,
      timeoutMsg:
        "Стоимость доставки не отображается в форме оформления заказа!",
    });
    return this.deliveryPriceInLowerBlock.getText();
  }

  checkPaidDelivery() {
    AllureReporter.addStep("Проверка платной доставки");
    let price = this.getDeliveryPrice();
    assert.equal(
      price,
      179,
      "Некорректная стоимость доставки при оформлении заказа менее чем на 2000 в Москве!"
    );
  }

  checkPaidDeliveryOnMobile() {
    AllureReporter.addStep("Проверка платной доставки");
    let price = this.getDeliveryPriceMobile();
    assert.equal(
      price,
      179,
      "Некорректная стоимость доставки при оформлении заказа менее чем на 2000 в Москве!"
    );
  }

  checkFreeDelivery() {
    AllureReporter.addStep("Проверка бесплатной доставки");
    let price = this.getDeliveryPrice();
    assert.equal(
      price,
      0,
      "Некорректная стоимость доставки при оформлении заказа более чем на 2000 в Москве!"
    );
  }

  checkFreeDeliveryOnMobile() {
    AllureReporter.addStep("Проверка бесплатной доставки");
    let price = this.getDeliveryPriceMobile();
    assert.equal(
      price,
      0,
      "Некорректная стоимость доставки при оформлении заказа более чем на 2000 в Москве!"
    );
  }

  getPickupPointIdAtForm() {
    AllureReporter.addStep("Получение ID ранее выбранной аптеки");
    browser.waitUntil(
      () => this.selectedPharmacyBlock.isDisplayed() === true,
      () => this.selectedPharmacyBlock.isClickable() === true,
      {
        timeout: 5000,
        timeoutMsg:
          "После выбора аптеки на яндекс карте аптека не отображается в форме оформления заказа!",
      }
    );
    return this.selectedPharmacyBlock.getAttribute("data-store-id");
  }

  clickButtonChoosePickupPointAtYandexMap() {
    AllureReporter.addStep(
      'Нажатие на кнопку "Выбрать" в всплывающем окне с информацией об аптеке на Яндекс карте'
    );
    browser.waitUntil(
      () => this.pickupPointCardOnYandexMap.isDisplayed() === true,
      () => this.pickupPointCardOnYandexMap.isClickable() === true,
      {
        timeout: 5000,
        timeoutMsg:
          'Кнопка "Выбрать" в всплывающем окне с информацией об аптеке на Яндекс карте не отображается или недоступна для клика!',
      }
    );
    browser.execute("arguments[0].click();", this.pickupPointCardOnYandexMap);
    this.waitUntilLoaderNotDisplayed();

    browser.waitUntil(
      () => this.pickupPointCardOnYandexMap.isDisplayed() === false,
      () => this.pickupPointCardOnYandexMap.isClickable() === false,
      {
        timeout: 5000,
        timeoutMsg:
          'Кнопка "Выбрать" в всплывающем окне с информацией об аптеке на Яндекс карте отображается или доступна для клика после нажатия на нее!',
      }
    );
  }

  getPickupPointIdAtMap() {
    AllureReporter.addStep("Получение ID рандомно выбранной на карте аптеки");
    this.pickupPointCardOnYandexMap.waitForDisplayed({
      timeout: 10000,
      timeoutMsg:
        "После клика на точку аптеки на яндекс карте не появилось всплывающее окно с информацией об аптеке!",
    });
    return this.pickupPointCardOnYandexMap.getAttribute("data-store-id");
  }

  clickPickupPointOnMap() {
    AllureReporter.addStep("Нажатие на точку самовывоза на Яндекс карте");
    let points = this.pickupPointsAtYandexMapCollection;
    let randPoint = points[0];
    randPoint.scrollIntoView();
    browser.waitUntil(
      () => randPoint.isDisplayed() === true,
      () => randPoint.isClickable() === true,
      {
        timeout: 15000,
        timeoutMsg:
          "Точка аптеки на карте не отображается или недоступна для клика!",
      }
    );
    browser.execute("arguments[0].click();", randPoint);
  }

  checkSearchResults(query) {
    AllureReporter.addStep(
      "Проверка сортировки списка точек самовывоза в соответствии с поисковым запросом"
    );
    this.searchPickupPoint(query);
    const searchResults = this.searchResultsCollection(query);
    wdioExpect(searchResults).toBeElementsArrayOfSize({
      gte: 1,
      message: "После поиска не найдены соотвествующие точки самовывоза!",
    });
    const allPickupPoints = this.displayedPharmaciesCollection;
    for (let i = 0; i < searchResults.length; i++) {
      wdioExpect(allPickupPoints[i]).toHaveTextContaining(query, {
        message: `При поиске по запросу "${query}" в начале списка присутствуют некорректные точки самовывоза!`,
      });
    }
  }

  searchPickupPoint(query) {
    AllureReporter.addStep(
      "Ввод поискового запроса для поиска по пунктам самовывоза"
    );
    this.buttonPickupInputSearch.waitForClickable({
      timeout: 5000,
      timeoutMsg:
        "Кнопка очистки поискового запроса не отображается или не кликабельна!",
    });
    this.buttonPickupInputSearch.click();
    wdioExpect(this.fieldSearchPickupPoint).toHaveValue("", {
      message: "В поле поиска есть значение после его очистки!",
    });
    this.fieldSearchPickupPoint.waitForClickable({
      timeout: 5000,
      timeoutMsg:
        "Поле поиска по метро, адресу или названию сети недоступно на странице оформления заказа!",
    });
    this.fieldSearchPickupPoint.addValue(query);
    this.inputSuggestions(query).waitForClickable({
      timeout: 3000,
      timeoutMsg:
        "Не отображается подсказка после ввода значения в поле поиска!",
    });
    const suggestion = this.inputSuggestions(query).getText();
    this.inputSuggestions(query).click();
    wdioExpect(this.fieldSearchPickupPoint).toHaveValue(suggestion, {
      message:
        "В поле поиска по точкам самовывоза не установлено значение из выбранной подсказки!",
    });
  }

  checkPickupPointsIsDisplayed() {
    AllureReporter.addStep(
      "Проверка наличия точек самовывоза на карте в выбранном регионе"
    );
    let points = this.pickupPointsAtYandexMapCollection;
    let len = points.length;
    assert.isAtLeast(
      len,
      1,
      "На карте не отображается ни одной точки самовывоза!"
    );
  }

  clickCityForPickup() {
    AllureReporter.addStep("Выбор населенного пункта в блоке с картой");
    let city = this.cityForPickupCollection;
    let len = city.length;
    let randCity = city[Math.floor(Math.random() * len)];

    browser.waitUntil(
      () => randCity.isDisplayed() === true,
      () => randCity.isClickable() === true,
      {
        timeout: 5000,
        timeoutMsg:
          "Кнопка населенного пунтка в блоке с картой недоступна на странице оформления заказа!",
      }
    );
    browser.execute("arguments[0].click();", randCity);

    let cityAttribute = randCity.getAttribute("class");
    browser.waitUntil(() => cityAttribute === "pickreg--tab is-active", {
      timeout: 5000,
      timeoutMsg:
        "Кнопка населенного пунтка в блоке с картой не была выбрана после клика!",
    });
  }

  clickButtonDelivery() {
    AllureReporter.addStep("Нажатие на кнопку доставки");
    this.buttonDelivery.waitForClickable({
      timeout: 5000,
      timeoutMsg: "Кнопка доставки недоступна на странице оформления заказа!",
    });
    browser.execute("arguments[0].click();", this.buttonDelivery);
    this.waitUntilLoaderNotDisplayed();
  }

  checkPaymentForCompany() {
    AllureReporter.addStep("Проверка наличия способа оплаты для организаций");
    wdioExpect(this.paymentMethodCollection).toBeElementsArrayOfSize({
      gte: 1,
      message: "Нет способов оплаты!",
    });
    const paymentMethods = this.paymentMethodCollection;
    let methodsText = [];
    paymentMethods.forEach((method) => {
      let text = method.getText();
      methodsText.push(text);
    });
    assert.include(
      methodsText,
      "Счет для юридических лиц",
      "В списке способов оплаты нет способа оплаты для юр лиц!"
    );
  }

  fillCompanyFormAsIndividualEntrepreneur() {
    AllureReporter.addStep(
      'Заполнение формы "Заказ от юридического лица или ИП" как ИП'
    );
    this.fillCompanyName("Бюро автотестов");
    this.fillCompanyINN("1234567890123456789");
    wdioExpect(this.fieldCompanyINN).toHaveValue("123456789012", {
      message: "В поле ИНН можно ввести более 12 цифр!",
    });
    this.errorMessage.waitForDisplayed({
      timeout: 5000,
      timeoutMsg:
        "Уведомление об ошибке отображается после ввода корректного ИНН!",
      reverse: true,
    });
    this.fieldCompanyKPP.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: "Поле КПП отображается после ввода 12 значного ИНН!",
      reverse: true,
    });
  }

  fillCompanyFormAsOrganization() {
    AllureReporter.addStep(
      'Заполнение формы "Заказ от юридического лица или ИП" как ООО'
    );
    this.fillCompanyName("Бюро автотестов");
    this.fillCompanyINN("123456789");
    this.disableSmsNotification();
    this.errorMessage.waitForDisplayed({
      timeout: 5000,
      timeoutMsg:
        "Уведомление об ошибке не отображается после ввода слишком короткого ИНН!",
    });
    wdioExpect(this.errorMessage).toHaveText(
      "ИНН должен состоять из 10 или 12 цифр",
      {
        message:
          "Некорректный текст об ошибке при вводе слишком короткого ИНН!",
      }
    );
    this.fillCompanyINN("0034567890");
    wdioExpect(this.errorMessage).toHaveText(
      "ИНН не может начинаться с двух нулей",
      { message: 'Некорректный текст об ошибке при вводе ИНН с "00" в начале!' }
    );
    this.fillCompanyINN("эd!@#$%^&*()?|]");
    wdioExpect(this.fieldCompanyINN).toHaveValue("", {
      message: "В поле ИНН добавлены не цифровые символы!",
    });
    this.fillCompanyINN("1234567890");
    this.errorMessage.waitForDisplayed({
      timeout: 5000,
      timeoutMsg:
        "Уведомление об ошибке при вводе ИНН отображается после ввода корректного ИНН!",
      reverse: true,
    });
    this.fillCompanyKPP("1234567890123456789");
    wdioExpect(this.fieldCompanyKPP).toHaveValue("123456789", {
      message: "В поле ИНН можно ввести более 9 цифр!",
    });
    this.fillCompanyKPP("123456");
    this.errorMessage.waitForDisplayed({
      timeout: 5000,
      timeoutMsg:
        "Уведомление об ошибке при вводе КПП не отображается после ввода слишком длинного КПП!",
    });
    wdioExpect(this.errorMessage).toHaveText("Длина КПП должна быть 9 цифр", {
      message: "Некорректный текст об ошибке при вводе слишком длинного КПП!",
    });
    this.fillCompanyKPP("эd!@#$%^&*()?|]");
    wdioExpect(this.fieldCompanyKPP).toHaveValue("", {
      message: "В поле КПП добавлены не цифровые символы!",
    });
    this.fillCompanyKPP("123456789");
    this.errorMessage.waitForDisplayed({
      timeout: 5000,
      timeoutMsg:
        "Уведомление об ошибке при вводе КПП отображается после ввода корректного КПП ИНН!",
      reverse: true,
    });
  }

  fillCompanyKPP(kpp) {
    AllureReporter.addStep("Ввод КПП организации");
    this.fieldCompanyKPP.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Поле КПП недоступно для клика или не отображается!",
    });
    this.fieldCompanyKPP.setValue(kpp);
  }

  fillCompanyINN(inn) {
    AllureReporter.addStep("Ввод ИНН организации");
    this.fieldCompanyINN.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Поле ИНН недоступно для клика или не отображается!",
    });
    this.fieldCompanyINN.setValue(inn);
  }

  fillCompanyName(name) {
    AllureReporter.addStep("Ввод наименования организации");
    this.fieldCompanyName.waitForDisplayed({
      timeout: 15000,
      timeoutMsg: "Поле наименования компании не отображается!",
    });
    this.fieldCompanyName.setValue(name);
  }

  checkCorporateCheckbox() {
    AllureReporter.addStep(
      'Выставление чекбокса "Заказ от юридического лица или ИП"'
    );
    this.companyCheckbox.waitForClickable({
      timeout: 10000,
      timeoutMsg:
        'Чекбокс "Заказ от юридического лица или ИП" не отображается или недоступен для клика!',
    });
    browser.execute("arguments[0].click();", this.companyCheckbox);
    this.waitUntilLoaderNotDisplayed();
  }

  checkCorporateCheckboxIsNotClickable() {
    AllureReporter.addStep(
      'Проверка блокировки чекбокса "Заказ от юридического лица или ИП"'
    );
    wdioExpect(this.companyCheckboxHide).toBeDisplayed({
      message:
        'Чекбокс "Заказ от юридического лица или ИП" доступен для клика!',
    });
    wdioExpect(this.companyCheckboxHide).toHaveTextContaining(
      "Недоступно при заказе менее 3000 рублей",
      {
        message:
          'Некорректный текст при блокировке чекбокса "Заказ от юридического лица или ИП"!',
      }
    );
  }

  checkOverloadInfo() {
    AllureReporter.addStep(
      "Проверка информации про слишком большой вес заказа"
    );
    browser.waitUntil(() => this.overload.isDisplayed() === false, {
      timeout: 10000,
      timeoutMsg: "Информация о перегрузке отображается!",
    });
  }

  clearAddress() {
    AllureReporter.addStep(
      'Нажатие на "крестик" в после ввода адреса на странице оформления заказа'
    );
    this.fieldAddress.waitForClickable({
      timeout: 10000,
      timeoutMsg: "Поле ввода адреса недоступно для клика или не отображается!",
    });
    this.fieldAddress.click();
    this.buttonClearAddress.waitForClickable({
      timeout: 5000,
      timeoutMsg:
        'Кнопка-"крестик" для очистки поля ввода адреса недоступна для клика или не отображается!',
    });
    browser.execute("arguments[0].click();", this.buttonClearAddress);
  }

  checkEmptyFieldAddress() {
    AllureReporter.addStep("Проверка успешной очистки поля поиска");
    browser.waitUntil(() => this.fieldStreet.getAttribute("value") === "", {
      timeout: 5000,
      timeoutMsg: "Поле ввода адреса не было очищено по нажатию на крестик!",
    });
  }

  addComment() {
    AllureReporter.addStep("Добавление комментария к заказу");
    this.buttonAddComment.scrollIntoView();
    this.buttonAddComment.waitForClickable({
      timeout: 10000,
      timeoutMsg:
        'Кнопка "Добавить комментарий" на странице оформления заказа недоступна для клика!',
    });
    this.buttonAddComment.click();
    this.fieldComment.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: "Поле ввода комментария курьеру не отображается!",
    });
    this.fieldComment.setValue(
      "ВНИМАНИЕ!!! ЭТО ТЕСТОВЫЙ ЗАКАЗ!!! ПРОСЬБА ОТМЕНИТЬ САМОСТОЯТЕЛЬНО!!! ДОСТАВКА ТОЧНО НЕ НУЖНА!!!"
    );
  }

  pickDate() {
    AllureReporter.addStep("Выбор даты доставки");
    const date = this.dateCollection;
    const len = date.length;

    let lastDate = date[len - 1];
    browser.execute("arguments[0].click();", lastDate);
  }

  clickDatePicker() {
    AllureReporter.addStep("Нажатие на кнопку выбора даты доставки");
    this.datePicker.scrollIntoView(false);
    this.datePicker.waitForClickable({
      timeout: 10000,
      timeoutMsg: "Кнопка открытия выбора даты доставки недоступна!",
    });
    browser.execute("arguments[0].click();", this.datePicker);
  }

  choosePharmacy() {
    AllureReporter.addStep("Выбор аптеки для самовывоза");
    this.pickupBlock.waitForDisplayed({
      timeout: 60000,
      timeoutMsg:
        "Блок самовывоза не отображается на странице оформления заказа!",
    });
    this.pharmaciesList.waitForDisplayed({
      timeout: 60000,
      timeoutMsg: "Список аптек не отображается на странице оформления заказа!",
    });
    wdioExpect(this.buttonChoosePharmacyCollection).toBeElementsArrayOfSize({
      gte: 1,
      message: "Нет доступных аптек!",
      wait: 60000,
    });
    const buttons = this.buttonChoosePharmacyCollection;
    const len = buttons.length;
    let randomPharmacy = buttons[Math.floor(Math.random() * len)];
    randomPharmacy.scrollIntoView(false);
    randomPharmacy.waitForClickable({
      timeout: 60000,
      timeoutMsg:
        "Кнопка выбора аптеки в десктоп версии или блок аптеки в мобильной версии недостуна для клика!",
    });
    const openingHours = this.getOpeningHoursOfPickupPointInList(
      buttons.indexOf(randomPharmacy)
    );
    browser.execute("arguments[0].click();", randomPharmacy);
    return openingHours.replace("\n", " ").replace("<br>", "").trim();
  }

  // TODO: остается старый метод так-как обновление аптек для самовывоза откатили назад
  choosePharmacyOld() {
    AllureReporter.addStep(
      "Выбор аптеки для самовывоза (до обновления функции)"
    );
    this.pickupBlock.waitForDisplayed({
      timeout: 10000,
      timeoutMsg:
        "Блок самовывоза не отображается на странице оформления заказа!",
    });
    this.pharmaciesListOld.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Список аптек не отображается на странице оформления заказа!",
    });
    wdioExpect(this.buttonChoosePharmacyCollectionOld).toBeElementsArrayOfSize({
      gte: 1,
      message: "Нет доступных аптек!",
      wait: 10000,
    });
    const buttons = this.buttonChoosePharmacyCollectionOld;
    const len = buttons.length;
    let randomPharmacy = buttons[Math.floor(Math.random() * len)];
    randomPharmacy.scrollIntoView(false);
    randomPharmacy.waitForClickable({
      timeout: 10000,
      timeoutMsg:
        "Кнопка выбора аптеки в десктоп версии или блок аптеки в мобильной версии недостуна для клика!",
    });
    const openingHours = this.getOpeningHoursOfPickupPointInListOld(
      buttons.indexOf(randomPharmacy)
    );
    browser.execute("arguments[0].click();", randomPharmacy);
    return openingHours.replace("\n", " ").replace("<br>", "").trim();
  }

  clickButtonPickup() {
    AllureReporter.addStep('Нажатие на кнопку "Самовывоз"');
    this.buttonPickup.waitForClickable({
      timeout: 60000,
      timeoutMsg:
        "Кнопка Самовывоз на странице оформления заказа недоступна для клика!",
    });
    this.buttonPickup.click();
  }

  clickButtonPharmacyList() {
    AllureReporter.addStep(
      'Нажатие на кнопку "Список" для отображения спсика аптек для саомвывоза'
    );
    if (this.buttonPharmacyList.isDisplayed() === false) {
      this.changeStore();
    } else
      this.buttonPharmacyList.waitForClickable({
        timeout: 60000,
        timeoutMsg:
          'Кнопка "Список" на странице оформления заказа недоступна для клика!',
      });
    this.buttonPharmacyList.click();
    wdioExpect(this.displayedPharmaciesCollection).toBeElementsArrayOfSize({
      gte: 1,
      message: "Список аптек пустой!",
      wait: 60000,
    });
  }

  clickButtonAccount() {
    AllureReporter.addStep("Переход в личный кабинет");
    this.buttonAccount.click();
  }

  getOrderNumber() {
    AllureReporter.addStep(
      "Получение номера заказа на странице успешного оформления заказа"
    );
    this.successfulOrderingTitle.waitForDisplayed({
      timeout: 60000,
      timeoutMsg:
        "Страница с сообщением об успешном оформлении заказа не отображается!",
    });
    return this.successfulOrderingTitle.getAttribute("data-order-id");
  }

  clickButtonConfirmOrder() {
    AllureReporter.addStep("Нажатие на кнопку оформления заказа");
    this.buttonConfirmOrder.waitForClickable({
      timeout: 30000,
      timeoutMsg: "Кнопка оформления заказа не отображается!",
    });
    browser.execute("arguments[0].click();", this.buttonConfirmOrder);
    this.buttonConfirmOrder.waitForDisplayed({
      timeout: 300000,
      reverse: true,
      timeoutMsg:
        "Кнопка оформления заказа отображается после нажатия! Переход на страницу подтверждения заказа не был выполнен!",
    });
  }

  checkButtonConfirmOrder() {
    AllureReporter.addStep("Проверка кликабельности кнопки оформления заказа");
    this.buttonConfirmOrder.waitForClickable({
      timeout: 20000,
      timeoutMsg: "Кнопка оформления заказа не отображается!",
    });
  }

  pickCashAsPaymentMethod() {
    AllureReporter.addStep('Выбор способа оплаты "Наличные"');
    this.buttonCash.scrollIntoView();
    this.buttonCash.click();
  }

  checHiddenCashAsPaymentMethod() {
    AllureReporter.addStep(
      "Проверка недоступности оплаты наличными при бесконтактной доставке"
    );
    this.buttonCash.waitForDisplayed({
      timeout: 15000,
      reverse: true,
      timeoutMsg:
        'Способ оплаты "Наличными" доступен при бесконтактной доставке',
    });
  }

  clickTimeZonePicker() {
    AllureReporter.addStep("Нажатие на кнопку выбора времени доставки");
    this.timeZonePicker.waitForClickable({
      timeout: 5000,
      timeoutMsg:
        "Кнопка выбора времени доставки не отображается или не достпуна для клика!",
    });
    this.timeZonePicker.click();
  }

  clickDeliveryTimeZone() {
    AllureReporter.addStep("Выбор времени доставки");

    wdioExpect(this.deliveryTimeZonesCollection).toBeElementsArrayOfSize({
      gte: 1,
      message: "Нет вариантов времени доставки!",
    });
    const timeZones = this.deliveryTimeZonesCollection;
    const randomTimeZone =
      timeZones[Math.floor(Math.random() * timeZones.length)];
    browser.execute("arguments[0].click();", randomTimeZone);
  }

  waitForLoader() {
    AllureReporter.addStep("Ожидание появления лоадера");
    try {
      this.loader.waitForExist({
        timeout: 10000,
        interval: 350,
        timeoutMsg: "Лоадер не отображается!",
      });
    } catch (error) {}
  }

  waitUntilLoaderNotDisplayed() {
    AllureReporter.addStep("Ожидание исчезновения лоадера");
    try {
      this.waitForLoader();
      this.loader.waitForExist({
        timeout: 15000,
        interval: 300,
        reverse: true,
        timeoutMsg: "Слишком долгая загрузка",
      });
    } catch (error) {}
  }

  fillAddress(address) {
    AllureReporter.addStep("Ввод адреса доставки");
    this.fieldAddress.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Поле ввода адреса не отображается!",
    });
    this.fieldAddress.setValue(address);
    // browser.keys("\uE004");
    this.suggestionBlock.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Блок подсказок с списком адресов не отображается!",
    });
    let addresses = this.addressSuggestionsCollection;
    let adress = addresses[0];
    adress.click();
  }

  addressSelection() {
    AllureReporter.addStep("Подбор адреса для любого города");
    this.fieldAddress.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Поле ввода адреса не отображается!",
    });
    this.fieldAddress.setValue("нов");
    this.suggestionBlock.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Блок подсказок с списком адресов не отображается!",
    });
    let addresses = this.addressSuggestionsCollection;
    let address = addresses[0];
    address.click();
    this.fieldAddress.addValue(" 2");
    this.suggestionBlock.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Блок подсказок с списком адресов не отображается!",
    });
    addresses = this.addressSuggestionsCollection;
    address = addresses[0];
    address.click();
  }

  fillEntrance() {
    AllureReporter.addStep("Ввод подъезда");
    this.fieldEntrance.waitForClickable({
      timeout: 5000,
      timeoutMsg: "Поле ввода подъезда не доступно!",
    });
    this.fieldEntrance.setValue("1");
  }

  fillFloor() {
    AllureReporter.addStep("Ввод этажа");
    this.fieldFloor.setValue("1");
  }

  fillFlat() {
    AllureReporter.addStep("Ввод номера квартиры");
    this.fieldFlat.setValue("1");
  }

  fillKeycode() {
    AllureReporter.addStep("Ввод номера домофона");
    this.fieldKeycode.setValue("1");
  }

  disableSmsNotification() {
    AllureReporter.addStep("Отключение СМС уведомлений");
    this.smsNotificationCheckbox.waitForClickable({
      timeoutMsg: "Чекбокс для СМС уведомлений недоступен для клика!",
    });
    this.smsNotificationCheckbox.click();
  }

  fillRandomNameAndEmail() {
    AllureReporter.addStep(
      "Заполнеие полей имени и почты рандомными значениями"
    );
    const possible = "0123456789";
    let randomNumber = "";
    for (let i = 0; i < 4; i++)
      randomNumber += possible.charAt(
        Math.floor(Math.random() * possible.length)
      );
    const randomName = "test" + randomNumber;
    const randomEmail = randomName + "@fexbox.ru";
    this.fillName(randomName);
    this.fillEMail(randomEmail);
    return [randomName, randomEmail];
  }

  fillName(name) {
    AllureReporter.addStep("Ввод ФИО");
    this.fieldName.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: "Поле ввода ФИО недоступно!",
    });
    this.fieldName.setValue(name);
    wdioExpect(this.fieldName).toHaveValue(`${name}`, {
      message: "В поле ввода ФИО не установлено тербуемое значение!",
    });
  }

  fillEMail(email) {
    AllureReporter.addStep("Ввод email");
    this.fieldEMail.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Поле ввода адреса электронной почты не отображается!",
    });
    this.fieldEMail.setValue(email);
    wdioExpect(this.fieldEMail).toHaveValue(`${email}`, {
      message:
        "В поле ввода адреса электронной почты не установлено тербуемое значение!",
    });
  }

  checkMakeOrderTitle() {
    AllureReporter.addStep("Проверка варианта страницы оформления заказа");
    browser.pause(5000);
    if (this.makeOrderTitleAdaptive.isDisplayed() === true) {
      const type = "adaptive";
      this.checkMakeOrderTitleAdaptive();
      return type;
    } else {
      const type = "checkout";
      this.checkMakeOrderTitleOld();
      return type;
    }
  }

  checkMakeOrderTitleOld() {
    AllureReporter.addStep("Проверка заголовка страницы оформления заказа");
    this.makeOrderTitle.waitForDisplayed({
      timeout: 120000,
      timeoutMsg: "Заголовок страницы оформления заказа не отображается!",
    });
    assert.equal(
      `${this.makeOrderTitle.getText()}`,
      "Оформление",
      "Некорректный текст заголовка на странице оформления заказа!"
    );
  }

  checkMakeOrderTitleAdaptive() {
    AllureReporter.addStep(
      "Проверка заголовка адаптивной страницы оформления заказа"
    );
    this.makeOrderTitleAdaptive.waitForDisplayed({
      timeout: 120000,
      timeoutMsg: "Заголовок страницы оформления заказа не отображается!",
    });
    assert.equal(
      `${this.makeOrderTitleAdaptive.getText()}`,
      "Оформление",
      "Некорректный текст заголовка на странице оформления заказа!"
    );
  }

  checkSwitchContactlessDelivery() {
    AllureReporter.addStep(
      "Проверка переключателя бесконтактной доставки страницы оформления заказа"
    );
    this.switchContactlessDelivery.waitForDisplayed({
      timeout: 60000,
      timeoutMsg:
        "Переключатель бесконтактной доставки страницы оформления заказа не отображается!",
    });
  }

  clickSwitchContactlessDelivery() {
    AllureReporter.addStep("Нажатие на кнопку бесконтактной доставки");
    this.switchContactlessDelivery.waitForClickable({
      timeout: 60000,
      timeoutMsg:
        "Переключатель бесконтактной доставки страницы оформления заказа недоступен!",
    });
    browser.execute("arguments[0].click();", this.switchContactlessDelivery);
  }

  getOrderPriceWithoutDelivery() {
    AllureReporter.addStep("Проверка и получение общей цены заказ");
    this.orderPriceInRightBlock.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: "Сумма заказа в правом блоке не отображается!",
    });
    this.orderPriceInLowerBlock.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: "Сумма заказа в нижнем блоке не отображается!",
    });
    assert.equal(
      `${this.orderPriceInRightBlock.getText()}`,
      `${this.orderPriceInLowerBlock.getText()}`,
      "Сумма заказа в правом и нижнем блоке не совпадают!"
    );
    let orderPrice = Number(
      this.orderPriceInLowerBlock.getText().replace(/[^\d]/g, "")
    );
    if (
      this.deliveryPriceInLowerBlock.isDisplayed() === true &&
      this.deliveryPriceInLowerBlock.getText() !== "0"
    ) {
      orderPrice =
        orderPrice - Number(this.deliveryPriceInLowerBlock.getText());
    }
    return orderPrice;
  }

  checkDiscount(oldPrice, newPrice) {
    AllureReporter.addStep("Проверка скидки в заказе");
    this.discounts.forEach((discount) => {
      wdioExpect(discount).toBeDisplayed({
        message: "Скидка не отображается!",
      });
      assert.equal(
        `${discount.getText().replace(/[^\d]/g, "")}`,
        `${oldPrice - newPrice}`,
        "Отображается не корректная скидка!"
      );
    });
  }

  addRecipient(recipient) {
    AllureReporter.addStep("Добавление получателя");
    this.recipientName.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: "Поле ввода имени получателя отображается!",
      reverse: true,
    });
    this.recipientPhone.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: "Поле ввода телефона получателя отображается!",
      reverse: true,
    });
    this.addRecipientCheckbox.waitForClickable({
      timeout: 5000,
      timeoutMsg: 'Чекбокс "Добавить получателя" не отображается!',
    });
    this.addRecipientCheckbox.click();
    this.recipientName.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: "Поле ввода имени получателя не отображается!",
    });
    this.recipientName.setValue(recipient.name);
    wdioExpect(this.recipientName).toHaveValue(recipient.name, {
      message: `В поле ввода имени получателя не установлено значение "${recipient.name}"`,
    });
    this.recipientPhone.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: "Поле ввода телефона получателя не отображается!",
    });
    browser.execute(
      `arguments[0].value = "${recipient.phone}"`,
      this.recipientPhone
    );
    wdioExpect(this.recipientPhone).toHaveValue(recipient.phone, {
      message: `В поле ввода телефона получателя не установлено значение "${recipient.phone}"`,
    });
  }

  checkDeliveryNotAvailByRecipeInMO(text) {
    AllureReporter.addStep("Проверка недоступности доставки по ЭР в МО");
    this.deliveryNotAvailWarning.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: "Информер о недоступности доставки в МО не отображается",
    });

    assert.equal(
      this.deliveryNotAvailWarning.getText(),
      "😔Доставляем по электронным рецептам только в Москве. Введите другой адрес или заберите из аптеки",
      "Некорректный текст о недоступности доставки в МО"
    );
  }
}

module.exports = new MakeOrder();
