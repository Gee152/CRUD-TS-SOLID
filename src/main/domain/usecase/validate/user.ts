import { CreateUserUseCaseRequest, GetUserByIDUseCaseRequest, UpdateUserUseCaseRequest, DeleteUserUseCaseRequest } from "../ucio/user"

interface CreateUserUseCaseValidateInterface {
    createUser(req: CreateUserUseCaseRequest): Promise<string | null>
}

interface GetUserByIDUseCaseValidateInterface {
    getUserByID(req: GetUserByIDUseCaseRequest): Promise<string | null>
}

interface UpdateValidateValidateInterface {
    updateUser(req: UpdateUserUseCaseRequest): Promise<string | null>
}

interface DeleteUserByIDUseCaseValidateInterface {
    deleteUserByID(req: DeleteUserUseCaseRequest): Promise<string | null>
}

export {
    CreateUserUseCaseValidateInterface,
    GetUserByIDUseCaseValidateInterface,
    UpdateValidateValidateInterface,
    DeleteUserByIDUseCaseValidateInterface
}