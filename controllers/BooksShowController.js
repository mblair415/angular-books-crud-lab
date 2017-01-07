angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

// controller function and dependency injection
// $routeParams and $location are required for routing stuff
//   - but you might need to add a dependency
BooksShowController.$inject=['$routeParams', '$location', '$http'];
function BooksShowController($routeParams, $location, $http) {
  var vm = this;
  var bookId = $routeParams.id;
  var singleBook;

  vm.viewOne = function(book){
    $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/books/' + bookId
    }).then(function successCb(response){
      vm.book = response.data;
      singleBook = vm.book;
      console.log('get one book success!', vm.book);
    }, function errorCb(response){
      console.log('an error trying to get one book', response);
    })
  }

  vm.viewOne();

  vm.viewAll = function(){
    $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/'
    }).then(function successCb(response){
      $location.path('/');
      console.log('homepage call success', response);
    }, function errorCb(response){
      console.log('an error trying to get back to the view all page.', response);
    })
  }

  vm.deleteBook = function(book) {
    $http({
      method: 'DELETE',
      url:  'https://super-crud.herokuapp.com/books/' + bookId
    }).then(function deleteSuccessCb(bookToDelete){
      $location.path('/');
    }, function deleteErrorCb(res){
      console.log('Things went badly with delete.');
    });
  }

  vm.editBook = function(book) {
    console.log(book);
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/' + bookId,
      data: book
    }).then(function editSuccessCb(bookToEdit){
      // var index = vm.albums.indexOf(album);
      // vm.albums.splice(index, 1, albumToEdit.data);
      $location.path('/');
      console.log('edit success', bookToEdit);
    }, function editErrorCb(res){
      console.log('Problems with book edit', res);
    })
  }
};
