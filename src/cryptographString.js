/**
 * Safely encode your string data to prevent hackers.
 * @param {string} stringData - String to be protected.
 * @return {string} Your data is now protected from anonymous.
 */
var cryptographString = function(stringData) {
    var securedData = window.btoa(stringData);
    
    return securedData;
};

anything.prototype.cryptographString = cryptographString;
