'use strict';

class pksApi {
    /**
     * Inititalizes Base class
     *
     * @param {string} auth_token The Paykickstart vendor’s API Key
     */
    constructor(auth_token) {
        this.base_url = 'https://app.paykickstart.com/api/';
        this.auth_token = auth_token;
        Object.assign(this, require('./src/licensing'));
        Object.assign(this, require('./src/customerPortel'));
        Object.assign(this, require('./src/subscriptions'));
        Object.assign(this, require('./src/leads'));
        Object.assign(this, require('./src/coupons'));
        Object.assign(this, require('./src/affiliates'));
        Object.assign(this, require('./src/payments'));
    }
}

module.exports = pksApi;
