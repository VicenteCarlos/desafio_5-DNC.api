import databaseConnection from '../utils/database.js'
import Book from '../models/book.js'

export const listBooks = async () => {
    await databaseConnection()
    const books = await Book.find()
    return books
}

export const findBook = async (id) => {
    await databaseConnection();
    const bookChosen = await Book.findOne({ id: id });
    return bookChosen;
};

export const createBook = async (book) => {
    await databaseConnection()
    const createdBook = await Book.create(book)
    return createdBook
}

export const updateBook = async (id, newBody) => {
    await databaseConnection();
    const updatedBook = await Book.findOneAndUpdate({ id: id }, newBody, { new: true });
    return updatedBook;
};

export const deleteBook = async (id) => {
    await databaseConnection()
    await Book.deleteOne({ id: id })
}

