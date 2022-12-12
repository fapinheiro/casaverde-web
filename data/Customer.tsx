export class Customer {
    readonly id: number
    readonly name: string
    readonly password: string

    constructor(id: number, name: string, password: string) {
        this.id = id
        this.name = name
        this.password = password
    }
}