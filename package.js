Package.describe({
  name: "manuel:viewmodel",
  summary:
    "MVVM, two-way data binding, and components for Meteor. Similar to Angular and Knockout.",
  version: "6.3.8",
  git: "https://github.com/ManuelDeLeon/viewmodel"
});

var CLIENT = "client";

Package.onUse(function(api) {
  api.use(
    [
      "coffeescript@2.0.3_4",
      "ecmascript@0.1.6",
      "blaze@2.1.2",
      "templating@1.1.1",
      "jquery@1.11.3_2",
      "underscore@1.0.3",
      "tracker@1.0.7",
      "reload@1.1.3",
      "sha@1.0.3",
      "reactive-dict@1.1.0",
      "manuel:isdev@1.0.0",
      "manuel:reactivearray@1.0.9",
      "manuel:viewmodel-debug@2.7.2"
    ],
    CLIENT
  );

  api.addFiles(
    [
      "lib/viewmodel.coffee",
      "lib/viewmodel-parseBind.coffee",
      "lib/bindings.coffee",
      "lib/template.coffee",
      "lib/migration.coffee",
      "lib/viewmodel-onUrl.coffee",
      "lib/viewmodel-property.js",
      "lib/lzstring.js"
    ],
    CLIENT
  );

  api.export(["ViewModel"], CLIENT);
});

Package.onTest(function(api) {
  api.use(
    [
      "coffeescript",
      "ecmascript",
      "blaze",
      "templating",
      "jquery",
      "underscore",
      "tracker",
      "reload",
      "sha",
      "reactive-dict",
      "manuel:reactivearray",
      "cultofcoders:mocha",
      "practicalmeteor:sinon",
      "practicalmeteor:chai",
      "manuel:isdev"
    ],
    CLIENT
  );

  api.addFiles(
    [
      "lib/viewmodel.coffee",
      "lib/viewmodel-parseBind.coffee",
      "lib/viewmodel-property.js",
      "lib/bindings.coffee",
      "lib/template.coffee",
      "lib/migration.coffee",
      "tests/jquery-patch.js",
      "tests/sinon-restore.js",
      "tests/bindings.coffee",
      "tests/viewmodel.coffee",
      "tests/viewmodel-instance.coffee",
      "tests/viewmodel-check.coffee",
      "tests/viewmodel-parseBind.coffee",
      "tests/viewmodel-property.coffee",

      "tests/template.coffee"
    ],
    CLIENT
  );

  api.export(["ViewModel"], CLIENT);
});
