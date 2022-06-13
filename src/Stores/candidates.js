import { makeAutoObservable } from "mobx";
import candidates from "./candidates.json";

export default class CandidatesStore {
isLoading = false;
candidatesList = [];

constructor() {
makeAutoObservable(this);
}

getAllCandidates = (num) => {
this.isLoading = true;
num ?  this.candidatesList = candidates.slice(0, num) : this.candidatesList = candidates;
this.isLoading = false;
}}
