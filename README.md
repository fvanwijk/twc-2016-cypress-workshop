# TestWorks Conf Cypress workshop

This is an example app used by the Cypress Workshop at TestWorks Conf, based on the kitchen sink app.

For a full reference of our documentation, go to [docs.cypress.io](https://docs.cypress.io/).

To see the kitchen sink application, visit [example.cypress.io](https://example.cypress.io/).

To start the TestWorks Conf demo application, run `npm start` and go to `http://localhost:8080`.

## Features:

- Querying
- Traversal
- Actions
- Viewport
- Navigation
- Aliasing
- Waiting
- Network Requests
- Files
- Local Storage
- Cookies

## Help + Testing

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

**If you get stuck, here is more help:**

* [Gitter Channel](https://gitter.im/cypress-io/cypress)
* [Cypress Docs](https://on.cypress.io)
* [Cypress CLI Tool Docs](https://github.com/cypress-io/cypress-cli)

### 1. Install Cypress

[Follow these instructions to install Cypress.](https://on.cypress.io/guides/installing-and-running#section-installing)

Note that Cypress is already preinstalled on your TestWorks Conf VM.

### 2. Fork this repo

If you want to experiment with running this project in Continous Integration, you'll need to [fork](https://github.com/cypress-io/cypress-example-kitchensink#fork-destination-box) it first.
This step can be skipped when you are running the TestWorks Conf VM. The repo is cloned into the `~/cypress-workshop` folder.

After forking this project in `Github`, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/twc-2016-cypress-workshop.git

## cd into the cloned repo
cd twc-2016-cypress-workshop

## install the node_modules
npm install

## start the local webserver
npm start
```

The `npm start` script will spawn a webserver on port `8080` which hosts the Workshop App.

You can verify this by opening your browser and navigating to: [`http://localhost:8080`](http://localhost:8080)

You should see the app up and running. We are now ready to run Cypress tests.

### 3. Add the project to Cypress

[Follow these instructions to add the project to Cypress.](https://on.cypress.io/guides/installing-and-running#section-adding-projects)

### 4. Run in Continuous Integration

[Follow these instructions to run the tests in CI.](https://on.cypress.io/guides/continuous-integration#section-running-in-ci)
