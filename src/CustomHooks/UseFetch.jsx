import React, { useState } from 'react';
import axios from 'axios';
function UseFetch(api) {
  const[data, setData] =  useState([])
axios.get(api)
.then((response)=> setData(response.data))
return {data}
}

export default UseFetch;
