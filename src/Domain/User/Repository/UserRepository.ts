import {User} from "../Entity/User";

export class UserRepository {
    findById(userId: string): User | undefined {
        if (userId === 'xxx') {
            return new User(userId, 'サンプルユーザー', 'test@example.com')
        }
        return undefined;
    }
}
