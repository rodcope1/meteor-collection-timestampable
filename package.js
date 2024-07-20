Package.describe({
  git: 'https://github.com/rodcope1/meteor-collection-timestampable.git',
  name: 'rodcope1:collection-timestampable',
  summary: 'Add timestamps to collections',
  version: '3.1.6'
});

Package.onUse(function(api) {
  api.versionsFrom('3.0.1');

  api.use([
    'check',
    'coffeescript@2.0.0',
    'underscore'
  ]);

  api.use([
    'matb33:collection-hooks@1.3.0',
    'rodcope1:collection-behaviours@3.0.0'
  ]);

  api.use([
    'aldeed:collection2@4.0.0',
    'aldeed:simple-schema@1.13.0'
  ], ['client', 'server'], {weak: true});

  api.imply('rodcope1:collection-behaviours');

  api.mainModule('timestampable.coffee');
});
