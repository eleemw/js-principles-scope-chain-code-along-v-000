/* Scope Chain Code-along */
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overWriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'kent';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'kerry';
}

let favoriteCustomer = 'mary'

function attemptTwoFavoriteCustomers() {
  var favoriteCustomer = 'patty';
  // favoriteCustomer = 'selma';
}
