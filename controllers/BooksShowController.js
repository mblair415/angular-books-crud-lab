angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

// controller function and dependency injection
// $routeParams and $location are required for routing stuff
//   - but you might need to add a dependency
BooksShowController.$inject=['$routeParams', '$location', '$http'];
function BooksShowController($routeParams, $location, $http) {
  var vm = this;
  var bookId = $routeParams.id;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/' + bookId
  }).then(function successCb(response){
    vm.oneBook = response.data;
    console.log('get one book success!', vm.oneBook);
  }, function errorCb(response){
    console.log('an error trying toget one book', response);
  })
};
