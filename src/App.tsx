import React, { useEffect, useState } from 'react';
import LockSVG from './LockSVG';
import UnlockSVG from './UnlockSVG';
import './App.css';

interface Color {
  name: string;
  hex: string;
  id: string;
  theme?: string;
  group?: string;
}

interface Palette {
  colors: Color[];
}

function getRandomItems(arr: Color[], n: number): Color[] {
  let randomItems = [];
  let indices = new Set();

  while (randomItems.length < n) {
    let randomIndex = Math.floor(Math.random() * arr.length);

    if (!indices.has(randomIndex)) {
      indices.add(randomIndex);
      randomItems.push(arr[randomIndex]);
    }
  }

  return randomItems;
}

function App() {
  const [palette, setPalette] = useState<Palette>({ colors: [] });
  const [locked, setLocked] = useState(false);

  const fetchColors = () => {
    fetch('/colors.json')
      .then((response) => response.json())
      .then((palette) => setPalette(palette))
      .catch((error) => console.log('Error during fetching colors.json', error));
  };

  useEffect(() => {
    fetchColors();
  }, []);

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !locked) {
        fetchColors();
      }
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [locked]);
  useEffect(() => {
    const handleClick = (e: TouchEvent) => {
      if (e.touches.length === 1 && !locked) {
        fetchColors();
      }
    };
  
    window.addEventListener('touchstart', handleClick);
  
    return () => {
      window.removeEventListener('touchstart', handleClick);
    };
  }, [locked]);
  
  if (!palette || palette.colors.length === 0) {
    return <h1>Loading...</h1>;
  }

  const randomColors = getRandomItems(palette.colors, 4); // Get 4 random colors
  const handleLock = ()=>{
    setLocked((prevLock)=>!prevLock);

  }
  return (
    <>
      <ul>
        {randomColors.map((color) => (
          <li key={color.id} className='listItem' style={{ backgroundColor: `#${color.hex}` }}>
            {color.name}
            <p>{`#${color.hex}`}</p>
          </li>
        ))}
      </ul>
      <button className='button' onClick={handleLock}>{locked ? <UnlockSVG /> : <LockSVG />}</button>
    </>
  );
}

export default App;
