import { PaymentService } from '../application/ports';
import { fakeApi } from './api';

export function usePayment(): PaymentService {
  return {
    tryPay(_amount: PriceCents) {
      return fakeApi(true);
    },
  };
}
