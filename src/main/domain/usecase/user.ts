import { UserEntity } from "../entity/user";
import { PreconditionError, InternalServerError, TAG_INTERNAL_SERVER_ERROR, TAG_PRE_CONDITION_ERROR} from "../entity/error"

import { CreateUserUseCaseRequest, CreateUserUseCaseResponse, GetUserByIDUseCaseRequest, GetUserByIDUseCaseResponse, 
    UpdateUserUseCaseRequest, UpdateUserUseCaseResponse, DeleteUserUseCaseRequest, DeleteUserUseCaseResponse} from "./ucio/user"
import { CreateUserUseCaseRepositoryInterface, GetUserByIDUseCaseRepositoryInterface,
    UpdateUserCaseRepositoryInterface ,DeleteUserByIDUseCaseRepositoryInterface } from "./repository/user";
import { CreateUserUseCaseValidateInterface, GetUserByIDUseCaseValidateInterface, 
    UpdateValidateValidateInterface, DeleteUserByIDUseCaseValidateInterface} from "./validate/user"

class CreateUserUseCase {
    public validate: CreateUserUseCaseValidateInterface
    public repository: CreateUserUseCaseRepositoryInterface

    constructor(validate: CreateUserUseCaseValidateInterface, repository: CreateUserUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = repository
    }
    async createUser(req: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
        try{
            const errorMessage = await this.validate.createUser(req)
    
            if(!errorMessage) {
                const now = new Date()
                const user = new UserEntity(null, req.name, req.email, req.password, now,now) 
                console.log(user)
                const data = await this.repository.createUser(user)
                return new CreateUserUseCaseResponse(data, null)
            }else{
                console.log(TAG_INTERNAL_SERVER_ERROR, errorMessage)
                return new CreateUserUseCaseResponse(null, new PreconditionError(errorMessage))
            }
        }catch(error: any){
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new CreateUserUseCaseResponse(null, new InternalServerError(error.message))
        }
     }
}

class GetUserCase {
    public validate: GetUserByIDUseCaseValidateInterface
    public repository: GetUserByIDUseCaseRepositoryInterface

    constructor(validate: GetUserByIDUseCaseValidateInterface, repository: GetUserByIDUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = repository
    }

    async getUserByID(req: GetUserByIDUseCaseRequest): Promise<GetUserByIDUseCaseResponse> {
        try {
            const errorMessage = await this.validate.getUserByID(req)
    
            if(!errorMessage){
                const data = await this.repository.getUserByID(req.ID)
                    return new GetUserByIDUseCaseResponse(data, null)
            }else{
                console.log(TAG_PRE_CONDITION_ERROR, errorMessage)
                return new GetUserByIDUseCaseResponse(null, new PreconditionError(errorMessage))
            }
        } catch (error: any){
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new GetUserByIDUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

class UpdateUserUseCase {
    public validate: UpdateValidateValidateInterface
    public repository: UpdateUserCaseRepositoryInterface
  
    constructor(validate: UpdateValidateValidateInterface, repository: UpdateUserCaseRepositoryInterface) {
      this.validate = validate
      this.repository = repository
    }

    async updateUser(req: UpdateUserUseCaseRequest): Promise<UpdateUserUseCaseResponse> {
        try {
            const errorMessage = await this.validate.updateUser(req)
    
            if(!errorMessage){
                const now = new Date()
                const entity = new UserEntity(null, req.name, req.email, req.password, now, now)
                await this.repository.updateUser(entity)
        
                return new UpdateUserUseCaseResponse(entity, null)
            }else{
                console.log(TAG_PRE_CONDITION_ERROR, errorMessage)
                return new UpdateUserUseCaseResponse(null, new PreconditionError(errorMessage))
            }
        }catch (error: any){
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new UpdateUserUseCaseResponse(null, new InternalServerError(error.message))
        }
      }
  }

class DeleteUserUseCase {
    public validate: DeleteUserByIDUseCaseValidateInterface
    public repository: DeleteUserByIDUseCaseRepositoryInterface

    constructor(validate: DeleteUserByIDUseCaseValidateInterface, repository: DeleteUserByIDUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = repository
    }

    async deleteUserByID(req: DeleteUserUseCaseRequest): Promise<DeleteUserUseCaseResponse> {
        try {
            const errorMessage = await this.validate.deleteUserByID(req)
    
            if(!errorMessage){
                await this.repository.deleteUserByID(req.ID)
                
                return new DeleteUserUseCaseResponse(null)
            }else{
                console.log(TAG_PRE_CONDITION_ERROR, errorMessage)
                return new DeleteUserUseCaseResponse(new PreconditionError(errorMessage))
            }
        }catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new DeleteUserUseCaseResponse(new InternalServerError(error.message))
        }
    }
}

export { 
    CreateUserUseCase, 
    GetUserCase, 
    UpdateUserUseCase, 
    DeleteUserUseCase
}