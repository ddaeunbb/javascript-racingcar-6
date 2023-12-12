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
    this.#makeRandomMove = new MakeRandomMove(playCount);
  }
}

export default RacingCarController;