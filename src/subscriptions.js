const axios = require("axios");

/**
 * Cancels an active subscription
 *
 * @param {string} invoice_id The unique Paykickstart purchase ID.
 * @param {number} cancel_at Optional field to set a specific cancellation date (unix timestamp).
 * @param {number} fire_event Toggle whether or not Paykickstart should fire all the subscription cancellation events. This field is not required and default is 1 (true).
 * @param {number} charge_overage Toggle whether or not Paykickstart should calculate and charge any overage fees due during cancellation. This field is not required and default is 0 (false).
 * @return {object} obj Returns success message
 */
function cancelSubscription(invoice_id,fire_event=1,charge_overage=1,cancel_at=null){
    let route = "subscriptions/cancel";
    let req_url = this.base_url+route;
    let params = {
        auth_token: this.auth_token,
        invoice_id: invoice_id,
        charge_overage: charge_overage
    };
    if(cancel_at !== null){
        params.cancel_at = cancel_at;
    }
    return axios.post(req_url, params).then(response => response).catch(error => error);
}

/**
 * Reactivates a canceled subscription
 *
 * @param {string} invoice_id The unique Paykickstart purchase ID.
 * @param {number} date Set the next billing date (Unix timestamp).This field is required.
 * @return {object} obj Returns success message
 */
function reactivateSubscription(invoice_id,date){
    let route = "subscriptions/re-activate";
    let req_url = this.base_url+route;
    let params = {
        auth_token: this.auth_token,
        invoice_id: invoice_id,
        date: date
    };
    return axios.post(req_url, params).then(response => response).catch(error => error);
}

/**
 * Changes a subscription by activating the new subscription first, then cancelling the current subscription.
 *
 * @param {string} invoice_id The unique Paykickstart purchase ID.
 * @param {number} product_id The new product with which subscription should now be associated.
 * @param {number} charge_date The next time the customer will be charged for the subscription. This field is optional; if not provided then the next charge date will remain unchanged.
 * @param {number} first_charge This is the pro-rata amount to charge/credit immediately. To add a credit instead of a charge, pass a NEGATIVE value in this parameter. This field is not required; if not provided the system will automatically calculate the amount to charge or to credit.
 * @param {number} allowed_units If usage is enabled, this parameter allows you to provide the usage limit for the pro-rata period. This field is not required; if not provided the system will automatically calculate it.
 * @return {object} obj Returns success message
 */
function upDowngradeSubscription(invoice_id,product_id,charge_date=null,first_charge=null,allowed_units=null){
    let route = "subscriptions/change";
    let req_url = this.base_url+route;
    let params = {
        auth_token: this.auth_token,
        invoice_id: invoice_id,
        product_id: product_id
    };
    if(charge_date !== null){
        params.charge_date = charge_date;
    }
    if(first_charge !== null){
        params.cancel_at = first_charge;
    }
    if(allowed_units !== null){
        params.cancel_at = allowed_units;
    }
    return axios.post(req_url, params).then(response => response).catch(error => error);
}

/**
 * Allows you to add usage to a subscription
 *
 * @param {string} invoice_id The unique Paykickstart purchase ID.
 * @param {number} units Set the number of usage units to attribute to this subscription for the current subscription period. This field can be negative if you wish to “credit” units to a specific subscription for the current subscriptino period.
 * @param {string} notes Add a comment/reason for the usage / credit. This field is not required.
 * @return {object} obj Returns success message
 */
function subscriptionsUsage(invoice_id,units,notes=null){
    let route = "subscriptions/usage";
    let req_url = this.base_url+route;
    let params = {
        auth_token: this.auth_token,
        invoice_id: invoice_id,
        units: units
    };
    if(notes !== null){
        params.notes = notes;
    }
    return axios.post(req_url, params).then(response => response).catch(error => error);
}
module.exports = {
    cancelSubscription : cancelSubscription,
    reactivateSubscription: reactivateSubscription,
    upDowngradeSubscription: upDowngradeSubscription,
    subscriptionsUsage: subscriptionsUsage
}