import {Injectable, NotImplementedException} from '@nestjs/common';

@Injectable()
export class BasketService {
    async basketOfUser(userId: number) {
        throw new NotImplementedException();
    }

    async createBasket(userId: number, deviceId: number[]) {
        throw new NotImplementedException();
    }
}
