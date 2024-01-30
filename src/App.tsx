import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import palsData from './data/pets.json';
import tieBreaksData from './data/tiebreak.json';
import { Combinations, Pal } from '../types';
import { calculateCombinations } from './data/combinations';
import FindChild from './PalData/FindChild';

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

  }, []);

  const updatePals = (palArray: Pal[]) => {
    const cn = calculateCombinations(palArray);
    setCombinations(cn);
    setPals(palArray);

  }

  return (
    <div className="App">
      <Header pals={pals}  updatePals={updatePals}/>


        <h3 className="">
          Find Child From Parents
          <FindChild currentPals={pals} />
        </h3>

        <h3 className="">
          All Potential Possibilities with a Parent
        </h3>

        <h3 className="">
          All Potential Combinations to make child
        </h3>

        <h3 className="">
          Search for Target path to child with specific parent
        </h3>

        

        
      <Footer />
    </div>
  );
}

export default App;
