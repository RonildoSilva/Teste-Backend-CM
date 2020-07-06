'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.version'
]).
controller('AdminController', function($scope, $http){

  $scope.companies = [];
  $scope.currentCompany = null;

  $scope.products = [];
  $scope.currentProduct = null;

  $scope.loadCompanies = async function() {
    $http({
      method: 'GET',
      url: 'http://localhost:4001/companies/'
    })
    .then(function (response){
      $scope.companies = response.data;
      console.log(response.data);
    },function (error){
      console.log(error);
    });
  }

  $scope.deleteCompany = async function() {
    const id = $scope.selectedCompany;
    
    $http({
      method: 'DELETE',
      url: 'http://localhost:4001/company/' + id
      })
      .then(function(response) {
        // success
        $scope.loadCompanies();
      }, 
      function(response) { // optional
        // failed
      });
  }

  $scope.toggleCompanyForm = function () {
    $scope.state = !$scope.state;
  }

  $scope.toggleUpdateCompanyForm = function () {
    $scope.stateUpdateCompanyForm = !$scope.stateUpdateCompanyForm;
  }

  $scope.createCompany = async function () {
    $http({
      method: "POST",
      data: { 'name' : $scope.companyName },
      url: 'http://localhost:4001/company/'
      })
      .then(function(response) {
        // success
        $scope.loadCompanies();
      }, 
      function(response) { // optional
        // failed
      });
  }

  $scope.updateCompany = async function () {
    const id = $scope.selectedCompany;

    $http({
      method: "PUT",
      data: { 
        'name' : $scope.companyName
      },
      url: 'http://localhost:4001/company/' + id
      })
      .then(function(response) {
        // success
        $scope.loadCompanies();
      }, 
      function(response) { // optional
        // failed
      });
  }

  $scope.getCompanyInfo = async function() {
    const id = $scope.selectedCompany;
    $http({
      method: 'GET',
      url: 'http://localhost:4001/company/' + id
    })
    .then(function (response){
      //$scope.currentCompany = response.data[0];
      $scope.currentCompany = response.data;
      //console.log('Selected: ' + JSON.stringify(response.data));
    },function (error){
      console.log(error);
    }); 
  }

  $scope.showProdutsByCompany = async function() {
    const id = $scope.selectedCompany;

    $http({
      method: 'GET',
      url: 'http://localhost:4001/products/' + id
    })
    .then(function (response){
      $scope.products = response.data;
      console.log(response.data);
    },function (error){
      console.log(error);
    });
   
  }

  /*** Products */
  $scope.getProductInfo = async function() {
    const id = $scope.selectedProduct;

    console.log('PR ' + id);
    $http({
      method: 'GET',
      url: 'http://localhost:4001/product/' + id
    })
    .then(function (response){
      $scope.currentProduct = response.data[0];
      console.log('Selected: ' + JSON.stringify(response.data));
    },function (error){
      console.log(error);
    }); 
  }

  $scope.toggleProductForm = function () {
    $scope.stateProductForm = !$scope.stateProductForm;
  }

  $scope.createProduct = async function () {
    
    const id = $scope.selectedCompany;

    $http({
      method: "POST",
      data: {
        'name' : $scope.productName,
        'company_id' : id,
       },
      url: 'http://localhost:4001/product/'
      })
      .then(function(response) {
        // success
        $scope.showProdutsByCompany();
      }, 
      function(response) { // optional
        // failed
      });
  }

  $scope.toggleUpdateProductForm = function () {
    $scope.stateUpdateProductForm = !$scope.stateUpdateProductForm;
  }
  
  $scope.updateProduct = async function () {
    const id = $scope.selectedProduct;

    $http({
      method: "PUT",
      data: { 
        'name' : $scope.currentProduct.name,
        'company_id' : $scope.selectedCompany
      },
      url: 'http://localhost:4001/product/' + id
      })
      .then(function(response) {
        // success
        $scope.showProdutsByCompany();
      }, 
      function(response) { // optional
        // failed
      });
  }

  $scope.deleteProduct = async function() {
    const id = $scope.selectedProduct;
    
    $http({
      method: 'DELETE',
      url: 'http://localhost:4001/product/' + id
      })
      .then(function(response) {
        // success
        $scope.showProdutsByCompany();
      }, 
      function(response) { // optional
        // failed
      });
  }

}).config(
  ['$locationProvider', '$routeProvider',
  function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
  }
]);

