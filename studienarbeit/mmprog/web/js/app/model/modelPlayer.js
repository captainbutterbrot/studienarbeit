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
      show:
        function()
        {this.visible = true;}


    }


    return ModelPlayer;
  }
);

