import { RequestHandler } from "express";
// import * as mongoose from "mongoose";
// import { Model } from "mongoose";

import Candidate, { candidateModel } from "../models/candidateModel";
// import Candidate from "../models/candidateModel";
// import Candidate from "../models/candidateModel";
// import Candid from "../models/candidateModel";

export const createStudentData: RequestHandler = async (req, res, next) => {
  try {
    const data: candidateModel = req.body;
    console.log("Data", data);
    var candidateData = await Candidate.create(data);
    return res.status(200).json({ message: "Student data created successfully", data: candidateData });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getStudentData: RequestHandler = async (req, res, next) => {
  try {
    const CandidateData = await Candidate.find({});
    console.log(CandidateData)
    return res.status(200).json({ message: "All CandidatesData!", data: CandidateData });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateStudentData: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const CandidateData = await Candidate.findByIdAndUpdate(id, req.body, { new: true });
    console.log(CandidateData)
    return res.status(200).json({ message: "Candidate Data updated successfully!", data: CandidateData });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteStudentData: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const isDeleted = await Candidate.findByIdAndDelete(id);
    console.log(isDeleted)
    if (!isDeleted) throw new Error("Failed to delete ");
    return res.status(200).json({ message: "deleted successfully!" });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};