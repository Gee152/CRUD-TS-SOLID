import { Request, Response } from 'express'
import { SuccessResponse } from '../response/response'
import { CreateUserUseCaseRequest, DeleteUserUseCaseRequest, GetUserByIDUseCaseRequest, UpdateUserUseCaseRequest } from '../../../domain/usecase/ucio/user'
import { CreateUserUseCaseValidate, DeleteUserUseCaseValidade, GetUserUseCaseValidate, UpdateUserUseCaseValidate } from '../../../infrastructure/provider/validate/user'
import { CreateUserUseCaseRepository, DeleteUserUseCaseRepository, GetUserUseCaseRepository, UpdateUserUseCaseRepository } from '../../../infrastructure/provider/repository/user'
import { CreateUserUseCase, GetUserCase, UpdateUserUseCase, DeleteUserUseCase} from '../../../domain/usecase/user'

class CreateUserController {
 async createUserController(req: Request, res: Response): Promise<void> {
        
    const { name, email, password } = req.body
    
    const ucReq = new CreateUserUseCaseRequest(null,name, email, password)
    
    const validate = new CreateUserUseCaseValidate()
    const repository = new CreateUserUseCaseRepository()
    
    const usecase = new CreateUserUseCase(validate, repository)

    const ucRes = await usecase.createUser(ucReq)

    new SuccessResponse().success(res, ucRes)
 }
}

class GetUserController {
    async getUserController(req: Request, res: Response): Promise<void> {
        const { ID } = req.body

        const ucReq = new GetUserByIDUseCaseRequest(ID)

        const validate = new GetUserUseCaseValidate()
        const repository = new GetUserUseCaseRepository()

        const usecase = new GetUserCase(validate, repository)

        const ucRes = await usecase.getUserByID(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

class UpdateUserController {
    async updateUserController (req: Request, res: Response): Promise<void> {
       const { ID, name, email, password } = req.body
   
       const ucReq = new UpdateUserUseCaseRequest(ID, name, email, password)
   
       const validate = new UpdateUserUseCaseValidate()
       const repository = new UpdateUserUseCaseRepository()

       const usecase = new UpdateUserUseCase(validate, repository)
        
       const ucRes = await usecase.updateUser(ucReq)

       new SuccessResponse().success(res, ucRes)
    }
}

class DeleteUserController {
    async deleteUserController (req: Request, res: Response): Promise<void> {
        const { ID } = req.body

        const ucReq = new DeleteUserUseCaseRequest(ID) 

        const validete = new DeleteUserUseCaseValidade()
        const repository = new DeleteUserUseCaseRepository()

        const usecase = new DeleteUserUseCase(validete, repository)

        const ucRes = await usecase.deleteUserByID(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

export {
    CreateUserController, 
    GetUserController, 
    UpdateUserController, 
    DeleteUserController
}