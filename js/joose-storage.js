/*
Joose Storage Component
@author Phil Gibbins
*/

;var joose = window.joose || {};
joose.storage = (function(js) {
    
    "use strict";

    // storage config
    var config = {
        cookieType: 'cookie',
        sessionStorageType: 'session',
        localStorageType: 'local',
        getAction: 'get',
        setAction: 'set',
        removeAction: 'remove'
    };

    /*
    var getCookie = function() {};
    var setCookie = function() {};
    var removeCookie = function() {};
    */

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

    // helper method to get value from storage
    var getStorageValue = function(type, name) {
        switch (type) {
            case config.cookieType:
                getCookie(name);
                break;
            case config.sessionStorageType:
                getSessionStorage(name);
                break;
            case config.localStorageType:
                getLocalStorage(name);
                break;
            default:
                return false;
        }
    };

    // helper method to set value to storage
    var setStorageValue = function(type, name, value) {
        switch (type) {
            case config.cookieType:
                setCookie(name, value);
                break;
            case config.sessionStorageType:
                setSessionStorage(name, value);
                break;
            case config.localStorageType:
                setLocalStorage(name, value);
                break;
            default:
                return false;
        }
    };

    // helper method to remove value to storage
    var removeStorageValue = function(type, name) {
        switch (type) {
            case config.cookieType:
                removeCookie(name);
                break;
            case config.sessionStorageType:
                removeSessionStorage(name);
                break;
            case config.localStorageType:
                removeLocalStorage(name);
                break;
            default:
                return false;
        }
    };

    // helper method to handle storage
    var storage = function(action, type, name, value) {
        switch (action) {
            case config.getAction:
                // do something
                break;
            case config.setAction:
                // do something
                break;
            case config.removeAction:
                // do something
                break;
            default:
                return false;
        }
    };

    return {
        getCookie: getCookie
    }

})(joose);