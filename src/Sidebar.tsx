import React, { useEffect, useState } from 'react';
import { Pal } from '../types';

type PalTableProps = {
    pals: Pal[];
    updatePals: (palArray: Pal[]) => void;
};


function Sidebar({pals, updatePals}: PalTableProps) {

    const [currentPals, setCurrentPals] = useState([...pals]);

    useEffect(() => {
        if (!pals) return;
        // Sort pals by palNumber, and then by name length in case of a tie
        const sortedPals = [...pals].sort((a:Pal, b:Pal) => {
            if (a.palNumber === b.palNumber) {
                return a.name.length - b.name.length; // Shorter name first if palNumber is the same
            }
            return a.palNumber - b.palNumber; // Sort by palNumber
        });

        setCurrentPals(sortedPals);
    }, [pals]);

    const onHaveChange = (id: number, have: boolean) => {
        const updatedPals = currentPals.map(pal => 
            pal.id === id ? { ...pal, have } : pal
        );
        setCurrentPals(updatedPals);
    }

    const onSave = () => {
        console.log(currentPals)
        updatePals(currentPals);
    }
    
    return (
        <div>
            <button onClick={onSave}>Save</button>
            <table>
            <thead>
                <tr>
                    <th>Have</th>
                    <th>Name</th>
                    {/* Other headers */}
                </tr>
            </thead>
            <tbody>
                {currentPals.map(pal => (
                    <tr key={pal.id}>
                        <td>
                            <input
                                type="checkbox"
                                checked={pal.have}
                                onChange={(e) => onHaveChange(pal.id, e.target.checked)}
                            />
                        </td>
                        <td>{pal.name}</td>
                        {/* Other data cells */}
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}

export default Sidebar;