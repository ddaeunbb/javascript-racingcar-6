import RacingCarsValidator from '../validators/RacingCarsValidator';
/**
 * @classdesc RacingCars
 * 차이름과 게임 결과값을 가지고 있다.
*/
class RacingCars {
  #cars = {};

  constructor(carNamesArr) {
    RacingCarsValidator.validateCarNames(carNamesArr);
    carNamesArr.forEach(carName => {
      this.#cars[carName] = 0;
    })
  }
}

export default RacingCars;