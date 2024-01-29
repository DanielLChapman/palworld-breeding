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
    parent1: number;
    parent2: number;
    child: number;
}