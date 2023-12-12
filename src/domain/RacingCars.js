
import RacingCarsValidator from '../validators/RacingCarsValidator';
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

  getTotalCarCount() {
    return this.#cars.size;
  }
}

export default RacingCars;