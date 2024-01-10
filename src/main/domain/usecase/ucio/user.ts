import { UserEntity } from "../../entity/user"
import { ErrorEntity } from "../../entity/error"

class CreateUserUseCaseRequest {
    public ID: number | null
    public name: string
    public email: string
    public password: string

    constructor(ID: number | null, name: string, email: string, password: string) {
        this.ID = ID
        this.name = name
        this.email = email
        this.password = password
    }
}

class CreateUserUseCaseResponse {
    public user: UserEntity | null
    public error: ErrorEntity | null

    constructor(user: UserEntity | null, error: ErrorEntity | null) {
        this.user = user
        this.error = error
    }
}

class GetUserByIDUseCaseRequest {
    public ID: number

    constructor(ID: number) {
        this.ID = ID
    }
}

class GetUserByIDUseCaseResponse {
    public user: UserEntity | null
    public error: ErrorEntity | null

    constructor(user: UserEntity | null, error: ErrorEntity | null) {
        this.user = user
        this.error = error
    }
}

class UpdateUserUseCaseRequest {
    public ID: number
    public name: string
    public email: string
    public password: string

    constructor(ID: number, name: string, email: string,  password: string) {
        this.ID = ID
        this.name = name
        this.email = email
        this.password = password
    }
}

class UpdateUserUseCaseResponse {
    public user: UserEntity | null
    public error: ErrorEntity | null

    constructor(user: UserEntity | null, error: ErrorEntity | null) {
        this.user = user
        this.error = error
    }
}

class DeleteUserUseCaseRequest {
    public ID: number

    constructor(ID: number){
        this.ID = ID
    }
}

class DeleteUserUseCaseResponse {
    public error: ErrorEntity | null

    constructor(error: ErrorEntity | null) {
        this.error = error
    }
}

export {
    CreateUserUseCaseRequest,
    CreateUserUseCaseResponse,
    GetUserByIDUseCaseRequest,
    GetUserByIDUseCaseResponse,
    UpdateUserUseCaseRequest,
    UpdateUserUseCaseResponse,
    DeleteUserUseCaseRequest,
    DeleteUserUseCaseResponse
}