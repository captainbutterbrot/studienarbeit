console.log('Geladenes Modul:')
console.log('modelPlayer.js')

define
( [],
  function()
  { "use strict";

    function ModelPlayer(p_init)
    {
      this.width    = p_init.width;
      this.height   = p_init.height;

      this.x_start  = p_init.pos.x;
      this.y_start  = p_init.pos.y;

    }

    ModelPlayer.prototype =
      {
        reset: function ()
               {
                 this.stop(); // By default, the paddle does not move around.
                 //this.hide(); // By default, the paddle is invisible.

                 this.x = this.x_start;
                 this.y = this.y_start;
               },

        show: function ()
              {
                this.visible = true;
              }
      };

    return ModelPlayer;
  }
);

