import React from 'react';
import { useState } from 'react';
function UseForm(email, password) {
  if(!email.includes("@")){
    return 'Емайл дұрыс емес'
  }else if(password.length<6){
  return 'Құпиясөз 6таңбадан кем болмауы керек'
  }else{
   return 'Сіз сәтті тіркелдіңіз'
  }
}

export default UseForm;
