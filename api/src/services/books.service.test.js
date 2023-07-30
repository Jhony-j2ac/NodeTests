const { generateManyBooks } = require('../fakes/book.fakes');
const BooksService = require('./books.service');

/* const fakeBooks = [
  {
    _id: 1,
    name: 'Harry potter Mob',
  },
]; */

// MOCKING
/* const MongoLibStubMock = {
  getAll: () => [...fakeBooks],
  create: () => {},
}; */

// SPIES
const mockGetAll = jest.fn();

jest.mock('../lib/mongo.lib.js', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for BooksService', () => {
  /**
   * @type BooksService
   */
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should return a list of books', async () => {
      // Arrange
      // mockGetAll.mockResolvedValue(fakeBooks);

      const fakeBooksGenerated = generateManyBooks(4);
      mockGetAll.mockResolvedValue(fakeBooksGenerated);
      const books = await service.getBooks({});

      // act
      // console.log(books);
      // expect(service.getBooks({})).resolves.toBeDefined();
      expect(books.length).toBe(4);

      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
  });
});
