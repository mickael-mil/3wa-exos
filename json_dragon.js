const fs = require('fs');
const { get } = require('https');


const getData = filename => (new Promise((resolve, reject) => {

  fs.readFile(filename, {
    encoding: 'utf8'
  }, (err, data) => {
    // impossible de lire le fichier
    if (err) {
      reject(new Error("File read failed:", err));

      return;
    }
    // success
    resolve(JSON.parse(data))
    // JSON.parse permet de transformer un fichier JSON en un objet JSON JS

  })

}))

// getData('../Exercices/data/dragons.json')
//   .then(data => {

//     const dragonsDescending = data.dragons.sort((a,b) => b.age - a.age)

//     const youngestDragon = dragonsDescending[dragonsDescending.length -1]
//     const oldestDragon = dragonsDescending[0]

//     console.log(`The oldest Dragon is ${oldestDragon.name}, he's ${oldestDragon.age} old.`)
//     console.log(`The youngest Dragon is ${youngestDragon.name}, he's ${youngestDragon.age} old.`)


//     return {youngest, oldest, dragonsDescending}


//   })
//   .then(data => console.log(data))
//   .catch(err => console.error(err))



Promise.all([getData('../Exercices/data/dragons.json'), getData('../Exercices/data/relationships.json')])
  .then(datas => {

    const [{
      dragons
    }, {
      relationships
    }] = datas
    const dragonRefs = new Map();
    let dragonSiblings =  []


    // je set le map pour avoir key = id et value = name
    for (dragon of dragons) {
      dragonRefs.set(dragon.id, dragon.name)
    }
    

    // Je crée une fonction pour retrouver le nom grace à l'ID
    const getNameById = (id) => {
      return dragonRefs.get(id)
    }
    

    for (relationship of relationships) {
      //J'ajoute Name du dragon dans le tableau grace à son id
      relationship.name = getNameById(parseInt(relationship.id))
      // puis je change l'ID de ses relations par le nom des dragons respectifs
      relationship.relation = relationship.relation.map(rel => getNameById(parseInt(rel)))
      // enfin je push tout ca dans le tableau dragonSiblings
      dragonSiblings.push(relationship)
    }

    console.log(dragonSiblings)
      

  })