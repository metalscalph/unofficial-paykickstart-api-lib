const axios = require("axios");

/**
 * Returns all the affiliate’s details for a specified campaign.
 * @param {number} campaign_id The affiliate’s campaign’s id. This field is required.
 * @return {object} obj Returns all the affiliate’s details for a specified campaign.
 */
function getAllAffiliates(campaign_id){
    let route = "affiliates/all";
    let req_url = this.base_url+route;
    let params = {
        auth_token: this.auth_token,
        campaign_id: campaign_id
    };
    return axios.post(req_url, params).then(response => response).catch(error => error);
}

/**
 * Returns the affiliate’s details and links.
 * @param {number} campaign_id The affiliate’s campaign’s id. This field is required.
 * @param {string} affiliate The affiliate’s email address or ID. This field is required.
 * @return {object} obj Returns the affiliate’s details and links.
 */
function getAffiliate(campaign_id,affiliate){
    let route = "affiliate";
    let req_url = this.base_url+route;
    let params = {
        auth_token: this.auth_token,
        campaign_id: campaign_id,
        affiliate: affiliate
    };
    return axios.post(req_url, params).then(response => response).catch(error => error);
}

/**
 * Returns all the marketing material for a specified campaign.
 * @param {number} campaign_id The affiliate’s campaign’s id. This field is required.
 * @return {object} obj Returns all the marketing material for a specified campaign.
 */
function getPromoMaterial(campaign_id){
    let route = "promo-material";
    let req_url = this.base_url+route;
    let params = {
        auth_token: this.auth_token,
        campaign_id: campaign_id
    };
    return axios.post(req_url, params).then(response => response).catch(error => error);
}
module.exports = {
    getAllAffiliates : getAllAffiliates,
    getAffiliate : getAffiliate,
    getPromoMaterial : getPromoMaterial
}