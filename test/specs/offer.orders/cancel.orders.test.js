const url = require('../../../envs');
const orderHelper = require("../../helpers/order.helper");
const loginData = require("../../testdata/logindata");

describe('Отмена заказов', function() {
    it(`Отмена активных заказов у пользователя ${loginData.email}`, function() {
        browser.url(url[process.env.ENV]);
        orderHelper.cancelAllOrders(loginData.email, loginData.password);
    });
});