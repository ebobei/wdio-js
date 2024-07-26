const { default: AllureReporter } = require('@wdio/allure-reporter');
const searchResultsPage = require('./search.results.page');

class SearchPageFilter {

    get filterFastDeliveryContainer() {return $('//div[@class="filter__widget-title" and @data-text-after="Быстрая доставка"]/parent::div[@class="filter__widget"]');}

    get filterFastDeliverCheckBox() {return this.filterFastDeliveryContainer.$('.//*[contains(@for, "fo_fast_delivery_")]');}

    clickFastDeliveryCheckBox() {
        AllureReporter.addStep('Проверка и активация фильтра быстрой доставки');
        this.filterFastDeliveryContainer.waitForDisplayed({
            timeout: 5000,
            timeoutMsg: 'Блок с фильтром по быстрой доставке не отображается!'
        });
        this.filterFastDeliverCheckBox.waitForClickable({
            timeout: 5000,
            timeoutMsg: 'Check-box фильтра по быстрой доставке не доступен для клика!'
        });
        browser.execute("arguments[0].click();", this.filterFastDeliverCheckBox);
        searchResultsPage.waitUntilLoaderNotDisplayed();
    }

    checkPossibleFastDelivery() {
        AllureReporter.addStep('Проверка возможного наличия быстрой доставки в списке товаров');
        if (this.filterFastDeliveryContainer.isDisplayed() === true) {
            searchResultsPage.checkFastDeliveryItems();
            this.clickFastDeliveryCheckBox();
            searchResultsPage.checkFastDeliveryItemsAfterFilter();
        } else {
            searchResultsPage.checkNoFastDeliveryItems();
        }
    }
}

module.exports = new SearchPageFilter();