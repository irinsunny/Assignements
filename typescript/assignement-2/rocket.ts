import { Astronaut } from "./astronaut.js";
import { Cargo } from "./cargo.js";
import { Payload } from "./demopayload.js";

class Rocket implements Payload {
    name: string
    totalCapacityKg: number
    astronauts: Astronaut[] = []
    cargoItems: Cargo[] = []
    massKg: number;
    constructor(name: string, totalCapacityKg: number,
        astronauts: Astronaut[],
        cargoItems: Cargo[]) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg
        this.astronauts=astronauts
        this.cargoItems=cargoItems
    }

    sumMass(items: Payload[]): number {
        let totalMass = 0;

        for (const item of items) {
            totalMass += item.massKg;
        }

        return totalMass;

    }
    currentMassKg(): number {

        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }
    canAdd(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;

    }
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
        }
        else
            return false;
    }
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
        }
        else
            return false;
    }
}
export { Rocket }