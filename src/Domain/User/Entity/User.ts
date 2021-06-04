export type UserPropsType = {
    id: number;
    userName: string;
};

export class User {
    private readonly id: string;
    private userName: string;

    constructor(id: string, userName: string) {
        this.id = id
        this.userName = userName
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
}
