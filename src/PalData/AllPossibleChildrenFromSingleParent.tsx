import React, { useEffect, useState } from 'react';
import { NamedCombinations, Pal } from '../../types';
import { findClosestPet } from '../data/combinations';
import DropDown from './DropDown';

type AllChildProps = {
    currentPals: Pal[];
}

function AllPossibleChildrenFromSingleParent({currentPals}: AllChildProps) {
    const [parent1, setParent1] = useState<Pal | null>(null);
    const [combinations, setCombinations] = useState<NamedCombinations[]>([]);

    const calculateAllPossibilities = () => {
        if (parent1) {
            let combos: NamedCombinations[] = [];
            currentPals.forEach((x) => {
                if (x.have) {
                    const avgPower = Math.floor((parent1.power + x.power) / 2);
                    const child = findClosestPet(currentPals, avgPower, parent1.name, x.name);
            
                    if (child) {
                        combos.push({
                            parent1,
                            parent2: x,
                            child
                        });
                    }
                }
            })
            
        }
    }

    useEffect(() => {
        if (parent1) {
            calculateAllPossibilities();
        }
        
    }, [parent1])


    return (
        <div>
            <DropDown currentPals={currentPals} returnFunc={setParent1} useHave={true}/>
        </div>
    );
}

export default AllPossibleChildrenFromSingleParent;