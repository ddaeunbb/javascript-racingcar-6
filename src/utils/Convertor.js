import SYMBOL from '../constants/symbol'
/**
* 차이름 'daeun,pobi,james'를 ['daeun', 'pobi', 'james']로 바꿔주는 함수
* @param {string} carNames
* @return {string[]}
*/
export const carNamesConvertor = (carNames) => carNames.split(SYMBOL.comma);