const Studio = require('../lib/models/Studio');
const chance = require('chance').Chance();

// specifying the number of blogs to create with our seed function
module.exports = async({ studiosToCreate = 10 } = {}) => {
  // creating blogs
  // creating an array of blogsToCreate length
  // map through the array
  // -> for each item in the array we create an object with { author, title, content }
  // for each blog in the mapped array we create a blog in our mongodb
  const studios = await Studio.create([...Array(studiosToCreate)].map(() => ({
    name: chance.unique(chance.animal),
    content: chance.paragraph({ words: 3 })
  })));
};
