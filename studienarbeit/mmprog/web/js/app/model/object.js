console.log('Geladenes Modul:')
console.log('object.js')

define
( [],
  function()
  { "use strict";
    function Object(p_init)
    {
      this.width    = p_init.width;
      this.height   = p_init.height;

      this.x        = p_init.pos.x;
      this.y        = p_init.pos.y;


    }

    return null;
  }
);