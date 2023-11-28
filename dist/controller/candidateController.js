"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudentData = exports.updateStudentData = exports.getStudentData = exports.createStudentData = void 0;
// import * as mongoose from "mongoose";
// import { Model } from "mongoose";
const candidateModel_1 = __importDefault(require("../models/candidateModel"));
// import Candidate from "../models/candidateModel";
// import Candidate from "../models/candidateModel";
// import Candid from "../models/candidateModel";
const createStudentData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        console.log("Data", data);
        var candidateData = yield candidateModel_1.default.create(data);
        return res.status(200).json({ message: "Student data created successfully", data: candidateData });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.createStudentData = createStudentData;
const getStudentData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const CandidateData = yield candidateModel_1.default.find({});
        console.log(CandidateData);
        return res.status(200).json({ message: "All CandidatesData!", data: CandidateData });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.getStudentData = getStudentData;
const updateStudentData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const CandidateData = yield candidateModel_1.default.findByIdAndUpdate(id, req.body, { new: true });
        console.log(CandidateData);
        return res.status(200).json({ message: "Candidate Data updated successfully!", data: CandidateData });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.updateStudentData = updateStudentData;
const deleteStudentData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const isDeleted = yield candidateModel_1.default.findByIdAndDelete(id);
        console.log(isDeleted);
        if (!isDeleted)
            throw new Error("Failed to delete ");
        return res.status(200).json({ message: "deleted successfully!" });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.deleteStudentData = deleteStudentData;
