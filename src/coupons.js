const axios = require("axios");

/**
 * Creates a new coupon.
 *
 * @param {string} coupon_name The display name for your coupon.
 * @param {string} coupon_code The Unique coupon code for your coupon.
 * @param {string} coupon_rate The value of your coupon.
 * @param {string} coupon_type The type of value – accepted arguments are: “amount” and “percentage”
 * @param {Array.<number>} coupon_apply_to Determines if the coupon should be applied to first charge (excludes split pay), first charge, rebills and/or split payments. This is an array parameter where one or more of the below arguments are accepted:
 1: First Charge (excludes split pay)
 2: First Charge
 3: Rebills
 4: Split Payments
 * @param {string} coupon_start_date The start date of when the coupon is active
 * @param {string} coupon_end_date The end date of when the coupon is active
 * @param {number} coupon_max_redemption The maximum number of times a coupon may be redeemed
 * @param {Array.<number>} plan_ids An array of plan ids which the coupon should be applied to
 * @param {number} product_id The campaign id which the coupon should be applied to
 * @return {object} obj Returns success message
 */
function createCoupon(coupon_name,coupon_code,coupon_rate,coupon_type,coupon_apply_to,coupon_start_date,
                      coupon_end_date,coupon_max_redemption=null,plan_ids,product_id){
    let route = "coupons";
    let req_url = this.base_url+route;
    let params = {
        auth_token: this.auth_token,
        coupon_name: coupon_name,
        coupon_code: coupon_code,
        coupon_rate: coupon_rate,
        coupon_type: coupon_type,
        coupon_apply_to: coupon_apply_to,
        coupon_start_date: coupon_start_date,
        coupon_end_date: coupon_end_date,
        coupon_max_redemption: coupon_max_redemption,
        plan_ids: plan_ids,
        product_id: product_id
    };
    return axios.post(req_url, params).then(response => response).catch(error => error);
}

module.exports = {
    createCoupon : createCoupon
}