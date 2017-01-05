console.log('Geladenes Modul:')
console.log('collision.js')

define
( [],
  function()
  {
    "use strict";

    /**
     * A paddle can collide with the „walls“ of the stage.
     * In such a case, the movement of the paddle is stopped.
     *
     * @param p_stage   A object containing the width and height of the stage
     * @param p_player  {ModelPaddle}.
     */
    function collision(p_stage, p_player)
    {
      // If the paddle collides with the left wall of the stage,
      // stop it and move it back to the stage.
      if (p_player.vx < 0 && p_player.left <= 30)
      {
        p_player.stop();
        p_player.x = 30;
      }

      // If the paddle collides with the right wall of the stage,
      // stop it and move it back to the stage.
      if (p_player.vx > 0 && p_player.right >= p_stage.width-30)
      {
        p_player.stop();
        p_player.x = p_stage.width - p_player.width - 30;
      }

      // If the paddle collides with the top wall of the stage,
      // stop it and move it back to the stage.
      if (p_player.vy < 0 && p_player.top <= 30)
      {
        p_player.stop();
        p_player.y = 30;
      }

      // If the paddle collides with the bottom wall of the stage,
      // stop it and move it back onto the stage.
      if (p_player.vy > 0 && p_player.bottom >= p_stage.height-30)
      {
        p_player.stop();
        p_player.y = p_stage.height - p_player.height - 30;
      }
    }

    return collision;
  }
);