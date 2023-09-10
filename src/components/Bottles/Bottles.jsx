import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';

const Bottles = () => {
  const [bottles, setBottles] = useState([])
  useEffect(() => {
    try {
      const fetchData = async () => {
        const URL =`bottles.json`;
        const response = await fetch(URL);
        const bottlesData = await response.json();
        // console.log(bottlesData);
        setBottles(bottlesData)

      }
      fetchData();
      
    } catch (error) {
      console.log(error);
      
    }
  }, [])
  return (
    <div>
      <h3> Total Bottles: {bottles.length} Pcs.</h3>
      <div className='grid grid-cols-3 gap-4'>
      {
        bottles && bottles.map((bottle) => <Bottle 
        key={bottle.id}
        bottle={bottle}

        ></Bottle>)
      }
      </div>      
    </div>
  );
};

export default Bottles;