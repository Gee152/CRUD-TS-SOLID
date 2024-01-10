import { UserEntity } from "../../entity/user"

interface CreateUserUseCaseRepositoryInterface {
    createUser(metadata: UserEntity): Promise<UserEntity>
}

interface GetUserByIDUseCaseRepositoryInterface {
    getUserByID(ID: number): Promise<UserEntity | null>
}

interface UpdateUserCaseRepositoryInterface {
    getUserByID(userId: number): Promise<UserEntity | null>
    updateUser(user: UserEntity): Promise<UserEntity>
}

interface DeleteUserByIDUseCaseRepositoryInterface {
    deleteUserByID(ID: number): Promise<void>
}

export {
    CreateUserUseCaseRepositoryInterface,
    GetUserByIDUseCaseRepositoryInterface,
    UpdateUserCaseRepositoryInterface,
    DeleteUserByIDUseCaseRepositoryInterface
}