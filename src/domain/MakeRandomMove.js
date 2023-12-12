import MakeRandomValidator from '../validators/MakeRandomValidator';

class MakeRandomMove {
  #count;

  constructor(playCount) {
    MakeRandomValidator.validatePlayCount(playCount);
    this.#count = Number(playCount);
  }
}

export default MakeRandomMove;