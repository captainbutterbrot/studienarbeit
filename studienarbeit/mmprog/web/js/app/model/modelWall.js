console.log('Geladenes Modul:')
console.log('modelwall.js')

define
( [],
  function()
  { "use strict";

    function ModelWall(p_init)
    {
      this.width    = p_init.width;
      this.height   = p_init.height;

      this.x_start  = p_init.pos.x;
      this.y_start  = p_init.pos.y;


      this.reset(); // initializes further attributes

    }

    ModelWall.prototype =
    {
      reset: function ()
             {

               this.x = this.x_start;
               this.y = this.y_start;

             },

      show: function ()
            {
              this.visible = true;
            }

    };

    return ModelWall;
  }
);
