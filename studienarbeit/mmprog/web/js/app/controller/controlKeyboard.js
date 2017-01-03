console.log('Geladenes Modul:')
console.log('controlKeyboard.js')

define
([],
  function()
  {"use strict";

    /**
     * @param p_window   The window which is controlled by the keyboard.
     * @param p_init     The initialization data.
     * @param p_player   The model of the paddle to be controlled.
     */
    function controlKeyboard(p_window, p_init, p_player)
    {
      var l_key_left      = p_init.left.key,
          l_keycode_left  = p_init.left.keyCode,

          l_key_right     = p_init.right.key,
          l_keycode_right = p_init.right.keyCode;

      function start_player_moving(p_event)
      {
        if (p_event.key === l_key_left || p_event.keyCode === l_keycode_left)
          p_player.start("left");
        else if (p_event.key === l_key_right || p_event.keyCode === l_keycode_right)
          p_player.start("right");
      }

      function stop_player_moving(p_event)
      {
        // If a key is released that controls the movement of
        // the paddle, stop the movement of the paddle.
        if (p_event.key === l_key_left  || p_event.keyCode === l_keycode_left ||
          p_event.key === l_key_right || p_event.keyCode === l_keycode_right
        )
          p_player.stop();
      }

      p_window.addEventListener("keydown", start_player_moving);
      p_window.addEventListener("keyup",   stop_player_moving);
    }

    return controlKeyboard;
  });