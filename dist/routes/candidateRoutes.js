"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const candidateController_1 = require("../controller/candidateController");
const router = (0, express_1.Router)();
router.post("/Candidate", candidateController_1.createStudentData);
// getStudentData,updateStudentData,deleteStudentData
router.get("/CandidateData", candidateController_1.getStudentData);
router.patch("/Candidate/:id", candidateController_1.updateStudentData);
router.delete("/Candidate/:id", candidateController_1.deleteStudentData);
exports.default = router;
