import { NowRequest, NowResponse } from '@now/node';
import { sayHello } from 'util/say-hello';

export default async (request: NowRequest, response: NowResponse) => {
    console.log(request.body);

    response.status(200).end(sayHello('world'));
}