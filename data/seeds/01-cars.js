// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: 'LR4',
        model: 'LandRover',
        milage: 140000,
        title: 'clean',
        transmission: 'automatic',
    },
    {
        vin: '1111111111111',
        make: 'Model Y',
        model: 'Tesla',
        milage: 60000,
        title: 'salvage',
        transmission: 'automatic',
    },
    {
        vin: '1111111111111',
        make: 'EV',
        model: 'Hummer',
        milage: 1600,
        title: 'clean',
        
    },

]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars) 
    
}