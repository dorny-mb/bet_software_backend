"use strict";
const Bugsnag = require("@bugsnag/js");
const BugsnagPluginKoa = require("@bugsnag/plugin-koa");

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

module.exports = () => {
  if (process.env.BUGSNAG_API_KEY) {
    Bugsnag.start({
      apiKey: process.env.BUGSNAG_API_KEY,
      plugins: [BugsnagPluginKoa],
    });
  }
};
