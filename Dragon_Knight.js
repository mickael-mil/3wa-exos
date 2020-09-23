class Player {
  
  constructor(force, life, name) {
    this._f = force
    this._l = life
    this._n = name
  }

  // GETTERS
  get force() {
    return this._f
  }
  get life() {
    return this._l
  }
  get name() {
    return this._n
  }

  hit() {
    return getRandomNum(1, this._f)*getRandomNum(1,3)
  }

}



class Dragon extends Player {

  constructor(n) {
    super(n)
    this._f = getRandomNum(1,3)*3
    this._l = getRandomNum(100,500)*5
    this._n = n;
  }

  
  
}



class Knight extends Player {

  constructor(n) {
    super(n)
    this._f = getRandomNum(1,3)*5
    this._l = getRandomNum(100,500)*3
    this._n = n;
  }

}


class Game {

  constructor(p1, p2) {
    this._p1 = p1;
    this._p2 = p2;
  }


  run() {
    // instancier le jeu

    // commencer le premier tour
      // définir qui frappe qui
      let attackFirst; 
      getRandomNum(0,1) === true ? attackFirst = "dragon" : "player"
      // définir les dégats de l'attaque sur l'autre joueur et les enlever aux points du joueur perdant
      attackFirst === 'dragon' ? p2._l -= p1.hit() : p1._l -= p2.hit()
    // boucler jusqu'à la mort d'un joueur

    // annoncer le gagnant
  }

}




// In Game functions


const getRandomNum = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min +1) + min)
}


// game


const p1 = new Dragon('Babar')
const p2 = new Knight('Julien')

console.log(p1, p2)