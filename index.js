const { parse } = require('csv-parse');
const fs = require('fs')




function habitialPlanets(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
      && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
      && planet['koi_prad'] < 1.6
}


const habitialPlanet = []
fs.createReadStream('kepler_data.csv')
  .pipe(parse({comment: '#',
columns: true}))
  .on('data', (data) => {
    if (habitialPlanets(data)) {
        habitialPlanet.push(data)
    }
  })
  .on('error', (err) => {
    console.log(err)
  })
  .on('end', () => {
    console.log(habitialPlanet.map((planet) => {
        return planet['kepler_name']
    }))
    console.log(`${habitialPlanet.length} no of planets`)
    console.log('The end')
  })