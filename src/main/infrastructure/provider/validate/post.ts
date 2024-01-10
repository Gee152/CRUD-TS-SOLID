import { CreatePostUseCaseRequest, DeletePostUseCaseRequest, GetPostByIDUseCaseRequest, UpdatePostUseCaseRequest } from "../../../domain/usecase/ucio/post";
import { CreatePostUseCaseValidateInterface, DeletePostByIDUseCaseValidateInterface, GetPostByIDUseCaseValidateInterface, UpdatePostUseCaseValidateInterface } from "../../../domain/usecase/validate/post";
import { checkLengthContent, checkPostStringEmpty } from "../validate/validatePost"

class CreatePostUseCaseValidate implements CreatePostUseCaseValidateInterface {
    async createPost(req:CreatePostUseCaseRequest): Promise<string | null> {
        console.log(req, 'validate da infra') 
        if(checkLengthContent(req.content)) return 'O Post não pode ser vazio!'
            return null
    }
}

class GetPostUseCaseValidate implements GetPostByIDUseCaseValidateInterface {
    async getPostByID(req:GetPostByIDUseCaseRequest): Promise<string | null> {
        
        if (checkPostStringEmpty(req.ID)) return 'O identificador não pode ser vazio.'
            return null
    }
}

class UpdatePostUseCaseValidate implements UpdatePostUseCaseValidateInterface {
    async updatePost(req: UpdatePostUseCaseRequest): Promise<string | null> {
        
        if(checkLengthContent(req.content)) return 'O Post não pode ser vazio!'
             return null
    }
}

class DeletePostUseCaeValidate implements DeletePostByIDUseCaseValidateInterface {
    async deletePostByID(req: DeletePostUseCaseRequest): Promise<string | null> {
        if(!(await (req.ID))) return 'Post já existe'

        if(checkPostStringEmpty((req.ID))) return 'O id não pode ser vazio'
            return null
        }
}

export {
    CreatePostUseCaseValidate,
    GetPostUseCaseValidate,
    UpdatePostUseCaseValidate,
    DeletePostUseCaeValidate
}