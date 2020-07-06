// Declare app level module which depends on views, and core components
var app = angular.module('myApp');

app.service('ProductService', function($http) {

    this.deleteProduct = async function(selectedProduct) {
        $http({
            method: 'DELETE',
            url: 'http://localhost:4001/product/' + selectedProduct
            })
            .then(function(response) {}, 
            function(response) { // optional
            // failed
            });
    }

    this.createProduct = async function(productName, selectedCompany) {
        $http({
        method: "POST",
        data: {
            'name' : productName,
            'company_id' : selectedCompany,
        },
        url: 'http://localhost:4001/product/'
        })
        .then(function(response) {}, 
        function(response) {
        });
    }

    this.updateProduct = async function(selectedProduct, currentProductName, selectedCompany) {
        $http({
        method: "PUT",
        data: { 
            'name' : currentProductName,
            'company_id' : selectedCompany
        },
        url: 'http://localhost:4001/product/' + selectedProduct
        })
        .then(function(response) {
        }, 
        function(response) { // optional
            // failed
        });
    }

});