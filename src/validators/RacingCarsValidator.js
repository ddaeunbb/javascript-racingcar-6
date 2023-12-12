import REGEX_ALPHA from '../constants/regex';
import CustomError from '../exceptions/CustomError';
import { ERROR_MESSAGE } from '../constants/error';
import { LENGTH_NAME } from '../constants/number';

class RacingCarsValidator {
  /**
  * 알파벳으로 이뤄진 이름인지 확인하는 메서드 
  * @param {string} carName
  */
  static isAlpha(carName) {
    if(!REGEX_ALPHA.test(carName)) throw new CustomError(ERROR_MESSAGE.shouldAlpha);
  }

  /**
  * 5글자 이하인지 확인하는 메서드
  * @param {string} carName
  */
  static isLenFive(carName) {
    if(carName.length > LENGTH_NAME) throw new CustomError(ERROR_MESSAGE.shouldLenFive);
  }

  static validateCarNames(carNamesArr) {
    carNamesArr.forEach(carName => {
      this.isAlpha(carName);
      this.isLenFive(carName);
    })
  }
}

export default RacingCarsValidator;