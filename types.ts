// Define interfaces for your data
export interface Pal {
    id: number;
    name: string;
    power: number;
    tieBreak: number; 
    have: boolean;
    palNumber: number;
}

export interface TieBreak {
    id: number;
    name: string;
    tieBreak: number;
}

export interface Combinations {
    parent1_power: number;
    parent2_power: number;
    child_power: number;
}

export interface ParentPairs {
    parent1: Pal;
    parent2: Pal;
}