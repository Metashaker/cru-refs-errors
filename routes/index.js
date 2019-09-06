const express = require('express')
const {home} = require('../controllers')
const {
  createBook,
  createBookForm,
  updateBook,
  updateBookForm
} = require('../controllers/books')
const {catchErrors} = require('../middlewares/catchErrors')
const router = express.Router()

router.get('/', home)

router.get('/create-book', createBookForm)
router.post('/create-book', catchErrors(createBook))

router.get('/edit-book', updateBookForm)
router.post('/edit-book', catchErrors(updateBook))

module.exports = router
