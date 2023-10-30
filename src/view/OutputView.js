/* eslint-disable class-methods-use-this */
import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/message';

class OutputView {
  printGameStart(){
    Console.print(OUTPUT_MESSAGE.START);
  }

  printGameResult(player, result){
    Console.print(`${player} : ${result}`);
  }
}

export default OutputView;