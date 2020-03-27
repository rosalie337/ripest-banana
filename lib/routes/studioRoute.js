const { Router } = require('express');
const Studio = require('../models/Studio');

module.exports = Router()
  .post('/', (req, res) => {
    Studio
      .create(req.body)
      .then(studio => res.send(studio));
  })

  .get('/', (req, res) => {
    let studioQuery = {};
    if(req.query.ingredient) {
      studioQuery = { 'ingredients.name': req.query.ingredient };
    }
    
    Studio
      .find(studioQuery)
      .select({ name: true })
      .then(studio => res.send(studio));

  })

  .delete('/:id', (req, res) => {
    Promise.all([
      Studio.findByIdAndDelete(req.params.id),
      Event.deleteMany({ recipeId: req.params.id })
    ])
      .then(([recipe]) => res.send(recipe));
  });