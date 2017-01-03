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
    'view/viewButton', 'model/modelButton'
  ],
  function(bomberman,
           ViewBomb, ModelBomb,
           stage,
           ModelPlayer, ViewPlayer,
           controlKeyboard,
           Modelwall, ViewWall,
           ViewLoop, ModelLoop,
           ViewButton, ModelButton
  )
  {

    function init(p_window, p_init)
    {
      var l_canvas_init  = p_init.canvas,
          l_document     = p_window.document,
          l_canvas       = l_document.getElementById(l_canvas_init.element),

          l_model_button = new ModelButton(p_init.model.buttonStartStop),
          l_view_button = new ViewButton(l_model_button, p_init.view.buttonStartStop, l_document),

          l_model_player   = new ModelPlayer(p_init.model.player),
          l_view_player    = new ViewPlayer(l_model_player, p_init.view.player, l_document),

          l_models       =  { stage:  l_canvas_init,
                              button: l_model_button,
                              player: l_model_player
                            },

          l_views        = [l_view_button, l_view_player];

      l_canvas.width  = l_canvas_init.width;
      l_canvas.height = l_canvas_init.height;

      console.log('Hier!');

      new ViewLoop(p_window, l_canvas, l_views).start();
      controlKeyboard(p_window, p_init.controller.player1, l_model_player);
      bomberman(p_init.game, l_models);

      console.log('Wuff');
    }


    return init;

  }

);