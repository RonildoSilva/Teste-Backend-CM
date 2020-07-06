'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [])
.service('myService', function(){    
    this.message = '';
    this.setMessage = function (newMessage) {
        this.message = newMessage;
        return this.message;
    };
    
    console.log('-- service --');
 });
