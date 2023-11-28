"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const candidateRoutes_1 = __importDefault(require("./routes/candidateRoutes"));
const body_parser_1 = require("body-parser");
const dbURI = 'mongodb://127.0.0.1:27017/CandidateDb';
const app = (0, express_1.default)();
const port = 3000;
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use("/", candidateRoutes_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
mongoose_1.default.connect(dbURI)
    .then(() => {
    console.log('Connected to MongoDB');
})
    .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
