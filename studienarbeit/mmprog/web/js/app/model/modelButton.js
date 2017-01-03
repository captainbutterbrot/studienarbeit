console.log('Geladenes Modul:')
console.log('modelButton.js')

define
( [],
  function()
  { "use strict";
    function ModelButton(p_init)
    {
      this.id       = p_init.id;
      this.label    = p_init.label || null;
      this.class    = p_init.class || null;
      this.onClick  = p_init.onClick || null;
    }

    return ModelButton;
  }
);