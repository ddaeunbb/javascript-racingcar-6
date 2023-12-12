import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView';
import { carNamesConvertor } from '../utils/Convertor';
import RacingCars from '../domain/RacingCars';
import MakeRandomMove from '../domain/MakeRandomMove';

class RacingCarController {
  #racingCars;
  #makeRandomMove;

  async receiveCarNames() {
    const carNames = await InputView.readCarNames();
    const carNamesArr = carNamesConvertor(carNames);
    this.#racingCars = new RacingCars(carNamesArr);
  }

  async receivePlayCount() {
    const playCount = await InputView.readPlayCount();
    const totalCarCount = this.#racingCars.getTotalCarCount();
    this.#makeRandomMove = new MakeRandomMove(playCount, totalCarCount);
  }

  playRacing() {
    const moveRandomArr = this.#makeRandomMove.makeRandom();
    Console.print(moveRandomArr);
  }
}

export default RacingCarController;