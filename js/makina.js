import { Jokalari } from "./jokalari.js";

class Makina extends Jokalari{
  constructor(izena) {
    super(izena);
    this.indarra = Math.floor(Math.random()*100+1);
    this.osasuna = 130;
    }
}
export { Makina };
