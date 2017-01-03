requirejs.config
({
  baseUrl: 'js', // By default load any modules from directory js
  paths :
           {
             app:       'app',

             model:     'app/model',
             view:      'app/view',
             controller:'app/controller',
             logic:     'app/logic',
             collision: 'app/collision',

             loadjson:  'lib/require/json',
             text:      'lib/require/text',
             json:      '../json'
           }
});

requirejs
( ['loadjson!json/init.json', 'app/init'],
  function(initJSON, init)
  {
    init(window, initJSON);
  }
);