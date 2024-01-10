import { UserEntity } from "../../../../../domain/entity/user";
import { UserModel } from "../model/user";

function toUserEntity(m: UserModel): UserEntity {
    return new UserEntity(m.ID, m.name, m.email, m.password, m.createdAt, m.updatedAt)
}

function toUserModel(e: UserEntity): UserModel{
    return new UserModel(e.ID, e.name, e.email, e.password, e.createdAt, e.updatedAt)
}

export { 
    toUserEntity, 
    toUserModel 
}