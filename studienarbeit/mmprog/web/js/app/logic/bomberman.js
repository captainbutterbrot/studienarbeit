console.log('Geladenes Modul:')
console.log('bomberman.js')

define
(['../model/modelBomb', '../model/stage', '../model/modelPlayer', '../controller/controlKeyboard',
    '../model/modelWall', '../model/modelButton','../collision/collision', '../model/loop'
  ],
  function(modelBomb, stage, modelPlayer,  controlKeyboard, modelwall,
           modelStart, collision, ModelLoop
  )
  {
    "use strict";
    function bomberman(p_init, p_models)
    {
      var l_model_wall          = p_models.wall,
          l_button         = p_models.button,
          l_player         = p_models.player,
          l_models_movable = [],
          l_model_loop     = new ModelLoop(f_collision, p_init.fps, l_models_movable);

      // Store all model objects that have a move method within the array l_models_movable.
      for (var k in p_models)
      { //noinspection JSUnfilteredForInLoop
        if (p_models[k].move != null)
        { //noinspection JSUnfilteredForInLoop
          l_models_movable.push(p_models[k]);
        }
      }

      // Stop the game and display a welcome message.
      f_stop();

      function f_stop()
      {
        l_player.stop();
        l_model_loop.stop();
        l_button.label   = p_init.startGame;
        l_button.onClick = f_start;
        console.log("stop active");
      }

      function f_start()
      {
        l_player.show();
        l_model_loop.start();
        l_button.onClick = f_stop;
        console.log("start active");
      }

      function f_collision()
      {
        collision(l_player,l_model_wall );

      }
    }
      return bomberman;
  });