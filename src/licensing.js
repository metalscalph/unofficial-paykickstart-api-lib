const axios = require("axios");

/**
 * Returns license information for a specific license key.
 *
 * @param {string} license_key The customer’s license key.
 * @return {object} obj Returns license information for a specific license key.
 */
function getLicenseData(license_key){
    let route = "licenses/data";
    let req_url = this.base_url+route;
    let params = {
        auth_token: this.auth_token,
        license_key: license_key
    };
    return axios.get(req_url, {
        params: params
    }).then(response => response).catch(error => error);
}

/**
 * Returns license status information for a specific license key.
 *
 * @param {string} license_key The customer’s license key.
 * @return {object} obj Returns license status information for a specific license key.
 */
function getLicenseStatus(license_key){
    let route = "licenses/status";
    let req_url = this.base_url+route;
    let params = {
        auth_token: this.auth_token,
        license_key: license_key
    };
    return axios.get(req_url, {
        params: params
    }).then(response => response).catch(error => error);
}

/**
 * Activates the license for a specific license key / GUID combination
 *
 * @param {string} license_key The customer’s license key.
 * @param {string} guid The GUID is usually a 128-bit integer number used to identify unique resources, but for the purpose of activating a license on Paykickstart it can be any unique hash or “identifier” to identify where the license has been activated, such as a unique hardware identifier, or a unique URL. This prevents the license from being activated in multiple environments at once (1 license per use).
 * @return {object} obj Returns success message with data
 */
function activateLicense(license_key,guid){
    let route = "licenses/activate";
    let req_url = this.base_url+route;
    let params = {
        auth_token: this.auth_token,
        license_key: license_key,
        guid: guid
    };
    return axios.post(req_url, params).then(response => response).catch(error => error);
}

/**
 * “clears” / de-registers the license from its specified GUID, allowing it to be activated again for a new (or the same) GUID
 *
 * @param {string} license_key The customer’s license key.
 * @return {object} obj Returns success message with data
 */
function clearLicense(license_key){
    let route = "licenses/clear";
    let req_url = this.base_url+route;
    let params = {
        auth_token: this.auth_token,
        license_key: license_key
    };
    return axios.post(req_url, params).then(response => response).catch(error => error);
}

/**
 * Enables the license for being activated and verified
 *
 * @param {string} license_key The customer’s license key.
 * @return {object} obj Returns success message with data
 */
function enableLicense(license_key){
    let route = "licenses/enable";
    let req_url = this.base_url+route;
    let params = {
        auth_token: this.auth_token,
        license_key: license_key
    };
    return axios.post(req_url, params).then(response => response).catch(error => error);
}

/**
 * Disables the license from being activated or verified
 *
 * @param {string} license_key The customer’s license key.
 * @return {object} obj Returns success message with data
 */
function disableLicense(license_key){
    let route = "licenses/disable";
    let req_url = this.base_url+route;
    let params = {
        auth_token: this.auth_token,
        license_key: license_key
    };
    return axios.post(req_url, params).then(response => response).catch(error => error);
}

module.exports = {
    getLicenseData : getLicenseData,
    getLicenseStatus : getLicenseStatus,
    activateLicense : activateLicense,
    clearLicense : clearLicense,
    enableLicense : enableLicense,
    disableLicense : disableLicense
}