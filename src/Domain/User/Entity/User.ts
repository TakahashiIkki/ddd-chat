export type UserPropsType = {
    id: number;
    userName: string;
};

export class User {
    constructor(
        private readonly id: string,
        private userName: string,
        private email: string
    ) {
    }

    getUserId(): string {
        return this.id;
    }

    getUserName(): string {
        return this.userName;
    }

    setUserName(newName: string) {
        this.userName = newName;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(): string {
        return this.email;
    }
}
