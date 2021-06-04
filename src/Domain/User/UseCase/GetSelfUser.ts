import {UserRepository} from "../Repository/UserRepository";
import {User} from "../Entity/User";

export class GetSelfUser {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    run(userId: string): User {
        const user = this.userRepository.findById(userId);
        if (!user) {
            throw new Error('ユーザーが見つかりませんでした。ログインを行ってください。')
        }
        return user;
    }
}
