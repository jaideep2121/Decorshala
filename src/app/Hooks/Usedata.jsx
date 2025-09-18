import React, { useState } from 'react'

const Usedata = () => {
      const [data, setData] = useState(null);
    
      async function fetchdata() {
        const res = await fetch("https://api.nationalize.io?name=nathaniel");
        const value = await res.json();
        setData(value);
      }

      return {data,fetchdata};
 
    }   

export default Usedata;