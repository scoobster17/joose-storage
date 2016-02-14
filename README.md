# Joose Storage Component

A lightweight, minimal storage helper with a few varieties of approach. This component belongs to the Joose component library, but can be used completely independently.

Please see [joose](https://github.com/scoobster17/joose) for the whole component library.

## Installation

To install this component independently using [bower](http://bower.io/search/?q=joose-storage) use the following command:

`bower install joose-storage`

To install this component independently using [npm](https://www.npmjs.com/package/joose-storage) use the following command:

`npm install joose-storage`

## Usage

Simply add the JavaScript onto your page either using a script tag or concatenating with your own JavaScript and you are good to go using the `joose.storage` object.

Current methods:

  * Cookie Handling

    * Get a cookie value  
      `joose.storage.getCookie(elem, class);`

    * Set a cookie value  
      `joose.storage.setCookie(name, value, expiresInDays, path)`

    * Remove a cookie  
      `joose.storage.removeCookie(name)`

  * SessionStorage Handling

    * Get a sessionStorage value  
      `joose.storage.getSessionStorage(name)`

    * Set a sessionStorage value  
      `joose.storage.setSessionStorage(name, value)`

    * Remove a sessionStorage item  
      `joose.storage.removeSessionStorage(name)`

  * LocalStorage Handling

    * Get a localStorage value  
      `joose.storage.getLocalStorage(name)`

    * Set a localStorage value  
      `joose.storage.setLocalStorage(name, value)`

    * Remove a localStorage item  
      `joose.storage.removeLocalStorage(name)`

  * Extra helper methods useful for dynamic / easily changed storage methods

    * Get a value from any type of storage (must be specified)  
      `joose.storage.getStorageValue(type, name)`

    * Set a cookie value to any type of storage (must be specified)  
      `joose.storage.setStorageValue(type, name, value)`

    * Remove an item from any type of storage (must be specified)  
      `joose.storage.removeStorageValue(type, name)`

    * Handle any type of action with any type of storage (both must be specified)  
      `joose.storage.handle(action, type, name, value)`

The helper methods are mainly for if you want the flexibility of changing your storage type with ease; I have seen a lot of rework needed before across a project.