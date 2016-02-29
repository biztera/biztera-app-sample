# biztera-app-sample

A sample app for integration with Biztera.

## Create a Biztera application

Register for a Biztera account and create your Biztera app. You will be given a `client_id` and `client_secret` that you will use in the OAuth client.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
git clone git@github.com:biztera/biztera-app-sample.git # or clone your own fork
cd biztera-app-sample
npm install
```

Open `index.js` and replace `process.env.CLIENT_ID` with `client_id` and `process.env.CLIENT_SECRET` with `client_secret`. Then run:

```sh
npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).
