import express from 'express';

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

        type User = {
            id: number
            name: string
            email: string
        };

        const users: User[] = [
            {id: 1, name: "User1", email: "user1@test.local"},
            {id: 2, name: "User2", email: "user2@test.local"},
            {id: 3, name: "User3", email: "user3@test.local"}
        ]

        //一覧取得
        app.get('/users', (req: express.Request, res: express.Response) => {
            res.send(JSON.stringify(users))
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
