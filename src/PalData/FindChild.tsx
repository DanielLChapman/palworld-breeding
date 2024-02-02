import React, { useEffect, useState } from 'react';
import { Pal} from '../../types';
import DropDown from './DropDown';
import { findClosestPet } from '../data/combinations';

type FindChildProps = {
    currentPals: Pal[];
}

function FindChild({ currentPals }: FindChildProps) {
    const [parent1, setParent1] = useState<Pal | null>(null);
    const [parent2, setParent2] = useState<Pal | null>(null);
    const [child, setChild] = useState<Pal | null>();

    useEffect(() => {
        if (parent1 && parent2) {
            // Execute some code when either parent1 or parent2 changes
            calculateChild();
        } else {
            setChild(null);
        }
    }, [parent1, parent2]);

    const calculateChild = () => {
        // Do something with parent1 and parent2
        if (parent1 && parent2) {
            const avgPower = Math.floor((parent1.power + parent2.power) / 2);
            const child = findClosestPet(currentPals, avgPower, parent1.name, parent2.name);

            if (child) {
                setChild(child);
            }
        }
    };

    return (
        <div>
            <DropDown currentPals={currentPals} returnFunc={setParent1} useHave={true} />
            <DropDown currentPals={currentPals} returnFunc={setParent2} useHave={true} />


            {
                child && (
                    <span>{child.name}</span>
                )
            }
        </div> 
    );
}

export default FindChild;
