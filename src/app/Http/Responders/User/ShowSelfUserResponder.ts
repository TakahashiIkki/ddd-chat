import express from "express";
import {User} from "../../../../Domain/User/Entity/User";

export class ShowSelfUserResponder {
    respondNotFound(res: express.Response) {
        res.statusCode = 404;
    }

    respond(res: express.Response, user: User) {
        res.statusCode = 200;
        res.send(JSON.stringify(user));
    }
}
