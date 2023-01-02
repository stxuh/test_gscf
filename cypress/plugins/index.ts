/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
//module.exports = (on, config) => {
// `on` is used to hook into various events Cypress emits
// `config` is the resolved Cypress config
//}

const logging = {
  log(message) {
    console.log(message);
    return null;
  },
};
const getClipboard = {
  getClipboard: () => {
    return require("clipboardy").readSync();
  },
};

module.exports = (on) => {
  // register plugin's task
  on("task", logging);
  // and register my own task
  on("task", getClipboard);
};

declare namespace Cypress {
  interface Chainable<Subject = any> {
    checkSpinner(): Chainable<null>;
  }
}
