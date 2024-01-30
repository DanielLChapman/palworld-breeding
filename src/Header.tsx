import React, { useState } from "react";
import { Pal } from "../types";
import Sidebar from "./Sidebar";

type HEADER_PROPS = {
    pals: Pal[];
    updatePals: (palArray: Pal[]) => void;
};

function Header({ pals, updatePals }: HEADER_PROPS) {
    const [openSideBar, setOpenSideBar] = useState(false);

    return (
        <div>
            <span onClick={() => {
                setOpenSideBar(true);
            }}>menu</span>
            {openSideBar && (
                <div>
                    <span
                        onClick={() => {
                            setOpenSideBar(false);
                        }}
                    >
                        X
                    </span>
                    <Sidebar pals={pals} updatePals={updatePals} />
                </div>
            )}
        </div>
    );
}

export default Header;
