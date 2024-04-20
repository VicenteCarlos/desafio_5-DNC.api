import { Router } from "express"
import { listBooks } from "../services/book.js"

const router = Router()

router.get('/', async (req, res) => {
    const bookList = await listBooks()
    res.send(bookList)
})



export default router

