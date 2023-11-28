import { Router } from "express";
import { createStudentData,getStudentData,updateStudentData,deleteStudentData } from "../controller/candidateController";

const router = Router();

router.post("/Candidate", createStudentData);

router.get("/CandidateData", getStudentData);

router.patch("/Candidate/:id", updateStudentData);

router.delete("/Candidate/:id", deleteStudentData);

export default router;