import React, { useEffect, useState } from 'react';
import CopyImg from './icons8-copy-24.png';
import './App.css';
import CheckedImg from './checked.png';

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
      if (e.code === 'Space') {
        fetchColors(); // Simulate refresh by fetching the data again
      }
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []); // Empty array means this effect runs only once after initial render

  if (!palette || palette.colors.length === 0) {
    return <h1>Loading...</h1>;
  }

  const randomColors = getRandomItems(palette.colors, 4); // Get 4 random colors

  return (
    <>
      <ul>
        {randomColors.map((color) => (
          <li key={color.id} className='listItem' style={{ backgroundColor: `#${color.hex}` }}>
            {color.name}
            <p>{`#${color.hex}`}</p>
            <img
              src={CopyImg}
              alt='copy'
              onClick={() => {
                navigator.clipboard.writeText(`#${color.hex}`);
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
