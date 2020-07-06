// Declare app level module which depends on views, and core components
var app = angular.module('myApp');

app.service('CompanyService', function($http) {

    this.loadCompanies = function() {
        $http({
            method: 'GET',
            url: 'http://localhost:4001/companies/'
          })
          .then(function (response){
            return response.data;
          },
          function(response) { // optional
            // failed
          });
    }
    
    this.deleteCompany = async function(selectedCompany) {
        $http({
          method: 'DELETE',
          url: 'http://localhost:4001/company/' + selectedCompany
          })
          .then(function(response) {
          }, 
          function(response) { });
    }

    this.createCompany = function(companyName) {
        $http({
        method: "POST",
        data: { 'name' : companyName },
        url: 'http://localhost:4001/company/'
        })
        .then(function(response) {}, 
        function(response) {});
    }

    this.updateCompany = function (selectedCompany, companyName) {
        $http({
        method: "PUT",
        data: { 
            'name' : companyName
        },
        url: 'http://localhost:4001/company/' + selectedCompany
        })
        .then(function(response) {}, 
        function(response) { // optional
            // failed
        });
    }
});