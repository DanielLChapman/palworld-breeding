import React from 'react';
import { Pal } from '../types';
import Sidebar from './Sidebar';

type HEADER_PROPS = {
    pals: Pal[],
    updatePals: (palArray: Pal[]) => void;
}

function Header({ pals, updatePals }: HEADER_PROPS) {
    return (
        <div>
            <Sidebar pals={pals} updatePals={updatePals} />
        </div>
    );
}

export default Header;