const Book = require('../models/Book')

exports.createBookForm = (req, res) => {
  res.render('create-book')
}

exports.createBook = async (req, res) => {
  const {title, description, author, rating} = req.body
  // Si no asigno la promesa a una variable, solamente se hace una pausa
  // hasta cumplir la promesa.
  await Book.create({title, description, author, rating})
  // ... Una vez pasada cierta cantidad de tiempo en la creación del libro
  // hago render del catalogo
  res.redirect('/')
}

exports.updateBookForm = async (req, res) => {
  const {bookid} = req.query
  const book = await Book.findById(bookid)

  res.render('update-book', book)
}

exports.updateBook = async (req, res) => {
  const {title, description, author, rating} = req.body
  const {bookid} = req.query

  await Book.findByIdAndUpdate(bookid, {
    author,
    description,
    title,
    rating
  })

  res.redirect('/')
}
