
function isTouching(box1, box2){
    if (box1.x - box2.x < box1.width / 2 + box2.width / 2 &&
      box2.x - box1.x < box1.width / 2 + box2.width / 2 &&
      box1.y - box2.y < box1.height / 2 + box2.height / 2 &&
      box2.y - box1.y < box1.height / 2 + box2.height / 2) {
      return true;
  
    }
    else {
      return false;
    }
  
  }
  
  function bounceOff(box3, box4){
    if (box3.x - box4.x < box3.width / 2 + box4.width / 2 &&
      box4.x - box3.x < box3.width / 2 + box4.width / 2){
        box3.velocityX= box3.velocityX*(-1);
        box4.velocityX= box4.velocityX*(-1);
      }
  
      if (box3.y - box4.y < box3.height / 2 + box4.height / 2 &&
        box4.y - box3.y < box3.height / 2 + box4.height / 2){
          box3.velocityY= box3.velocityY*(-1);
          box4.velocityY= box4.velocityY*(-1);
        }
  }