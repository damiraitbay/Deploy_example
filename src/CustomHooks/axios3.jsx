import React, { useState } from 'react';
import axios from 'axios'
import UseFetch from './UseFetch';
import UseAlert from './UseAlert'
function Axios3() {
  const{data} = UseAlert()
  return (
    <div>
      <button onClick={()=> data}></button>
    </div>
  );
}

export default Axios3;
