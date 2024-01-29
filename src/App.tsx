import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import palsData from './data/pets.json';
import tieBreaksData from './data/tiebreak.json';
import { Combinations, Pal } from '../types';
import { calculateCombinations } from './data/combinations';

const combineData = (): Pal[] => {
  return palsData.map((pal, i) => {
      const tieBreak = tieBreaksData.find(tb => tb.name === pal.name);
      return { ...pal, id: i, palNumber:pal.id, tieBreak: tieBreak?.tieBreak || 1000, have: true };
  });
};

function App() {
  const [pals, setPals] = useState<Pal[]>([]);
  const [combinations, setCombinations] = useState<Combinations[]>();

  useEffect(() => {
    let p = combineData();
    
    const cn = calculateCombinations(p);
    setPals(p);
    setCombinations(cn);
    console.log(cn);
  }, []);

  const updatePals = (palArray: Pal[]) => {
    const cn = calculateCombinations(palArray);
    console.log(cn);

  }

  console.log(pals)

  return (
    <div className="App">
      <Header pals={pals}  updatePals={updatePals}/>
      {/* Render your pals data here */}
      <Footer />
    </div>
  );
}

export default App;
