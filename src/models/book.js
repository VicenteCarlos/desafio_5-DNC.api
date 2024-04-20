import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    id: { type: Number, require: true, unique: true },
    title: { type: String, required: true },
    pageNumbers: { type: Number, required: true },
    isbn: { type: String, required: true },
    publishCompany: { type: String, required: true }
})
export default mongoose.models.Book || mongoose.model('Book', BookSchema)