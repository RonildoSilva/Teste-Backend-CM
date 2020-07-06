'use strict';

// Declare app level module which depends on views, and core components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.version'
]);

app.controller('AdminController', [
  '$scope', '$http', 'CompanyService', 'ProductService',
function($scope, $http, CompanyService, ProductService){

  /* Services */
  $scope.CompanyService = CompanyService;  
  $scope.ProductService = ProductService;


  /* Company Services */
  $scope.createCompany = async function(){
    $scope.CompanyService.createCompany($scope.companyName);
    await $scope.loadCompanies();
  }

  $scope.deleteCompany = async function(){
    $scope.CompanyService.deleteCompany($scope.selectedCompany);
    await $scope.loadCompanies();
  }

  $scope.updateCompany = function(){
    $scope.CompanyService.updateCompany($scope.selectedCompany, $scope.companyName);
  }

  $scope.toggleCompanyForm = function () {
    $scope.state = !$scope.state;
  }

  $scope.toggleUpdateCompanyForm = function () {
    $scope.stateUpdateCompanyForm = !$scope.stateUpdateCompanyForm;
  }

  $scope.getCompanyInfo = async function() {
    const id = $scope.selectedCompany;
    $http({
      method: 'GET',
      url: 'http://localhost:4001/company/' + id
    })
    .then(function (response){
      $scope.currentCompany = response.data;
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
    },function (error){
      console.log(error);
    });
   
  }

  $scope.loadCompanies = async function() {
    $http({
      method: 'GET',
      url: 'http://localhost:4001/companies/'
    })
    .then(function (response){
      $scope.companies = response.data;
    },function (error){
      console.log(error);
    });
  }

  /* Product Services */
  $scope.createProduct = async function () {
    await $scope.ProductService.createProduct($scope.productName, $scope.selectedCompany);
    $scope.showProdutsByCompany();
  }

  $scope.updateProduct = async function () {
    await $scope.ProductService.updateProduct($scope.selectedProduct, 
      $scope.currentProduct.name, $scope.selectedCompany);
    $scope.showProdutsByCompany();
  }

  $scope.deleteProduct = async function() {
    await $scope.ProductService.deleteProduct($scope.selectedProduct);
    $scope.showProdutsByCompany();
  }

  $scope.getProductInfo = async function() {
    const id = $scope.selectedProduct;

    console.log('PR ' + id);
    $http({
      method: 'GET',
      url: 'http://localhost:4001/product/' + id
    })
    .then(function (response){
      $scope.currentProduct = response.data[0];
    },function (error){
      console.log(error);
    }); 
  }

  $scope.toggleProductForm = function () {
    $scope.CompanyService.createCompany($scope.companyName, $scope.selectedCompany);
    $scope.stateProductForm = !$scope.stateProductForm;
  }

  $scope.toggleUpdateProductForm = function () {
    $scope.stateUpdateProductForm = !$scope.stateUpdateProductForm;
  }

}]);

app.config(
  ['$locationProvider', '$routeProvider',
  function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
  }
]);