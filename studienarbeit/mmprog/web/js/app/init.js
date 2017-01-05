console.log('Geladenes Modul:')
console.log('init.js')

define
(['logic/bomberman',
    'view/viewBomb', 'model/modelBomb',
    'model/stage',
    'model/modelPlayer', 'view/viewPlayer',
    'controller/controlKeyboard',
    'model/modelWall', 'view/viewWall',
    'view/loop', 'model/loop',
    'view/viewButton', 'model/modelButton',
    'model/object'
  ],
  function(bomberman,
           ViewBomb, ModelBomb,
           stage,
           ModelPlayer, ViewPlayer,
           controlKeyboard,
           ModelWall, ViewWall,
           ViewLoop, ModelLoop,
           ViewButton, ModelButton,
           object
  )
  {

    function init(p_window, p_init)
    {
      console.log('init.js function init()');
      var l_canvas_init  = p_init.canvas,
          l_document     = p_window.document,
          l_canvas       = l_document.getElementById(l_canvas_init.element),
          l_context      = l_canvas.getContext("2d"),

          l_model_button = new ModelButton(p_init.model.buttonStartStop),
          l_view_button = new ViewButton(l_model_button, p_init.view.buttonStartStop, l_document),

          l_model_player   = new ModelPlayer(p_init.model.player),
          l_view_player    = new ViewPlayer(l_model_player, p_init.view.player, l_document),

          l_model_wall   = new ModelWall(p_init.model.wall),
          l_view_wall   = new ViewWall(l_model_wall, p_init.view.wall, l_document),

          l_walls       =  [],
          l_walls_nr    = p_init.model.wallsNr || 1,

          l_models       =  { stage:  l_canvas_init,
                              button: l_model_button,
                              player: l_model_player,
                              wall: l_model_wall
                            },

          l_views        = [l_view_button, l_view_player, l_view_wall];

          for (var i = 0; i < l_walls_nr; i++) {
            l_walls[i] = new ModelWall(p_init.model.wall);
            l_walls[i] = new ViewWall(l_model_wall, p_init.view.wall, l_document);
            p_init.model.wall.pos.x += 30;
            p_init.model.wall.pos.y = 0;
          }

      l_canvas.width  = l_canvas_init.width;
      l_canvas.height = l_canvas_init.height;

      console.log('Hier!');

      new ViewLoop(p_window, l_canvas, l_views).start();
      controlKeyboard(p_window, p_init.controller.player1, l_model_player);
      bomberman(p_init.game, l_models);

/*      function walldraw()
      {
        l_context.clearRect(0, 0, p_canvas.width, p_canvas.height);

        for(var i = 0; i < l_walls_nr; i++){
          var l_wall = l_walls[i];
          l_wall.walldraw(l_context);
        }
      }*/

      console.log('Wuff');
    }


    return init;

  }

);