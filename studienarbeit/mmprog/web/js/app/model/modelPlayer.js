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

      this.reset(); // initializes further attributes

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
              },
        stop:
          function()
          { this.vx = 0;
            this.vy = 0;

            this.ax = 0;
            this.ay = 0;
          },

        start:
          function(p_direction)
          {
            // react only if the paddle is visible not already moving
            if (this.visible === true &&
              this.vx === 0 && this.vy === 0
            )
            {
              switch (p_direction)
              {
                case "left":
                  this.vx = -this.vx_start;
                  this.ax = -this.ax_start;
                  break;
                case "right":
                  this.vx =  this.vx_start;
                  this.ax =  this.ax_start;
                  break;

                case "up":
                  this.vy = -this.vy_start;
                  this.ay = -this.ay_start;
                  break;
                case "down":
                  this.vy =  this.vy_start;
                  this.ay =  this.ay_start;
                  break;
              }
            }
          }
      };

    return ModelPlayer;
  }
);

