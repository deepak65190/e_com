import React, { useState, useEffect } from 'react';
import { useCard } from './context/Card';

const Navbar = () => {
  const [cardData] = useCard();
  const [productNum, setProductNum] = useState(0);

  useEffect(() => {
    setProductNum(cardData.length);
  }, [cardData]);

  console.log(cardData, "hii");

  return (
    <div>
      Navbar
      <h2>{productNum}</h2>
    </div>
  );
};

export default Navbar;
