import React, { useState } from "react";
import { Pal } from "../../types";

type DropDownProps = {
    currentPals: Pal[];
    returnFunc: (selectedPal: Pal) => void;
};

function DropDown({ currentPals, returnFunc }: DropDownProps) {

    const handleSelectionChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const selectedId = parseInt(event.target.value, 10);
        const selectedPal = currentPals.find((pal) => pal.id === selectedId);
        if (selectedPal) {
            returnFunc(selectedPal);
        }
    };

    return (
        <div>
            <select onChange={handleSelectionChange}>
                <option value="-1">-</option>
                {currentPals.map((pal) => {
                    if (pal.have) {
                        return (
                            <option key={pal.id} value={pal.id}>
                                {pal.name}
                            </option>
                        );
                    }
                })}
            </select>
        </div>
    );
}

export default DropDown;
