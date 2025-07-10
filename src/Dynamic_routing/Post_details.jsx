import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostDetails() {
  const[data, setData]= useState({})
  const {id} = useParams()
  useEffect(()=>{
    axios.get(`https://683ffb195b39a8039a5658ce.mockapi.io/flight/${id}`)
    .then((response)=> setData(response.data))
  }, [data])
  return (
    <div>
            <div>
              <p>{data.from }</p>
               <p>{data.to }</p>
                <p>{data.time}</p>
                 <p>{data.price }</p>
                  <p>{data.seats }</p>
                   <p>{data.airline }</p>
            </div>
    </div>
  );
}

export default PostDetails;
