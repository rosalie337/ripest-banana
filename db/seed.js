const Studio = require('../lib/models/Studio');
const chance = require('chance').Chance();

// specifying the number of studio to create with our seed function
module.exports = async({ studiosToCreate = 10 } = {}) => {
  // creating studios
  // creating an array of studioToCreate length
  // map through the array
  // -> for each item in the array we create an object with studio
  // for each studio in the mapped array we create a studio in our mongodb
  const studios = await Studio.create([...Array(studiosToCreate)].map(() => ({
    name: chance.unique(chance.animal, { words: 3 }),
  })));
};
