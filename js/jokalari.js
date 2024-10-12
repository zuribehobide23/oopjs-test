class Jokalari {
    constructor(izena, indarra, osasuna) {
      this._izena = izena;
      this.indarra = indarra;
      this.osasuna = osasuna;
    }

    get izena() {
      return this._izena;
    }

    borrokatu(jokalari){
        if ( Math.random()* this.indarra > jokalari.indarra )
            {
            jokalari.osasuna -= this.indarra;
            }
            else
            {
            this.osasuna -= jokalari.indarra;
            }
    }

  }
  export { Jokalari };

