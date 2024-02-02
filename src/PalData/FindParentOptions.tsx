import React, { useEffect, useState } from 'react';
import { Combinations, NamedCombinations, Pal } from '../../types';
import DropDown from './DropDown';
import { findParentOptions } from '../data/combinations';
import { precalculatedCombinations } from '../data/combinationData';


type FindParentsProps = {
    currentPals: Pal[];
    combinations: Combinations[] | undefined;
}

function FindParentOptions({currentPals, combinations}: FindParentsProps) {

    const [child, setChild] = useState<Pal | null>();
    const [usedAll, setUsedAll] = useState(false);
    const [combos, setCombos] = useState<{parent1: Pal, parent2: Pal}[] | null>();

    useEffect(() => {
        if (child && combinations !== undefined) {
            let options = findParentOptions(child, currentPals, combinations);
            if (options.length === 0) {
                options = findParentOptions(child, currentPals, precalculatedCombinations);
                setUsedAll(true);
                
            }
            setCombos(options);
        }
    }, [child])

    console.log(combos);

    return (
        <div>
            <DropDown currentPals={currentPals} returnFunc={setChild} useHave={false}/>
        </div>
    );
}

export default FindParentOptions;