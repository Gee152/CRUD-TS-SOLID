import { UserEntity } from "../../../../domain/entity/user"
import { Connection } from "../postgres/connection"
import { UserModel } from "./model/user"

import { toUserEntity, toUserModel } from "./transformer/user"

async function createUser(user: UserEntity): Promise<UserEntity> {
    
    const model = toUserModel(user)
    
    const repository = await Connection.getRepository(UserModel)

    const modell = await repository.save(model)

        return toUserEntity(modell)
}

async function getUser(userID: number): Promise<UserEntity | null> {
    const repository = await Connection.getRepository(UserModel)
    const user = await repository.findOne(({ where: {ID: userID} }))
        return user ? toUserEntity(user) : null
}

async function updateUser(user: UserEntity): Promise<UserEntity> {
    const repository = await Connection.getRepository(UserModel)
    const model = toUserModel(user)
    const result = await repository.save(model)
        return toUserEntity(result)
}

async function deleteUser(userID: number): Promise<void> {
    const repository = await Connection.getRepository(UserModel)
    await repository.delete(userID)
}

async function checkEmail(email: string): Promise<boolean> {
    const repository = await Connection.getRepository(UserModel)
    const user = await repository.findOne(({ where: {email} }))
        return !!user
}

export { 
    createUser, 
    getUser, 
    updateUser, 
    deleteUser, 
    checkEmail
}