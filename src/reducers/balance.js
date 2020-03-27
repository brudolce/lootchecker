import * as constants from '../actions/constants';
import { read_cookie, bake_cookie } from 'sfcookies';

const BALANCE_COOKIE = 'BALANCE_COOKIE';

const balance = (state = 0, action) => {
  let result;

  switch(action.type){
    case constants.SET_BALANCE:
      result = action.balance;
      break;
    case constants.DEPOSIT:
        result = state + action.deposit;
        break;
    case constants.WITHDRAW:
        result = state - action.withdrawal;
        break;
    default:
      result = parseInt(read_cookie(BALANCE_COOKIE),10) || state;
  }

  bake_cookie(BALANCE_COOKIE, result);

  return result;
}

export default balance