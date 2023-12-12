import { Random } from '@woowacourse/mission-utils';
import MakeRandomValidator from '../validators/MakeRandomValidator';
import { RANGE_RANDOM } from '../constants/number';

class MakeRandomMove {
  #count;
  #moveArr;

  constructor(playCount, totalCarCount) {
    MakeRandomValidator.validatePlayCount(playCount);
    this.#count = Number(playCount);
    this.#moveArr = Array.from({length: totalCarCount}, () => 0);
  }

  makeRandom() {
    this.#moveArr.forEach((each, idx) => {
      const { min, max, standard } = RANGE_RANDOM;
      const randomNum = Random.pickNumberInRange(min, max);
      if(randomNum >= standard) this.#moveArr[idx] += 1;
    })
    return this.#moveArr;
  }
}

export default MakeRandomMove;