import { Astronaut } from "./astronaut.js";
import { Cargo } from "./cargo.js";
import { Payload  } from "./demopayload.js";
import { Rocket } from "./rocket.js";
class Invoke{
    static astronaut1= new Astronaut( 100,'lead')
    static astronaut2= new Astronaut( 100,'brick')
    static cargo1 = new Cargo(1000,'Steel')
    static cargo2 = new Cargo(1000,'cooper')
    static astronautList: Astronaut[] = [this.astronaut1];
    static cargoList:Cargo[]=[this.cargo1]
    static rocket = new Rocket("piXL-1pe",990,this.astronautList,this.cargoList)
    
    main(){
        console.log(Invoke.rocket.addAstronaut(Invoke.astronaut2))
        console.log(Invoke.rocket.addCargo(Invoke.cargo2))
    }
}
const invoke = new Invoke();
invoke.main();