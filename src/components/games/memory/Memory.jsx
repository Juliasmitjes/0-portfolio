import { useState, useEffect } from "react";
import Card from './Card.jsx';
import avocado from '../../../images/memory/avocado.png';
import bee from '../../../images/memory/bee.png';
import coffee from '../../../images/memory/coffee.png';
import game from '../../../images/memory/game.png';
import guitar from '../../../images/memory/guitar.png';
import kareoke from '../../../images/memory/kareoke.png';
import pizza from '../../../images/memory/pizza.png';
import present from '../../../images/memory/present.png';

function Memory(){

  const [items, setItems] = useState([
    {id: 1, img: avocado, stat: ""},
    {id: 1, img: avocado, stat: ""},
    {id: 2, img: bee, stat: ""},
    {id: 2, img: bee, stat: ""},
    {id: 3, img: coffee, stat: ""},
    {id: 3, img: coffee, stat: ""},
    {id: 4, img: game, stat: ""},
    {id: 4, img: game, stat: ""},
    {id: 5, img: guitar, stat: ""},
    {id: 5, img: guitar, stat: ""},
    {id: 6, img: kareoke, stat: ""},
    {id: 6, img: kareoke, stat: ""},
    {id: 7, img: pizza, stat: ""},
    {id: 7, img: pizza, stat: ""},
    {id: 8, img: present, stat: ""},
    {id: 8, img: present, stat: ""},
  ].sort(() => Math.random() - 0.5));

  const [prev, setPrev] = useState(-1);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
  const revealedItems = items.map(item => ({ ...item, stat: "active" }));
  setItems(revealedItems);

  const timeout = setTimeout(() => {
    const hiddenItems = revealedItems.map(item => ({ ...item, stat: "" }));
    setItems(hiddenItems);
      }, 2000);

      return () => clearTimeout(timeout);
    }, []);


function check(current) {
  const newItems = [...items];

  if (newItems[current].id === newItems[prev].id) {
    newItems[current] = { ...newItems[current], stat: "correct" };
    newItems[prev] = { ...newItems[prev], stat: "correct" };
    setItems(newItems);
    setPrev(-1);
    setDisabled(false);
  } else {
    newItems[current] = { ...newItems[current], stat: "wrong" };
    newItems[prev] = { ...newItems[prev], stat: "wrong" };
    setItems(newItems);

    setTimeout(() => {
      setItems(prevItems => {
        const updatedItems = [...prevItems];
        updatedItems[current] = { ...updatedItems[current], stat: "" };
        updatedItems[prev] = { ...updatedItems[prev], stat: "" };
        return updatedItems;
      });
      setPrev(-1);
      setDisabled(false);
    }, 1000); // 
  }
}

function handleClick(id) {
  if (disabled) return;
  if (items[id].stat === "correct" || items[id].stat === "wrong") return; 

  const newItems = [...items];
  newItems[id] = { ...newItems[id], stat: "active" };
  setItems(newItems);

  if (prev === -1) {
    setPrev(id);
  } else {
    setDisabled(true); 
    setTimeout(() => {
      check(id);
    }, 500);
  }
}

  return (<div className="bg-myDark">
    <div className="justify-items-center bg-myWarm py-10 mx-6">
      <p className="text-4xl font-myHeader text-myBlue pb-8">Memory</p>
      <div className="grid grid-cols-4 grid-rows-4 h-100 w-100 gap-2 items-center">   
        {items.map((item, index) => (
        <Card 
        key={index} 
        item={item} 
        id={index} 
        handleClick={handleClick}
        />
      ))}
      </div>
   </div>
</div>
)}

export default Memory;