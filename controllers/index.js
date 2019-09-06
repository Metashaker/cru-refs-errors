const Book = require('../models/Book')
// named export

exports.home = async (req, res) => {
  const books = await Book.find()
  console.log(books[0])
  res.render('index', {books})
}

// default export - 1
// module.exports = {}
