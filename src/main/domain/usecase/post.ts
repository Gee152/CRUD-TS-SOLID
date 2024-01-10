import { PreconditionError, InternalServerError, TAG_INTERNAL_SERVER_ERROR, 
    TAG_PRE_CONDITION_ERROR} from "../entity/error"
import { PostEntity } from "../entity/post"
import { CreatePostUseCaseRepositoryInterface, DeletePostByIDUseCaseRepositoryInterface, 
    GetPostByIDUseCaseRepositoryInterface, UpdateUseCaseRepositoryInterface } from "./repository/post"
import { CreatePostUseCaseRequest, CreatePostUseCaseResponse, GetPostByIDUseCaseRequest, GetPostByIDUseCaseReponse, 
    UpdatePostUseCaseRequest, DeletePostUseCaseRequest, DeletePostUseCaseResponse } from "./ucio/post"
import { CreatePostUseCaseValidateInterface, DeletePostByIDUseCaseValidateInterface, GetPostByIDUseCaseValidateInterface, 
    UpdatePostUseCaseValidateInterface } from "./validate/post"

class CreatePostUseCase {
    public validate: CreatePostUseCaseValidateInterface
    public repository: CreatePostUseCaseRepositoryInterface

    constructor(validate: CreatePostUseCaseValidateInterface, repository: CreatePostUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = repository
    }
    async createPost(req: CreatePostUseCaseRequest): Promise<CreatePostUseCaseResponse> {
        try {
            const errorMessage = await this.validate.createPost(req)
            console.log(req, 'ucio')
            if(!errorMessage){
                const now = new Date()
                const post = new PostEntity(null, req.title, req.content, now, now)
                console.log(post, 'post na domain')
                const data = await this.repository.createPost(post)
                console.log(data, 'Data da domain')
                return new CreatePostUseCaseResponse(data, null)
            }else{
                console.log(TAG_INTERNAL_SERVER_ERROR, errorMessage)
                return new CreatePostUseCaseResponse(null, new PreconditionError(errorMessage))
            }
        }catch(error: any){
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new CreatePostUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

class GetPostUseCase {
    public validate: GetPostByIDUseCaseValidateInterface
    public repository: GetPostByIDUseCaseRepositoryInterface

    constructor(validate: GetPostByIDUseCaseValidateInterface, repository: GetPostByIDUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = repository
    }

    async getPostByID(req: GetPostByIDUseCaseRequest): Promise<GetPostByIDUseCaseReponse> {
        try {
            const errorMessage = await this.validate.getPostByID(req)

            if(!errorMessage){
                const data = await this.repository.getByIDPost(req.ID)
                    return new GetPostByIDUseCaseReponse(data, null)
            }else{
                console.log(TAG_PRE_CONDITION_ERROR, errorMessage)
                return new GetPostByIDUseCaseReponse(null, new PreconditionError(errorMessage))
            }
        }catch(error: any){
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new GetPostByIDUseCaseReponse(null, new InternalServerError(error.message))
        }
    }
}

class UpdatePostUseCase {
    public validate: UpdatePostUseCaseValidateInterface
    public repository: UpdateUseCaseRepositoryInterface

    constructor(validate: UpdatePostUseCaseValidateInterface, repository: UpdateUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = repository
    }

    async updatePost(req: UpdatePostUseCaseRequest): Promise<GetPostByIDUseCaseReponse> {
        try {
            const errorMessage = await this.validate.updatePost(req)

            if(!errorMessage){
                const now = new Date()
                const entity = new PostEntity(req.ID, req.title, req.content, now, now)
                await this.repository.updatePost(entity)

                return new GetPostByIDUseCaseReponse(entity, null)
            }else{
                console.log(TAG_PRE_CONDITION_ERROR, errorMessage)
                return new GetPostByIDUseCaseReponse(null, new PreconditionError(errorMessage))
            }
        }catch(error: any){
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new GetPostByIDUseCaseReponse(null, new InternalServerError(error.message))
        }
    }
}

class DeletePostUseCase {
    public validate: DeletePostByIDUseCaseValidateInterface
    public repository: DeletePostByIDUseCaseRepositoryInterface

    constructor(validate: DeletePostByIDUseCaseValidateInterface, repository: DeletePostByIDUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = repository
    }

    async deletePostByID(req: DeletePostUseCaseRequest): Promise<DeletePostUseCaseResponse> {
        try {
            const errorMessage = await this.validate.deletePostByID(req)

            if(!errorMessage){
                await this.repository.deletePostByID(req.ID)

                return new DeletePostUseCaseResponse(null)
            }else{
                console.log(TAG_PRE_CONDITION_ERROR, errorMessage)
                return new DeletePostUseCaseResponse(new PreconditionError(errorMessage))
            }
        }catch(error: any){
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new DeletePostUseCaseResponse(new InternalServerError(error.message))
        }
    }
}

export {
    CreatePostUseCase,
    GetPostUseCase,
    UpdatePostUseCase,
    DeletePostUseCase
}