import { Deposit } from './Deposit';
import { Withdrawal } from './Withdrawal';
import { Transfer } from './Transfer';
import { Payment } from './Payment';

export function createMovement(data) {
  switch (data.type) {
    case 'deposit':
      return new Deposit(data);
    case 'withdrawal':
      return new Withdrawal(data);
    case 'transfer':
      return new Transfer(data);
    case 'payment':
      return new Payment(data);
    default:
      throw new Error(`Unknown movement type: ${data.type}`);
  }
}
