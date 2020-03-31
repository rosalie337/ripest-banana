const {
  getStudio,
  getStudios,
} = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('studio routes', () => {
  it('creates a studio', () => {
    return request(app)
      .post('/api/v1/studios')
      .send({
        name: 'Grey Matter Studios',
        address: '1234 studio park',
        city: 'Los Angeles',
        state: 'CA',
        zip: 12345,
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'Grey Matter Studios',
          address: '1234 studio park',
          city: 'Los Angeles',
          state: 'CA',
          zip: 12345,
          __v: 0
        });
      });
  });
});
it('gets a studio by id', async() => {
  const studio = await getStudio();

  return request(app)
    .get(`/api/v1/studios/${studio._id}`)
    .then(res => {
      expect(res.body).toEqual(studio);
    });
});

it('gets all studios', async() => {
  const studios = await getStudios();

  return request(app)
    .get('/api/v1/studios')
    .then(res => {
      expect(res.body).toEqual(studios);
    });
});
