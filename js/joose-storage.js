/*
Joose Storage Component
@author Phil Gibbins

Depends on joose.utils
*/

;var joose = window.joose || {};
joose.storage = (function(js) {
    
    "use strict";

    // storage config
    var config = {
        storageTypes: {
            cookie: 'cookie',
            sessionStorage: 'session',
            localStorage: 'local',
        },
        actions: {
            get: 'get',
            set: 'set',
            remove: 'remove'
        }
    };

    // get a cookie value
    /*var getCookie = function(name) {
        var cookieObject = joose.utils.convertStringToObject(document.cookie, '; ');
        return cookieObject[name];
    };*/

    // set a cookie value
    var setCookie = function(name, value, expiresInDays, path) {

        // set the cookie value to the name and value specified
        var cookieValue = name + '=' + value;

        // if an expiry limit is supplied add this to the cookie string in the proper format
        if (expiresInDays) {

            // get todays date and convert this into milliseconds value
            var today = new Date();
            var todayInMilliseconds = today.getTime();

            // add today to expiresInDays in milliseconds
            var expiryTime = new Date(todayInMilliseconds + (expiresInDays * 24 * 60 * 60 * 1000));

            // add to cookie string
            cookieValue += '; expires=' + expiryTime.toUTCString();
        }

        // if a path is defined add this to the cookie value
        if (path) cookieValue += '; path=' + path;

        // save the cookie value
        document.cookie = cookieValue;
    };

    // remove a cookie value
    /*var removeCookie = function(name) {
        var cookieObject = joose.utils.convertStringToObject(document.cookie, '; ');
        delete cookieObject[name];
        document.cookie = joose.utils.convertObjectToString(cookieObject, '; ');
    };*/

    // get a session storage value
    var getSessionStorage = function(name) {
        sessionStorage.getItem(name);
    };

    // set a session storage value
    var setSessionStorage = function(name, value) {
        sessionStorage.setItem(name, value);
    };

    // remove a session storage value
    var removeSessionStorage = function() {
        sessionStorage.removeItem(name);
    };

    // get a local storage value
    var getLocalStorage = function(name) {
        localStorage.getItem(name);
    };

    // set a local storage value
    var setLocalStorage = function(name, value) {
        localStorage.setItem(name, value);
    };

    // remove a local storage value
    var removeLocalStorage = function(name) {
        localStorage.removeItem(name);
    };

    // helper method to get value from any type of storage
    var getStorageValue = function(type, name) {
        switch (type) {
            case config.storageTypes.cookie:
                getCookie(name);
                break;
            case config.storageTypes.sessionStorage:
                getSessionStorage(name);
                break;
            case config.storageTypes.localStorage:
                getLocalStorage(name);
                break;
            default:
                return false;
        }
    };

    // helper method to set value to any type of storage
    var setStorageValue = function(type, name, value) {
        switch (type) {
            case config.storageTypes.cookie:
                setCookie(name, value);
                break;
            case config.storageTypes.sessionStorage:
                setSessionStorage(name, value);
                break;
            case config.storageTypes.localStorage:
                setLocalStorage(name, value);
                break;
            default:
                return false;
        }
    };

    // helper method to remove value from any type of storage
    var removeStorageValue = function(type, name) {
        switch (type) {
            case config.storageTypes.cookie:
                removeCookie(name);
                break;
            case config.storageTypes.sessionStorage:
                removeSessionStorage(name);
                break;
            case config.storageTypes.localStorage:
                removeLocalStorage(name);
                break;
            default:
                return false;
        }
    };

    // helper method to handle storage of any type and action
    var storage = function(action, type, name, value) {
        switch (action) {
            case config.actions.get:
                getStorageValue(type, name);
                break;
            case config.actions.set:
                setStorageValue(type, name, value);
                break;
            case config.actions.remove:
                removeStorageValue(type, name);
                break;
            default:
                return false;
        }
    };

    // public methods
    return {
        getCookie: getCookie,
        setCookie: setCookie,
        removeCookie: removeCookie,
        getSessionStorage: getSessionStorage,
        setSessionStorage: setSessionStorage,
        removeSessionStorage: removeSessionStorage,
        getLocalStorage: getLocalStorage,
        setLocalStorage: setLocalStorage,
        removeLocalStorage: removeLocalStorage,
        getStorageValue: getStorageValue,
        setStorageValue: setStorageValue,
        removeStorageValue: removeStorageValue,
        storage: storage
    }

})(joose);