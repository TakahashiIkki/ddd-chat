import express from 'express';
import {ShowSelfUserAction} from "./Http/Controllers/User/ShowSelfUserAction";
import {ShowSelfUserResponder} from "./Http/Responders/User/ShowSelfUserResponder";
import {GetSelfUser} from "../Domain/User/UseCase/GetSelfUser";
import {UserRepository} from "../Domain/User/Repository/UserRepository";

export class ChatApp {
    readonly env: typeof process.env;

    app: any = null;

    readonly port: number;

    constructor(env: typeof process.env) {
        this.env = env;
        this.port = env.PORT ? Number.parseInt(env.PORT) : 3000;
    }

    async init() {
        await this.buildServer();
    }

    async buildServer() {
        const app: express.Express = express()

        const action = new ShowSelfUserAction(new GetSelfUser(new UserRepository()), new ShowSelfUserResponder);

        //一覧取得
        app.get('/users', (req: express.Request, res: express.Response) => {
            action.__invoke(req, res);
        })

        //CROS対応（というか完全無防備：本番環境ではだめ絶対）
        app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "*")
            res.header("Access-Control-Allow-Headers", "*");
            next();
        })

        this.app = app;
    }

    start = () => {
        this.app.listen(this.port, (err: any) => {
            if (err) {
                throw new Error('Server connection error.');
            }
            console.log(`Server listening on port: ${this.port}`);
        })
    };

    exitOnError(err: any) {
        console.error(err);
        console.error(err.stack);
        process.exit(1);
    }
}
