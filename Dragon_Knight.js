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
    return Math.round(this._f*getRandomNum(10,30))
  }

}



class Dragon extends Player {

  constructor(f, l, n) {
    super(f, l, n)
    
  }

}



class Knight extends Player {

  constructor(f, l, n) {
    super(f, l, n)
    
  }

}


class Game {

  constructor(p1, p2) {
    this._p1 = p1; // dragon
    this._p2 = p2; // knight
  }


  run() {
    // instancier le jeu

    // commencer le premier tour
      // définir qui frappe qui
      let attackFirst; 
      getRandomNum(0,1) === 0 ? attackFirst = "dragon" : "player"
      // définir les dégats de l'attaque sur l'autre joueur et les enlever aux points du joueur perdant
      attackFirst === 'dragon' ? p2._l -= p1.hit() : p1._l -= p2.hit()

      if (p1._l <= 0 ) {
        console.log(`Le jeu est terminé, ${p1._n} est mort au combat.`);
      }
      else if (p2._l <= 0 ) {
        console.log(`Le jeu est terminé, ${p2._n} est mort au combat.`)
      }
      else {
        // boucler jusqu'à la mort d'un joueur ou annoncer le gagnant
        console.log(`Il reste ${p1._l}XP à ${p1._n} et il reste ${p2._l}XP à ${p2._n}`)
        this.run()
      }
    

    
  }

}




// In Game functions


const getRandomNum = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min +1) + min)
}


// game


const p1 = new Dragon(1.4, 300, 'Babar')
const p2 = new Knight(2.6, 140, 'Julien')

const game = new Game(p1, p2)

console.log(game.run())