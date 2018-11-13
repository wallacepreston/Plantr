const {db, Gardener, Vegetable, Plot} = require('./models.js');

db.sync({force: true}).then(
    () => {
        console.log("db synced!");
    }
).then( Vegetable.create({name: 'asparagus', color: 'green', planted_on: new Date()}) )
.catch( (error) => {
    console.log("failed to sync");
    console.log(error);
}).finally( () => {
    db.close();
})

