const chance = require('chance').Chance();
const Studio = require('../lib/models/Studio');


module.exports = async({ studiosToCreate = 10 } = {}) => {
  const studioPossibilities = ['fire', 'water', 'earth', 'air'];

  const studios = await Studio.create([...Array(studiosToCreate)].map(() => ({
    name: `${chance.unique()} ${chance.pickone(studioPossibilities)}`,
    description: chance.sentence({ words: 3 })
  }),
  ),);
};
