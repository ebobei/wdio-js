const { default: AllureReporter } = require('@wdio/allure-reporter');
const searchResultsPage = require('./search.results.page');
const userHelper = require("../../helpers/user.helper");
const {assert} = require("chai");

class SearchPageLoyalty {

    get bonusCount() {return (id) => $(`//section[@data-role="offer-item" and @data-xml-id="${id}"]//div[@class="card-bonus__count"]`);}

    get doubleBonusesText() {return $('//*[contains(text(), "Двойное начисление за каждый 3-й заказ")]');}

    getGoodsIdWithBonusesAndWithoutBonuses() {
        AllureReporter.addStep('Получение id товаров с бонусами и без бонусов');
        wdioExpect(searchResultsPage.goodsPriceCollection).toBeElementsArrayOfSize({
            gte: 1,
            message: 'Цены не отображаются!'
        });
        const threshold = userHelper.getUserInfo().bonus_program.bonus_threshold;
        let idBonus = [];
        let idNoBonus = [];
        searchResultsPage.goodsPriceCollection.forEach((priceElem, i) => {
            let price = priceElem.getAttribute('data-price').replace(/[^\d]/g, '');
            if (price >= threshold*100) {
                idBonus.push(searchResultsPage.productsCollection[i].getAttribute('data-xml-id'));
            } else {
                idNoBonus.push(searchResultsPage.productsCollection[i].getAttribute('data-xml-id'));
            }
        });
        return [idBonus, idNoBonus, threshold];
    }

    checkNoBonusesLowerThreshold(idArray) {
        AllureReporter.addStep('Проверка отсутствия бонусов ниже порогового значения');
        assert.isAbove(
            idArray.length,
            0,
            "Нет товаров с бонусами ниже порогового значения!"
        );
        idArray.forEach(id => {
            assert.equal(
                this.bonusCount(id).isExisting(),
                false,
                "Отображаются бонусы ниже порогового значения!"
            );
        });
    }

    checkNoBonusesUpperThreshold(idArray, threshold) {
        AllureReporter.addStep('Проверка отображения бонусов выше порогового значения');
        assert.isAbove(
            idArray.length,
            0,
            "Нет товаров с бонусами выше порогового значения!"
        );
        idArray.forEach(id => {
            wdioExpect(this.bonusCount(id)).toBeDisplayed({
                message: 'Не отображаются бонусы выше порогового значения!'
            });
            let bonuses = this.bonusCount(id).getText().replace(/[^\d]/g, '');
            assert.isAtLeast(
                Number(bonuses),
                threshold,
                "Отображаются бонусы ниже порогового значения!"
            );
        });
    }

    checkDoubleBonuses() {
        AllureReporter.addStep('Проверка отображения информации о двойных бонусах');
        wdioExpect(this.doubleBonusesText).toBeDisplayed({
            wait: 10000,
            message: 'Двойные бонусы не отображаются!'
        });
    }
}

module.exports = new SearchPageLoyalty();