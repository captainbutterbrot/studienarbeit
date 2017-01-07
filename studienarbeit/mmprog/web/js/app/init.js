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
          //l_context      = l_canvas.getContext("2d"),
          l_seconds      = 1 / p_init.game.fps,
          //l_milliseconds = 1000 * l_seconds,

          l_model_button = new ModelButton(p_init.model.buttonStartStop),
          l_view_button = new ViewButton(l_model_button, p_init.view.buttonStartStop, l_document),

          l_model_player   = new ModelPlayer(p_init.model.player),
          l_view_player    = new ViewPlayer(l_model_player, p_init.view.player, l_document),

          l_model_wall   = new ModelWall(p_init.model.wall),
          l_view_wall   = new ViewWall(l_model_wall, p_init.view.wall, l_document),

          l_model_walls       =  [],
          l_view_walls        = [],
          l_walls_nr    = p_init.model.wallsNr || 1,
          l_views             = [],
          l_models            = {};


          for (var j = 0; j < l_walls_nr; j++) {
            l_model_walls[j] = new ModelWall(p_init.model.wall);
            p_init.model.wall.pos.x += 30;
            p_init.model.wall.pos.y = 0;
          }
          for (var h = 0; h < l_walls_nr; h++)
          {
            l_view_walls[h] = new ViewWall(l_model_walls[h], p_init.view.wall, l_document);
          }


          for(var i = 3; i < 18; i++){
              var k = 0;
              l_views = [l_view_button, l_view_player, l_view_wall, l_view_walls[1], l_view_walls[2]];
              // l_views[i] = l_view_walls[k];
              //l_views.length = i;
              //Push
              k++;
          }
          for( var a = 0; a < l_walls_nr; a++){
            l_models       =  {
              stage:  l_canvas_init,
              button: l_model_button,
              player: l_model_player,
              wall: l_model_wall,
              walls: l_model_walls[a]
            };
          }

      l_canvas.width  = l_canvas_init.width;
      l_canvas.height = l_canvas_init.height;

      console.log('Hier!');

      new ViewLoop(p_window, l_canvas, l_views).start();
      //ViewLoop(p_window, l_canvas, l_view_walls);
      controlKeyboard(p_window, p_init.controller.player1, l_model_player);
      bomberman(p_init.game, l_models);
     // bomberman(p_init.game, l_model_walls);

/*      function draw()
      {
        l_context.clearRect(0, 0, l_canvas.width, l_canvas.height);

        for(var i = 0; i < l_walls_nr; i++){
          var l_view_wall = l_view_walls[i];
              l_model_wall = l_model_walls[i];
          l_model_wall.show(l_seconds);
          l_view_wall.draw(l_context);
        }
      }*/
      //p_window.setInterval(draw, l_milliseconds);

      console.log('Wuff');
    }


    return init;

  }

);