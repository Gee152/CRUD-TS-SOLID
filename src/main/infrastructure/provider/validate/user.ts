import { CreateUserUseCaseRequest, GetUserByIDUseCaseRequest, UpdateUserUseCaseRequest, DeleteUserUseCaseRequest } from "../../../domain/usecase/ucio/user"
import { CreateUserUseCaseValidateInterface, GetUserByIDUseCaseValidateInterface, UpdateValidateValidateInterface, DeleteUserByIDUseCaseValidateInterface } from "../../../domain/usecase/validate/user"
import { checkNumberEmpty, checkStringEmpty, checkLengthPassword } from "../validate/validete"
import { checkEmail } from "../../internal/database/postgres/user"

class CreateUserUseCaseValidate implements CreateUserUseCaseValidateInterface {
    async createUser(req: CreateUserUseCaseRequest): Promise<string | null> {

        if (checkStringEmpty(req.name)) return 'O nome não pode ser vazio.'

        if (checkStringEmpty(req.email)) return 'O e-mail não pode ser vazio'

        if (checkLengthPassword(req.password)) return 'A senha não pode ser vazia'

        if (checkLengthPassword(req.password)) return 'A senha tem que ter mais de 8 caracteres'

        if (await checkEmail(req.email)) return "E-mail já existe!"
        
        return null
    }
}

class GetUserUseCaseValidate implements GetUserByIDUseCaseValidateInterface {
    async getUserByID(req: GetUserByIDUseCaseRequest): Promise<string | null>{
        if (checkNumberEmpty(req.ID)) return 'O identificador não pode ser vazio!'
            return null
    }
}

class UpdateUserUseCaseValidate implements UpdateValidateValidateInterface {
    async updateUser(req: UpdateUserUseCaseRequest): Promise<string | null> {
    
        if (checkNumberEmpty(req.ID)) return 'O identificador não pode ser vazio.'

        if (checkStringEmpty(req.name)) return 'O nome não pode ser vazio.'

        if (checkStringEmpty(req.email)) return 'O e-mail não pode ser vazio'

        if (checkLengthPassword(req.password)) return 'A senha não pode ser vazia' 

        if (checkLengthPassword(req.password)) return 'A senha tem que ter mais de 8 caracteres'

        if (await checkEmail(req.email)) return "E-mail já existe!"
        
        return null
    }
}

class DeleteUserUseCaseValidade implements DeleteUserByIDUseCaseValidateInterface {
    async deleteUserByID(req: DeleteUserUseCaseRequest): Promise<string | null> {
        if(!(await (req.ID))) return 'Usuario já existe!'

        if(checkNumberEmpty((req.ID))) return 'O id não pode ser vazio'
        return null
    }
}

export { 
    CreateUserUseCaseValidate, 
    GetUserUseCaseValidate, 
    UpdateUserUseCaseValidate, 
    DeleteUserUseCaseValidade
}