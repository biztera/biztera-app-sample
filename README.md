# biztera-app-sample

A sample app for integration with Biztera.

## Create a Biztera application

Register for a Biztera account and create your Biztera app. You will be given a `client_id` and `client_secret` that you will use in the OAuth client.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
export CLIENT_ID=__YOUR_CLIENT_ID__ # use the `client_id` given to you
export CLIENT_SECRET=__YOUR_CLIENT_SECRET__ # use the `client_secret` given to you
git clone https://github.com/biztera/biztera-app-sample.git # or clone your own fork
cd biztera-app-sample
npm install
npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).
