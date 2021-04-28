const axios = require("axios");

/**
 * Fetches the login token of a customer for a customer portal iframe.
 *
 * @param {string} email The email address of the customer.
 * @return {object} obj Returns the status & secret token
 */
function loginCustomer(email){
    let route = "billing-customer";
    let req_url = this.base_url+route;
    let params = {
        auth_token: this.auth_token,
        email: email
    };
    return axios.get(req_url, {
        params: params
    }).then(response => response).catch(error => error);
}

module.exports = {
    loginCustomer : loginCustomer
}