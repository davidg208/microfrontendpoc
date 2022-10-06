const webpack = require("webpack");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  [/* mapped paths to share */]);



module.exports = {
  output: {
    publicPath: "http://localhost:4209/",
    uniqueName: "register",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "register",
      library: { type: "var", name: "register" },
      filename: "remoteEntry.js",
      exposes: {
        RegisterPageModule:
          "./src/app/modules/register/register-page.module.ts",
      },
      shared: {
        "@angular/core": { singleton: true, requiredVersion: 'auto', eager: true },
        "@angular/common": { singleton: true, requiredVersion: 'auto', eager: true },
        "@angular/router": { singleton: true, requiredVersion: 'auto', eager: true },
        "ngx-common-ui-lib": { singleton: true, requiredVersion: 'auto', eager: true},
        // "ngx-common-ui-lib": { singleton: true, requiredVersion: 'auto' }, // async loading (less bundle size if packages already presented in shell)
        // "ngx-common-ui-lib": { singleton: true, requiredVersion: '^0.0.13' }, // pass required lib version
        // "ngx-common-ui-lib": { eager: true, singleton: true }, // sync loading
        ...sharedMappings.getDescriptors()
      },
    }),
    sharedMappings.getPlugin()
  ],
};
