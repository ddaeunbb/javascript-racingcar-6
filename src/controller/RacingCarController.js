import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView';
import { carNamesConvertor } from '../utils/Convertor';
import RacingCars from '../domain/RacingCars';
import PlayCountValidator from '../validators/PlayCountValidator';

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
    PlayCountValidator.validatePlayCount(playCount);
  }

  playRacing() {
    const moveRandomArr = this.#makeRandomMove.makeRandom();
    Console.print(moveRandomArr);
  }
}

export default RacingCarController;