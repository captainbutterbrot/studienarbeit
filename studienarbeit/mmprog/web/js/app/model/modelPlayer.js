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

      this.vx_start  = p_init.vel.x;
      this.vy_start  = p_init.vel.y;

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
          {
            this.vx = 0;
            this.vy = 0;
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
                  this.x = -this.x_start;
                  this.vx = -this.vx_start;
                  break;
                case "right":
                  this.x =  this.x_start;
                  this.vx =  this.vx_start;
                  break;

                case "up":
                  this.y = -this.y_start;
                  this.vy = -this.vy_start;
                  break;
                case "down":
                  this.y =  this.y_start;
                  this.vy =  this.vy_start;
                  break;
              }
            }
          },
        move:
          function(p_seconds)
          {
            this.vx  += this.vx * p_seconds;
            this.vy  += this.vy * p_seconds;
          },

        /** The left side of the paddle (read only). */
        get left()   { return this.x; },

        /** The right side of the paddle (read only). */
        get right()  { return this.x + this.width; },

        /** The top side of the paddle (read only). */
        get top()    { return this.y; },

        /** The bottom side of the paddle (read only). */
        get bottom() { return this.y + this.height; }
      };

    return ModelPlayer;
  }
);

