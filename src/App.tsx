import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import palsData from './data/pets.json';
import tieBreaksData from './data/tiebreak.json';
import { Combinations, Pal } from '../types';
import { calculateCombinations } from './data/combinations';
import FindChild from './PalData/FindChild';
import AllPossibleChildrenFromSingleParent from './PalData/AllPossibleChildrenFromSingleParent';
import FindParentOptions from './PalData/FindParentOptions';
import { precalculatedCombinations } from './data/combinationData';

const combineData = (): Pal[] => {
  return palsData.map((pal, i) => {
      const tieBreak = tieBreaksData.find(tb => tb.name === pal.name);
      return { ...pal, id: i, palNumber:pal.id, tieBreak: tieBreak?.tieBreak || 1000, have: true };
  });
};

function App() {
  const [pals, setPals] = useState<Pal[]>([]);
  const [combinations, setCombinations] = useState<Combinations[]>(precalculatedCombinations);

  useEffect(() => {
    let p = combineData();
    setPals(p);
  }, []);

  const updatePals = (palArray: Pal[]) => {
    const cn = calculateCombinations(palArray, true);
    setCombinations(cn);
    console.log(cn);
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
          <AllPossibleChildrenFromSingleParent currentPals={pals} />
        </h3>

        <h3 className="">
          All Potential Combinations to make child
          <FindParentOptions currentPals={pals} combinations={combinations} />
        </h3>

        <h3 className="">
          Search for Target path to child with specific parent
        </h3>

        

        
      <Footer />
    </div>
  );
}

export default App;
