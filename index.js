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

var favoriteCustomer = 'mary'

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'patty';
  // favoriteCustomer = 'selma';
}
