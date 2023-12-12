import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView';
import { carNamesConvertor } from '../utils/Convertor';
import RacingCars from '../domain/RacingCars';

class RacingCarController {
  #racingCars

  async startGame() {
    const carNames = await InputView.readCarNames();
    const carNamesArr = carNamesConvertor(carNames);
    Console.print(carNamesArr);
    this.#racingCars = new RacingCars(carNamesArr);
  }
}

export default RacingCarController;