import { Random } from '@woowacourse/mission-utils';
import RacingCarsValidator from '../validators/RacingCarsValidator';
import { RANGE_RANDOM } from '../constants/number';
/**
 * @classdesc RacingCars
 * 차이름과 게임 결과값을 가지고 있다.
*/
class RacingCars {
  #cars = new Map();

  constructor(carNamesArr) {
    RacingCarsValidator.validateCarNames(carNamesArr);
    carNamesArr.forEach(carName => {
      this.#cars.set(carName, 0);
    })
  }

  moveRandom() {
    this.#cars.forEach(car => {
      const { min, max, standard } = RANGE_RANDOM;
      const randomNum = Random.pickNumberInRange(min, max);
      if(randomNum >= standard) this.#cars.set(car, this.#cars.get(car)+1);
    })
  }

  getTotalCarCount() {
    return this.#cars.size;
  }
}

export default RacingCars;