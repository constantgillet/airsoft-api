import { Request, Response, NextFunction } from 'express';

class TestController {

    constructor() {    
      this.test = this.test.bind(this);
    }

    test(req: Request, res: Response, next: NextFunction) {
        res.send('Hello world');
    }
}

export default new TestController();