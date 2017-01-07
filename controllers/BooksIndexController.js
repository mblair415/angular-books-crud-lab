angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject = ['$http'];

function BooksIndexController($http){
  var vm = this;

  vm.newBook = {
  };

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function successCb(response){
    vm.books = response.data.books
    console.log('get all books success!', vm.books);
  }, function errorCb(response){
    console.log('get all books error', response);
  })
}
