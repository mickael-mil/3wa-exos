const fs = require('fs');


const getData = filename => (new Promise((resolve, reject) => {

  fs.readFile( filename, { encoding: 'utf8' }, (err, data) => {
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

getData('../Exercices/data/dragons.json')
  .then(data => {
    
    const dragonsDescending = data.dragons.sort((a,b) => b.age - a.age)

    const youngestDragon = dragonsDescending[dragonsDescending.length -1]
    const oldestDragon = dragonsDescending[0]

    console.log(`The oldest Dragon is ${oldestDragon.name}, he's ${oldestDragon.age} old.`)
    console.log(`The youngest Dragon is ${youngestDragon.name}, he's ${youngestDragon.age} old.`)
    
    
    return {youngest, oldest, dragonsDescending}
    
    
  })
  .then(data => console.log(data))
  .catch(err => console.error(err))


