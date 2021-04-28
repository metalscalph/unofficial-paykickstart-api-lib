const axios = require("axios");

/**
 * Allows the user to confirm an unconfirmed lead.
 *
 * @param {string} lead_id The lead’s id. This field is required.
 * @param {number} lead_campaign_id The Lead Campaign’s id. This field is required.
 * @return {object} obj Returns success message
 */
function confirmLead(lead_id,lead_campaign_id){
    let route = "leads/confirm";
    let req_url = this.base_url+route;
    let params = {
        auth_token: this.auth_token,
        lead_id: lead_id,
        lead_campaign_id: lead_campaign_id
    };
    return axios.post(req_url, params).then(response => response).catch(error => error);
}

module.exports = {
    confirmLead : confirmLead
}