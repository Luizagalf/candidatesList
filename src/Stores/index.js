import  CandidatesStore  from "./candidates.js";

class RootStore {
candidatesStore = new CandidatesStore();
}

const store = new RootStore();

export default store;
