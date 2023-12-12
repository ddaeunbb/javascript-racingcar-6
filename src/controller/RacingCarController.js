import OutputView from '../view/OutputView';
import InputView from '../view/InputView';
import { carNamesConvertor } from '../utils/Convertor';
import RacingCars from '../domain/RacingCars';
import PlayCountValidator from '../validators/PlayCountValidator';

class RacingCarController {
  #racingCars;

  async startGame() {
    await this.receiveCarNames();
    await this.receivePlayCount();
  }

  async receiveCarNames() {
    const carNames = await InputView.readCarNames();
    const carNamesArr = carNamesConvertor(carNames);
    this.#racingCars = new RacingCars(carNamesArr);
  }

  async receivePlayCount() {
    const playCount = await InputView.readPlayCount();
    PlayCountValidator.validatePlayCount(playCount);
    this.playRacing(playCount)
  }

  playRacing(playCount) {
    OutputView.printGameResult();
    let count = 0;
    while(count < playCount){
      const result = this.#racingCars.moveRandom();
      result.forEach((val, car)=> {
        OutputView.printEachCarResult(car, val);
      })
      count += 1;
    }
  }
}

export default RacingCarController;