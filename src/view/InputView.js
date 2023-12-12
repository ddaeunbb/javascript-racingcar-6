import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/message';

const InputView = Object.freeze({
  async readCarNames() {
    const input =  await Console.readLineAsync(INPUT_MESSAGE.readCarNames);
    return input;
  }
});

export default InputView;