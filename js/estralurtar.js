import { Jokalari } from "./jokalari.js";

class Estralurtar extends Jokalari{
  constructor(izena) {
    super(izena.split('').reverse().join(''));
    this.indarra = Math.floor(Math.random()*85+1);
    this.osasuna = 150;
    }
}
export { Estralurtar };

