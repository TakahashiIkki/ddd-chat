import express from "express";
import {GetSelfUser} from "../../../../Domain/User/UseCase/GetSelfUser";
import {ShowSelfUserResponder} from "../../Responders/User/ShowSelfUserResponder";

export class ShowSelfUserAction {
    constructor(
        private readonly usecase: GetSelfUser,
        private readonly responder: ShowSelfUserResponder,
    ) {
    }

    __invoke(req: express.Request, res: express.Response) {
        /** get from session */
        const userId = 'xxx';
        const user = this.usecase.run(userId);
        if (!user) {
            return this.responder.respondNotFound(res);
        }
        return this.responder.respond(res, user);
    }
}

