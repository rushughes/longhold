if (process.env.NODE_ENV === 'production') {
  module.exports = require('./logger-prod');
} else {
  module.exports = require('./logger-dev');
}

//https://console.developers.google.com/apis/credentials?project=emaily-dev-185911
// https://mlab.com/databases/ruspow-emaily-dev/collections/users
