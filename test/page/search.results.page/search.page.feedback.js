const { assert } = require('chai');
const { default: AllureReporter } = require('@wdio/allure-reporter');


class SearchPageFeedback {

    get feedbackSearchBlock() {return $('//div[@class="feedbackSearch"]');}

    get feedbackSearchCollection() {return this.feedbackSearchBlock.$$('.//button[contains(@class, "emojiBtn")]');}

    get feedbackSearchTextarea() {return this.feedbackSearchBlock.$('.//textarea[contains(@class, "form-textarea")]');}

    get feedbackSearchSubmitButton() {return this.feedbackSearchBlock.$('.//form[@data-testid="feedbackForm"]//button[@type="submit"]');}

    get invalidFeedback() {return this.feedbackSearchBlock.$('.//div[@class="invalidFeedback"]');}

    get feedbackThanks() {return this.feedbackSearchBlock.$('.//div[@class="feedbackThanks"]');}

    get feedbackSearchTextareaHint() {return this.feedbackSearchBlock.$('.//textarea[contains(@class, "form-textarea")]/following-sibling::span');}

    checkFeedbackSearchButtonsUnderCursor() {
        AllureReporter.addStep('Проверка окрашивания смайликов при наведении курсора в отзыве на поиск');
        this.feedbackSearchBlock.waitForDisplayed({
            timeout: 5000,
            timeoutMsg: 'Блок с отзывом на поиск не отображается!'
        });
        wdioExpect(this.feedbackSearchCollection).toBeElementsArrayOfSize({
            eq: 5,
            message: 'Количество смайликов не равно 5!'
        });
        this.feedbackSearchBlock.scrollIntoView(false);
        this.feedbackSearchCollection.forEach(item => {
            const filter = item.getCSSProperty('filter');
            assert.include(
                filter.value,
                `grayscale(1)`,
                "Смайлик окрашен до наведения курсора!"
            );
        });

        this.feedbackSearchCollection.forEach(item => {
            item.moveTo();
            const filter = item.getCSSProperty('filter');
            assert.include(
                filter.value,
                `none`,
                "Смайлик не окрашен после наведения курсора!"
            );
        });
    }

    checkNegativeFeedbackSearchButtonsPressed() {
        AllureReporter.addStep('Проверка нажатия на негативные смайлики в отзыве на поиск');
        this.feedbackSearchBlock.scrollIntoView(false);
        const negativeFeedbackSmiles = this.feedbackSearchCollection.slice(-2);
        negativeFeedbackSmiles.forEach(item => {
            item.click();
            wdioExpect(this.feedbackSearchTextarea).toBeDisplayed({
                message: 'Поле ввода текста не отображается!'
            });
            wdioExpect(this.feedbackSearchTextareaHint).toHaveText(
                'Что нам следует исправить?',
                {message: 'Некорректный текст в поле отправки негативного отзыва на поиск'}
            );
            wdioExpect(this.feedbackSearchSubmitButton).toBeDisplayed({
                message: 'Кнопка отправки сообщения не отображается!'
            });
            wdioExpect(item).toHaveAttrContaining(
                'class',
                'current',
                {message: 'Смайлик не активирован!'}
            );
            let filter = item.getCSSProperty('filter');
            assert.equal(
                `${filter.value}`,
                "none",
                "Смайлик не окрашен после нажатия!"
            );
            wdioExpect(this.feedbackSearchSubmitButton).toBeDisabled({
                message: 'Кнопка отправки сообщения активна!'
            });
            wdioExpect(this.feedbackSearchSubmitButton).toHaveText(
                'Отправить',
                {message: 'Кнопка отправки сообщения не содержит текст "Отправить"!'}
            );
        });
    }

    checkPositiveFeedbackSearchButtonsPressed() {
        AllureReporter.addStep('Проверка нажатия на позитивные смайлики в отзыве на поиск');
        const positiveFeedbackSmiles = this.feedbackSearchCollection[0];
        positiveFeedbackSmiles.moveTo();
        this.feedbackSearchBlock.scrollIntoView(false);
        positiveFeedbackSmiles.click();
        wdioExpect(this.feedbackSearchTextarea).toBeDisplayed({
            message: 'Поле ввода текста не отображается!'
        });
        wdioExpect(this.feedbackSearchTextareaHint).toHaveText(
            'Расскажите как нам стать еще лучше?',
            {message: 'Некорректный текст в поле отправки позитивного отзыва на поиск'}
        );
        wdioExpect(this.feedbackSearchSubmitButton).toBeDisplayed({
            message: 'Кнопка отправки сообщения не отображается!'
        });
        wdioExpect(positiveFeedbackSmiles).toHaveAttrContaining(
            'class',
            'current',
            {message: 'Смайлик не активирован!'}
        );
        let filter = positiveFeedbackSmiles.getCSSProperty('filter');
        assert.equal(
            `${filter.value}`,
            "none",
            "Смайлик не окрашен после нажатия!"
        );
        wdioExpect(this.feedbackSearchSubmitButton).toBeEnabled({
            message: 'Кнопка отправки сообщения не активна!'
        });
        wdioExpect(this.feedbackSearchSubmitButton).toHaveText(
            'Отлично',
            {message: 'Кнопка отправки сообщения не содержит текст "Отлично"!'}
        );
    }


    checkNegativeFeedbackSearchTextInput() {
        AllureReporter.addStep('Проверка ввода текста в негативный отзыв на поиск');
        this.feedbackSearchCollection[4].click();
        wdioExpect(this.feedbackSearchTextarea).toBeDisplayed({
            message: 'Поле ввода текста не отображается!'
        });
        this.feedbackSearchTextarea.scrollIntoView(false);
        wdioExpect(this.feedbackSearchSubmitButton).toBeDisabled({
            message: 'Кнопка отправки сообщения активна!'
        });
        this.feedbackSearchTextarea.setValue(Math.floor(Math.random() * 9));
        wdioExpect(this.feedbackSearchSubmitButton).toBeEnabled({
            message: 'Кнопка отправки сообщения не активна!'
        });
        browser.keys('Backspace');
        wdioExpect(this.feedbackSearchSubmitButton).toBeDisabled({
            message: 'Кнопка отправки сообщения активна!'
        });
        wdioExpect(this.invalidFeedback).toHaveText(
            'Поле обязательно для заполнения',
            {message: 'Не отображается предупреждение о пустом поле'}
        );
        let text = "";
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 800; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
        this.feedbackSearchTextarea.setValue(text);
        wdioExpect(this.feedbackSearchSubmitButton).toBeDisabled({
            message: 'Кнопка отправки сообщения активна!'
        });
        wdioExpect(this.invalidFeedback).toHaveText(
            'Комментарий не должен превышать 800 символов',
            {message: 'Не отображается предупреждение о превышении лимита в 800 символов'}
        );
        browser.keys('Backspace');
        wdioExpect(this.feedbackSearchSubmitButton).toBeEnabled({
            message: 'Кнопка отправки сообщения не активна!'
        });
        assert.equal(
            this.invalidFeedback.isExisting(),
            false,
            "Отображается предупреждение при корректно заполненном поле!"
        );
        text = "Тест\nТест\nhttps://www.eapteka.ru/\nТест";
        this.feedbackSearchTextarea.setValue(text);
        assert.equal(
            `${this.feedbackSearchTextarea.getValue()}`,
            `${text}`,
            "Текст введен не корректно!"
        );
    }

    checkPositiveFeedbackSearchTextInput() {
        AllureReporter.addStep('Проверка ввода текста в отзыв на поиск');
        wdioExpect(this.feedbackSearchTextarea).toBeDisplayed({
            message: 'Поле ввода текста не отображается!'
        });
        this.feedbackSearchTextarea.scrollIntoView(false);
        wdioExpect(this.feedbackSearchSubmitButton).toBeEnabled({
            message: 'Кнопка отправки сообщения не активна!'
        });
        this.feedbackSearchTextarea.setValue(Math.floor(Math.random() * 9));
        wdioExpect(this.feedbackSearchSubmitButton).toBeEnabled({
            message: 'Кнопка отправки сообщения не активна!'
        });
        browser.keys('Backspace');
        wdioExpect(this.feedbackSearchSubmitButton).toBeEnabled({
            message: 'Кнопка отправки сообщения не активна!'
        });
        let text = "";
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 800; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
        this.feedbackSearchTextarea.setValue(text);
        wdioExpect(this.feedbackSearchSubmitButton).toBeDisabled({
            message: 'Кнопка отправки сообщения активна!'
        });
        wdioExpect(this.invalidFeedback).toHaveText(
            'Комментарий не должен превышать 800 символов',
            {message: 'Не отображается предупреждение о превышении лимита в 800 символов'}
        );
        browser.keys('Backspace');
        wdioExpect(this.feedbackSearchSubmitButton).toBeEnabled({
            message: 'Кнопка отправки сообщения не активна!'
        });
        assert.equal(
            this.invalidFeedback.isExisting(),
            false,
            "Отображается предупреждение при корректно заполненном поле!"
        );
        text = "Тест\nТест\nhttps://www.eapteka.ru/\nТест";
        this.feedbackSearchTextarea.setValue(text);
        assert.equal(
            `${this.feedbackSearchTextarea.getValue()}`,
            `${text}`,
            "Текст введен не корректно!"
        );
    }

    clickFeedbackSearchSubmitButton() {
        AllureReporter.addStep('Нажатие на кнопку отправки отзыва на поиск');
        this.feedbackSearchSubmitButton.waitForClickable({
            timeout: 5000,
            timeoutMsg: 'Кнопка отправки отзыва на поиск не отображается!'
        });
        this.feedbackSearchSubmitButton.click();
        wdioExpect(this.feedbackThanks).toHaveTextContaining(
            'Спасибо за отзыв',
            {message: 'Не отображается заголовок "Спасибо за отзыв"!'}
        );
        return this.feedbackThanks.getText();
    }

    checkFeedbackSearchBlockIsNotDisplayed() {
        AllureReporter.addStep('Проверка отсутствия блока с отзывом на поиск');
        this.feedbackSearchBlock.waitForDisplayed({
            timeout: 5000,
            timeoutMsg: 'Блок с отзывом на поиск отображается!',
            reverse: true
        });
    }
}

module.exports = new SearchPageFeedback();
