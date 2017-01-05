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
     * @param p_object2   A object containing the width and height of the stage
     * @param p_object1  {ModelPaddle}.
     */
    function collision(p_object1, p_object2)
    {


      // Object 1 collides with left side of object 2
      if (p_object1.vx < 0 && p_object1.x+p_object1.width>=p_object2.x //&&
          //p_object1.y<=p_object2.y+p_object2.height && p_object1.y+p_object1.height >= p_object2.y
          )
      {
        p_object1.stop();
        p_object1.x = p_object2.x-p_object1.width;
        console.log('collide 1 with left2')

      }

      // Object 1 collides with right side of object 2
      if (p_object1.vx > 0 && p_object1.x <= p_object2.x+p_object2.width// && p_object1.x+p_object1.width
      )
      {
        p_object1.stop();
        p_object1.x = p_object2.x + p_object2.width;
      }

      // Object 1 collides with bottom of object 2

      if (p_object1.vy < 0 && p_object1.y <= p_object2.y+p_object2.height)
      {
        p_object1.stop();
        p_object1.y = p_object2.y+p_object2.height;
      }

      // Object 1 collides with top of object 2
      if (p_object1.vy > 0 && p_object1.y+p_object1.height >= p_object2.y)
      {
        p_object1.stop();
        p_object1.y = p_object2.x - p_object1.height;
      }
    }

    //Kommentar

    return collision;
  }
);