import { REGEX_NUM } from '../constants/regex';
import { ERROR_MESSAGE } from '../constants/error';
import CustomError from '../exceptions/CustomError';

class MakeRandomValidator {
  /**
  * 숫자인지 확인하는 메서드
  * @param {string} playCount
  */
  static isNumber(playCount) {
    if(!REGEX_NUM.test(playCount)) throw new CustomError(ERROR_MESSAGE.shouldNum);
  }

  /**
  * 100이하인지 확인하는 메서드
  * @param {string} playCount
  */
  static isUnderHundred(playCount) {
    if(Number(playCount) > 100) throw new CustomError(ERROR_MESSAGE.shouldUnderHundred);
  }

  static validatePlayCount(playCount) {
    this.isNumber(playCount);
    this.isUnderHundred(playCount);
  }
}

export default MakeRandomValidator;