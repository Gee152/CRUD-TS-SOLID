class UserEntity {
    public ID: number | null
    public name: string
    public email: string
    public password: string
    public createdAt: Date
    public updatedAt: Date

    constructor(ID: number | null, name: string, email: string,  password: string, createdAt: Date, updatedAt: Date) {
        this.ID = ID
        this.name = name
        this.email = email
        this.password = password
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}

export { 
    UserEntity
}