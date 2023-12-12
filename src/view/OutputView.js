import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/message';
import SYMBOL from '../constants/symbol';

const OutputView = Object.freeze({
  printGameResult() {
    Console.print(OUTPUT_MESSAGE.printGameResult);
  },

  printEachCarResult(car, move) {
    Console.print(`${car} : ${SYMBOL.hyphen.repeat(move)}`);
  }
});

export default OutputView;