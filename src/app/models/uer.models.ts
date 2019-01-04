export class User {

    constructor(public firstName: string,
        public lastName: string,
        public email: string,
        public moviePreference: string,
        public hobbies?: string[])
    {
    }
}