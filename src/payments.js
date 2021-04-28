const axios = require("axios");

/**
 * Token generated from "https://support.paykickstart.com/api/#2-4-1-new-purchase" is submitted along with your new purchase request data / instructions
 *
 * @param {number} product The campaign’s id. This field is required.
 * @param {number} plan The product’s id. This field is required.
 * @param {string} first_name
 * @param {string} last_name
 * @param {string} email
 * @param {string} stripeToken
 * @param {number} is_recurring
 * @param {number} price
 * @param {number} recurring_freq
 * @param {string} recurring_freq_type
 * @param {number} cycles
 * @param {number} ccNum
 * @param {number} ccExpireYear
 * @param {number} ccExpireMonth
 * @return {object} obj Returns success message with data
 */
function newPurchase(product,plan,first_name,last_name,email,stripeToken,is_recurring,
                     price,recurring_freq,recurring_freq_type,cycles,ccNum,ccExpireYear,
                     ccExpireMonth){
    let route = "purchase";
    let req_url = this.base_url+route;
    let params = {
        auth_token: this.auth_token,
        product: product,
        plan: plan,
        first_name: first_name,
        last_name: last_name,
        email: email,
        stripeToken: stripeToken,
        is_recurring: is_recurring,
        price: price,
        recurring_freq: recurring_freq,
        recurring_freq_type: recurring_freq_type,
        cycles: cycles,
        ccNum: ccNum,
        ccExpireYear: ccExpireYear,
        ccExpireMonth: ccExpireMonth
    };
    return axios.post(req_url, params).then(response => response).catch(error => error);
}

/**
 * Updates a customer’s credit card information for a specified purchase.
 * @param {string} invoice_id The unique Paykickstart purchase ID
 * @param {string} stripeToken The payment processor token is required.
 * @param {string} ccNum The last 4 digits of the customer’s new credit card number
 * @param {number} expireMonth The customer’s new credit card expiry month
 * @param {number} expireYear The customer’s new credit card expiry year
 * @return {object} obj Returns success message
 */
function updateCreditCard(invoice_id,stripeToken,ccNum,expireMonth,expireYear){
    let route = "purchase/update-cc";
    let req_url = this.base_url+route;
    let params = {
        auth_token: this.auth_token,
        invoice_id: invoice_id,
        stripeToken: stripeToken,
        ccNum: ccNum,
        expireMonth: expireMonth,
        expireYear: expireYear
    };
    return axios.post(req_url, params).then(response => response).catch(error => error);
}

/**
 * Returns the purchase details.
 * @param {string} id The purchase’s id. This field is required.
 * @return {object} obj Returns the purchase details.
 */
function getPurchase(id){
    let route = "purchase/get";
    let req_url = this.base_url+route;
    let params = {
        auth_token: this.auth_token,
        id: id
    };
    return axios.post(req_url, params).then(response => response).catch(error => error);
}

/**
 * Returns the transaction details.
 * @param {string} id The transaction’s id. This field is required.
 * @return {object} obj Returns the transaction details.
 */
function getTransaction(id){
    let route = "transaction/get";
    let req_url = this.base_url+route;
    let params = {
        auth_token: this.auth_token,
        id: id
    };
    return axios.post(req_url, params).then(response => response).catch(error => error);
}

/**
 * Fetches the last 100 transactions (or 100 transactions up to the created_at date) for the associated account.
 * @param {number} created_at The end date up to when to fetch the transactions in UNIX timestamp format. This field is optional.
 * @return {object} obj Fetches the last 100 transactions (or 100 transactions up to the created_at date) for the associated account.
 */
function getTransactions(created_at= null){
    let route = "transactions";
    let req_url = this.base_url+route;
    let params = {
        auth_token: this.auth_token
    };
    if(created_at != null){
        params.created_at = created_at;
    }
    return axios.post(req_url, params).then(response => response).catch(error => error);
}

module.exports = {
    newPurchase : newPurchase,
    updateCreditCard : updateCreditCard,
    getPurchase : getPurchase,
    getTransaction : getTransaction,
    getTransactions : getTransactions
}