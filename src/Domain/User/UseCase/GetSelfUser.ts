import {UserRepository} from "../Repository/UserRepository";
import {User} from "../Entity/User";

export class GetSelfUser {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    run(userId: string): User | undefined {
        return this.userRepository.findById(userId);
    }
}
