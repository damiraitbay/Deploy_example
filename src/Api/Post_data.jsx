import axios from 'axios';
import React, { useState } from 'react';

function PostData() {

const[res, setRes] = useState('')
const[name, setName] =  useState('')
function send_data(){
  axios.post('https://683ffb195b39a8039a5658ce.mockapi.io/orders', {
    name:  name, 
  })
  .then(res => {
    setRes('Тапсырыс қабылданды', res.data.order)
  })
}

  return (
    <div>
    </div>
  );
}

export default PostData;
