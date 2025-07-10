import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
function Posts() {
const[data, setData] =  useState([])
useEffect(()=> {
axios.get('https://683ffb195b39a8039a5658ce.mockapi.io/flight')
  .then(response=> setData(response.data))
}, [data])
  
  return(
    <div>
      {
        data.map((f)=> {
          return(
            <div style={{
              border: '1px solid black'
            }}>
              <p>{f.from }</p>
               <p>{f.to }</p>
                <p>{f.time}</p>
                 <p>{f.price }</p>
                  <p>{f.seats }</p>
                   <p>{f.airline }</p>
                   <Link to={`/posts/${f.id}`}>read more</Link>
            </div>
          )
        })
      }
    </div>
  );
}

export default Posts;
