import { Combinations, Pal } from "../../types";


export function findClosestPet(pets: Pal[], targetPower: number):Pal | null {
    let closestPet:Pal | null = null;
    let minDiff = Infinity;
    let minTieBreak = Infinity;

    pets.forEach(pet => {
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
    const combinations:Combinations[] = [];
    const seenCombinations = new Set();

    pets.forEach(parent1 => {
        pets.forEach(parent2 => {
            const parentPair = [parent1.power, parent2.power].sort((a, b) => a - b).join('-');
            if (seenCombinations.has(parentPair)) return;
            seenCombinations.add(parentPair);

            const avgPower = Math.floor((parent1.power + parent2.power) / 2);
            const child = findClosestPet(pets, avgPower);

            if (child) {
                combinations.push({
                    parent1: parent1.power,
                    parent2: parent2.power,
                    child: child.power
                });
            }
        });
    });

    return combinations;
}