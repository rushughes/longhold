mongodb
*******

To import demo data in to mongodb mlab does free hosted mongodb https://mlab.com

Google Oauth Credentials
************************

Go to https://console.developers.google.com/
APIs & Services -> dashboard
Enable APIs & Services
Search for Google+ API
Enable Google+ API
Go to Credentials
Create Credentials
OAuth Client ID
Web Application
Give it a suitable name
Authorized Javascript Origin http://localhost
Authorized Redirect URIs http://localhost/auth/google/callback

Import Demo Coin Data
*********************

node utils/importCoin.js utils/demo.csv

Example dev.js config file
**************************

`
module.exports = {
  googleClientID:
    '196747530576-e8f9d0fguy2oqfo97n0gkhuro3a08gler.apps.googleusercontent.com',
  googleClientSecret: Hrp9G8HRVsmPZpjsPFGOztQf
  mongoURI: 'mongodb://username:password@ds056783.mlab.com:94752/longhold-dev',
  cookieKey: 'defjlsdfjksdfpguifg234wefdf',
  redirectDomain: 'http://localhost:3000',
};
`

Heroku
******

heroku git:remote -a longhold
git push heroku master
heroku logs
