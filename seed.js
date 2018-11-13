const {db, Gardener, Vegetable, Plot} = require('./models.js');

db.sync({force: false}).then(
    () => {
        console.log("db synced!");
    }
).then( () => { return Vegetable.create({name: 'asparagus', color: 'green', planted_on: new Date()}) } ) 
.then((vegetable) => { return Gardener.create({name: 'Preston', age: 32, favoriteVegetable: vegetable.id})})
.then((gardener) => { return Plot.create({size: 5, shaded: true, gardenerId: gardener.id})})
.catch( (error) => {
    console.log("failed to sync");
    console.log(error);
}).finally( () => {
    db.close();
})

