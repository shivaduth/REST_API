import * as mongoose from "mongoose";
import { Model } from "mongoose";

type candidateType = candidateModel & mongoose.Document;
export interface candidateModel {
  CandidateName: {
    type: String,
    
    
  };
  CandidateNumber: {
    type: Number,
    
  };
}
const Schema = new mongoose.Schema({
  CandidateName: {
    type: String,
    
  },
  CandidateNumber: {
    type: Number,
    
  },
});
const Candidate: Model<candidateType> = mongoose.model < candidateType > ("Candidate", Schema);
export default Candidate;