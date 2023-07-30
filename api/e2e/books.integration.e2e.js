/**
 * First test, mocks db and is an integration test copy of book.e2e.js
 */
const mockGetAll = jest.fn();

const request = require('supertest');
const { generateManyBooks } = require('../src/fakes/book.fakes');

const createApp = require('../src/app');

jest.mock('../src/lib/mongo.lib.js', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for endpoint', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('Test for GET [/api/v1/books] ', () => {
    test('should return hello world ', () => {
      // Arrange
      const fakeBooks = generateManyBooks(2);
      mockGetAll.mockResolvedValue(fakeBooks);

      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          // Assert
          expect(body.length).toBe(2);
        });
    });
  });
});
