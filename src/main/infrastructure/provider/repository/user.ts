import { UserEntity } from "../../../domain/entity/user"
import { CreateUserUseCaseRepositoryInterface, DeleteUserByIDUseCaseRepositoryInterface, GetUserByIDUseCaseRepositoryInterface, UpdateUserCaseRepositoryInterface } from "../../../domain/usecase/repository/user"
import { createUser, deleteUser, getUser, updateUser } from "../../internal/database/postgres/user"

class CreateUserUseCaseRepository implements CreateUserUseCaseRepositoryInterface {
   async createUser(metadata: UserEntity): Promise<UserEntity> {
        return await createUser(metadata)
    }
}

class GetUserUseCaseRepository implements GetUserByIDUseCaseRepositoryInterface {
    async getUserByID(ID: number): Promise<UserEntity | null> {
        return await getUser(ID)
    }
}

class UpdateUserUseCaseRepository implements UpdateUserCaseRepositoryInterface {
   async getUserByID(userId: number): Promise<UserEntity | null> {
        return await getUser(userId)
    }
    async updateUser(user: UserEntity): Promise<UserEntity> {
        return await updateUser(user)
    }
}

class DeleteUserUseCaseRepository implements DeleteUserByIDUseCaseRepositoryInterface {
    async deleteUserByID(ID: number): Promise<void> {
        return await deleteUser(ID)
    }
}

export { 
    CreateUserUseCaseRepository, 
    GetUserUseCaseRepository,
    UpdateUserUseCaseRepository, 
    DeleteUserUseCaseRepository
}