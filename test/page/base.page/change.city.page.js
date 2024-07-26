const { default: AllureReporter } = require('@wdio/allure-reporter');

class ChangeCityPage {

    get buttonCitySelect() {return $('//*[@class="headerCityAdaptiveLabelTitle"]');}

    get buttonConfirmCityChoise() {return $('//div[contains(@class, "header__tower-box")]//a[@data-action="changeCity"]');}

    get buttonConfirmCurrentCity() {return $('//*[@data-city-option="true"]');}

    get buttonChangeCity() {return $('//*[text()="Нет, другой"]');}

    get fieldSearchCity() {return $('//*[@class="header__tower-input"]');}

    get buttonPickFirstSearchResult() {return $('//*[contains(@class, "header__tower-link")]');}

    get buttonCloseNotification() {return $('//button[@class="notification__close"]');}

    get buttonCloseChangeCityBlock() {return $('//img[@alt="close"]');}

    changeCityTo(cityName) {
        AllureReporter.addStep(`Смена города на ${cityName}`);
        try {
            this.clickButtonConfirmCityChoise();
        } catch (error) {}
        this.clickButtonCitySelect();
        this.setCity(cityName);
        this.pickFirstSearchResult();
        this.clickButtonConfirmCurrentCity();
    }

    changeCityOnMobile(cityName) {
        AllureReporter.addStep(`Смена города на ${cityName} в мобильной версии сайта`);
        this.clickButtonChangeCity();
        this.setCity(cityName);
        this.pickFirstSearchResult();
        this.clickButtonConfirmCityChoise();
    }

    closeChangeCityBlock() {
        AllureReporter.addStep('Нажатие на кнопку закрытия блока смены города');
        try {
            this.buttonCloseChangeCityBlock.waitForClickable({
                timeout: 10000,
                timeoutMsg: 'Кнопка закрытия окна выбора города недоступна для клика!'
            });
            browser.execute("arguments[0].click();", this.buttonCloseChangeCityBlock);
        } catch (error) {}
    }

    clickButtonConfirmCurrentCity() {
        AllureReporter.addStep('Нажатие на кнопку "Выбрать" для подтверждения текущего города');
        try {
            this.buttonConfirmCurrentCity.waitForClickable({timeout: 10000,
                timeoutMsg: 'Кнопка "Выбрать" на странице подтвеждения текущего города недоступна для клика!'
            });
            this.buttonConfirmCurrentCity.click();
        } catch (e) {}
    }

    clickButtonConfirmCityChoise() {
        AllureReporter.addStep('Нажатие на кнопку "Да, я тут" для подтверждения смены города');
        this.buttonConfirmCityChoise.waitForClickable({
            timeout: 10000,
            timeoutMsg: 'Кнопка "Да я тут" на странице подтвеждения текущего города недоступна для клика!'
        });
        this.buttonConfirmCityChoise.click();
        this.buttonConfirmCityChoise.waitForClickable({
            timeout: 10000,
            timeoutMsg: 'Кнопка "Да я тут" на странице подтвеждения текущего города недоступна для клика!',
            reverse: true
        });
    }

    pickFirstSearchResult() {
        AllureReporter.addStep('Нажатие на первый подходящий под запрос город');
        this.buttonPickFirstSearchResult.waitForClickable({
            timeout: 10000,
            timeoutMsg: 'Город в списке городов для смены недоступен для клика!'
        });
        this.buttonPickFirstSearchResult.click();
    }

    setCity(cityName) {
        AllureReporter.addStep('Ввод города');
        this.fieldSearchCity.waitForDisplayed({
            timeout: 15000,
            timeoutMsg: 'Поле ввода для поиска города не отображается!'
        });
        this.buttonPickFirstSearchResult.waitForDisplayed({
            timeout: 15000,
            timeoutMsg: 'Список городов не отображается!'
        });
        this.fieldSearchCity.setValue(cityName);
        wdioExpect(this.buttonPickFirstSearchResult).toHaveTextContaining(
            `${cityName}`,
            {message: 'В первом результате поиска нет указанного города!'}
        );
    }

    clickButtonChangeCity() {
        AllureReporter.addStep('Нажатие на кнопку "Нет, другой"');
        this.buttonChangeCity.waitForClickable({
            timeout: 10000,
            timeoutMsg: 'Кнопка Нет, другой недоступна для клика!'
        });
        this.buttonChangeCity.click();
    }

    clickButtonCitySelect() {
        AllureReporter.addStep('Нажатие на кнопку выбора города');
        this.buttonCitySelect.waitForDisplayed({
            timeout: 10000,
            timeoutMsg: 'Кнопка выбора города не отображается!'
        });
        this.buttonCitySelect.click();
    }

}

module.exports = new ChangeCityPage();