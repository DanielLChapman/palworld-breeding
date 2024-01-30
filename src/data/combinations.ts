import { Combinations, Pal } from "../../types";

type SpecialCombination = {
    parent1Name: string;
    parent2Name: string;
    resultName: string;
};

const specialCombinations: SpecialCombination[] = [
    { parent1Name: "Relaxaurus", parent2Name: "Sparkit", resultName: "Relaxaurus Lux" },
    { parent1Name: "Arsox", parent2Name: "Broncherry", resultName: "Kitsun" },
    { parent1Name: "Direhowl", parent2Name: "Gumoss", resultName: "Maraith" },
    { parent1Name: "Jormuntide", parent2Name: "Shadowbeak", resultName: "Helzephyr" },
    { parent1Name: "Helzephyr", parent2Name: "Shadowbeak", resultName: "Cryolinx" },
    { parent1Name: "Suzaku", parent2Name: "Relaxaurus", resultName: "Astegon" },
    { parent1Name: "Penking", parent2Name: "Bushi", resultName: "Anubis" },
    { parent1Name: "Incineram", parent2Name: "Maraith", resultName: "Incineram Noct" },
    { parent1Name: "Mau", parent2Name: "Pengullet", resultName: "Mau Cryst" },
    { parent1Name: "Vanwyrm", parent2Name: "Foxcicle", resultName: "Vanwyrm Cryst" },
    { parent1Name: "Eikthyrdeer", parent2Name: "Hangyu", resultName: "Eikthyrdeer Terra" },
    { parent1Name: "Elphidran", parent2Name: "Surfent", resultName: "Elphidran Aqua" },
    { parent1Name: "Pyrin", parent2Name: "Katress", resultName: "Pyrin Noct" },
    { parent1Name: "Mammorest", parent2Name: "Wumpo", resultName: "Mammorest Cryst" },
    { parent1Name: "Mossanda", parent2Name: "Grizzbolt", resultName: "Mossanda Lux" },
    { parent1Name: "Dinossom", parent2Name: "Rayhound", resultName: "Dinossom Lux" },
    { parent1Name: "Jolthog", parent2Name: "Pengullet", resultName: "Jolthog Cryst" },
    { parent1Name: "Frostallion", parent2Name: "Helzephyr", resultName: "Frostallion Noct" },
    { parent1Name: "Kingpaca", parent2Name: "Reindrix", resultName: "Ice Kingpaca" },
    { parent1Name: "Lyleen", parent2Name: "Menasting", resultName: "Lyleen Noct" },
    { parent1Name: "Leezpunk", parent2Name: "Flambelle", resultName: "Leezpunk Ignis" },
    { parent1Name: "Blazehowl", parent2Name: "Felbat", resultName: "Blazehowl Noct" },
    { parent1Name: "Robinquill", parent2Name: "Fuddler", resultName: "Robinquill Terra" },
    { parent1Name: "Broncherry", parent2Name: "Fuack", resultName: "Broncherry Aqua" },
    { parent1Name: "Surfent", parent2Name: "Dumud", resultName: "Surfent Terra" },
    { parent1Name: "Gobfin", parent2Name: "Rooby", resultName: "Gobfin Ignis" },
    { parent1Name: "Suzaku", parent2Name: "Jormuntide", resultName: "Suzaku Aqua" },
    { parent1Name: "Reptyro", parent2Name: "Foxcicle", resultName: "Ice Reptyro" },
    { parent1Name: "Hangyu", parent2Name: "Swee", resultName: "Hangyu Cryst" },
    { parent1Name: "Mossanda", parent2Name: "Petallia", resultName: "Lyleen" },
    { parent1Name: "Vanwyrm", parent2Name: "Anubis", resultName: "Faleris" },
    { parent1Name: "Mossanda", parent2Name: "Rayhound", resultName: "Grizzbolt" },
    { parent1Name: "Grizzbolt", parent2Name: "Relaxaurus", resultName: "Orserk" },
    { parent1Name: "Kitsun", parent2Name: "Astegon", resultName: "Shadowbeak" },
    { parent1Name: "Bushi", parent2Name: "Arsox", resultName: "Blazehowl" },
    // Special cases where two parents of the same species are required
    { parent1Name: "Frostallion", parent2Name: "Frostallion", resultName: "Frostallion" },
    { parent1Name: "Jetragon", parent2Name: "Jetragon", resultName: "Jetragon" },
    { parent1Name: "Paladius", parent2Name: "Paladius", resultName: "Paladius" },
    { parent1Name: "Necromus", parent2Name: "Necromus", resultName: "Necromus" },
    { parent1Name: "Jormuntide Ignis", parent2Name: "Jormuntide Ignis", resultName: "Jormuntide Ignis" },
];

const specialChildCombinations: SpecialCombination[] = [
    { parent1Name: "Relaxaurus", parent2Name: "Sparkit", resultName: "Relaxaurus Lux" },
    { parent1Name: "Incineram", parent2Name: "Maraith", resultName: "Incineram Noct" },
    { parent1Name: "Mau", parent2Name: "Pengullet", resultName: "Mau Cryst" },
    { parent1Name: "Vanwyrm", parent2Name: "Foxcicle", resultName: "Vanwyrm Cryst" },
    { parent1Name: "Eikthyrdeer", parent2Name: "Hangyu", resultName: "Eikthyrdeer Terra" },
    { parent1Name: "Elphidran", parent2Name: "Surfent", resultName: "Elphidran Aqua" },
    { parent1Name: "Pyrin", parent2Name: "Katress", resultName: "Pyrin Noct" },
    { parent1Name: "Mammorest", parent2Name: "Wumpo", resultName: "Mammorest Cryst" },
    { parent1Name: "Mossanda", parent2Name: "Grizzbolt", resultName: "Mossanda Lux" },
    { parent1Name: "Dinossom", parent2Name: "Rayhound", resultName: "Dinossom Lux" },
    { parent1Name: "Jolthog", parent2Name: "Pengullet", resultName: "Jolthog Cryst" },
    { parent1Name: "Frostallion", parent2Name: "Helzephyr", resultName: "Frostallion Noct" },
    { parent1Name: "Kingpaca", parent2Name: "Reindrix", resultName: "Kingpaca Cryst" },
    { parent1Name: "Lyleen", parent2Name: "Menasting", resultName: "Lyleen Noct" },
    { parent1Name: "Leezpunk", parent2Name: "Flambelle", resultName: "Leezpunk Ignis" },
    { parent1Name: "Blazehowl", parent2Name: "Felbat", resultName: "Blazehowl Noct" },
    { parent1Name: "Robinquill", parent2Name: "Fuddler", resultName: "Robinquill Terra" },
    { parent1Name: "Broncherry", parent2Name: "Fuack", resultName: "Broncherry Aqua" },
    { parent1Name: "Surfent", parent2Name: "Dumud", resultName: "Surfent Terra" },
    { parent1Name: "Gobfin", parent2Name: "Rooby", resultName: "Gobfin Ignis" },
    { parent1Name: "Suzaku", parent2Name: "Jormuntide", resultName: "Suzaku Aqua" },
    { parent1Name: "Reptyro", parent2Name: "Foxcicle", resultName: "Reptyro Cryst" },
    { parent1Name: "Hangyu", parent2Name: "Swee", resultName: "Hangyu Cryst" },
    { parent1Name: "Mossanda", parent2Name: "Petallia", resultName: "Lyleen" },
    { parent1Name: "Vanwyrm", parent2Name: "Anubis", resultName: "Faleris" },
    { parent1Name: "Mossanda", parent2Name: "Rayhound", resultName: "Grizzbolt" },
    { parent1Name: "Grizzbolt", parent2Name: "Relaxaurus", resultName: "Orserk" },
    { parent1Name: "Kitsun", parent2Name: "Astegon", resultName: "Shadowbeak" },
    // Special cases where two parents of the same species are required
    { parent1Name: "Frostallion", parent2Name: "Frostallion", resultName: "Frostallion" },
    { parent1Name: "Jetragon", parent2Name: "Jetragon", resultName: "Jetragon" },
    { parent1Name: "Paladius", parent2Name: "Paladius", resultName: "Paladius" },
    { parent1Name: "Necromus", parent2Name: "Necromus", resultName: "Necromus" },
    { parent1Name: "Jormuntide Ignis", parent2Name: "Jormuntide Ignis", resultName: "Jormuntide Ignis" },
]


const specialResultPets = new Set(specialChildCombinations.map(comb => comb.resultName));


export function findClosestPet(pets: Pal[], targetPower: number, parent1Name?: string, parent2Name?: string): Pal | null {
    let closestPet: Pal | null = null;
    let minDiff = Infinity;
    let minTieBreak = Infinity;

    pets.forEach(pet => {
        // Skip special result pets unless the parents are the specific parents for that result
        if (specialResultPets.has(pet.name)) {
            const isSpecialCombination = specialCombinations.some(comb => 
                comb.resultName === pet.name && 
                ((comb.parent1Name === parent1Name && comb.parent2Name === parent2Name) ||
                 (comb.parent1Name === parent2Name && comb.parent2Name === parent1Name))
            );
            if (!isSpecialCombination) return;
        }

        const diff = Math.abs(pet.power - targetPower);
        const tieBreak = pet.tieBreak || Infinity;

        if (diff < minDiff || (diff === minDiff && tieBreak < minTieBreak)) {
            closestPet = pet;
            minDiff = diff;
            minTieBreak = tieBreak;
        }
    });

    return closestPet;
}


export function calculateCombinations(pets: Pal[]) {
    const combinations: Combinations[] = [];
    const seenCombinations = new Set();

    pets.forEach(parent1 => {
        pets.forEach(parent2 => {
            if (parent1.name === parent2.name) return; // Skip same species

            const specialComb = specialCombinations.find(sc => 
                (sc.parent1Name === parent1.name && sc.parent2Name === parent2.name) ||
                (sc.parent1Name === parent2.name && sc.parent2Name === parent1.name)
            );

            if (specialComb) {
                const child = pets.find(pet => pet.name === specialComb.resultName);
                if (child) {
                    combinations.push({
                        parent1_power: parent1.power,
                        parent2_power: parent2.power,
                        child_power: child.power
                    });
                    return;
                }
            }

            // Existing logic for general combinations
            const parentPair = [parent1.power, parent2.power].sort((a, b) => a - b).join('-');
            if (seenCombinations.has(parentPair)) return;
            seenCombinations.add(parentPair);

            const avgPower = Math.floor((parent1.power + parent2.power) / 2);
            const child = findClosestPet(pets, avgPower, parent1.name, parent2.name);

            if (child) {
                combinations.push({
                    parent1_power: parent1.power,
                    parent2_power: parent2.power,
                    child_power: child.power
                });
            }
        });
    });

    return combinations;
}


export function findIndividualCombinations(parent: Pal, pets: Pal[]) {
    const combinations:Combinations[] = [];
    const seenCombinations = new Set();

    pets.forEach(parent1 => {
        const parentPair = [parent1.power, parent.power].sort((a, b) => a - b).join('-');
        if (seenCombinations.has(parentPair)) return;
        seenCombinations.add(parentPair);

        const specialComb = specialCombinations.find(sc => 
            (sc.parent1Name === parent1.name && sc.parent2Name === parent.name) ||
            (sc.parent1Name === parent.name && sc.parent2Name === parent1.name)
        );

        if (specialComb) {
            const child = pets.find(pet => pet.name === specialComb.resultName);
            if (child) {
                combinations.push({
                    parent1_power: parent1.power,
                    parent2_power: parent.power,
                    child_power: child.power
                });
                return;
            }
        }

        const avgPower = Math.floor((parent1.power + parent.power) / 2);
        const child = findClosestPet(pets, avgPower, parent1.name, parent.name);

        if (child) {
            combinations.push({
                parent1_power: parent.power,
                parent2_power: parent1.power,
                child_power: child.power
            });
        }
    }) 

    return combinations;
}

export function findParentOptions(child: Pal, pets: Pal[], combinations: Combinations[]): { parent1: Pal, parent2: Pal }[] {
    // Filter combinations to find those with the matching child power
    const matchingCombinations = combinations.filter(comb => comb.child_power === child.power);

    // Map these combinations to their corresponding parent Pal objects
    const parentOptions = matchingCombinations.map(comb => {
        const parent1 = pets.find(pet => pet.power === comb.parent1_power);
        const parent2 = pets.find(pet => pet.power === comb.parent2_power);

        return { parent1, parent2 };
    });

    // Filter out any pairs where one or both parents weren't found
    return parentOptions.filter(option => option.parent1 !== undefined && option.parent2 !== undefined) as { parent1: Pal, parent2: Pal }[];
}
