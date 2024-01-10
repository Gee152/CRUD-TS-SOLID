import { Request, Response } from 'express'
import { SuccessResponse } from '../response/response'
import { CreatePostUseCaseRequest, DeletePostUseCaseRequest, GetPostByIDUseCaseRequest, UpdatePostUseCaseRequest } from '../../../domain/usecase/ucio/post'
import { CreatePostUseCaseValidate, DeletePostUseCaeValidate, GetPostUseCaseValidate, UpdatePostUseCaseValidate } from '../../../infrastructure/provider/validate/post'
import { CreatePostUseCaseRepository, DeletePostUseCaseRepository, GetPostUseCaseRepository, UpdatePostUseCaseRepository } from '../../../infrastructure/provider/repository/post'
import { CreatePostUseCase, DeletePostUseCase, GetPostUseCase, UpdatePostUseCase } from '../../../domain/usecase/post'

class CreatePostController {
    async createPostController(req: Request, res: Response ): Promise<void> {
        
        const { ID, title, content } = req.body
        console.log(req.body, 'controler')
        const ucReq = new CreatePostUseCaseRequest(null, title, content)
    
        const validate = new CreatePostUseCaseValidate()
        const repository = new CreatePostUseCaseRepository()

        const usecase = new CreatePostUseCase(validate, repository)

        const ucRes = await usecase.createPost(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

class GetPostController {
    async getPostController(req: Request, res: Response): Promise<void> {
        const { ID } = req.body

        const ucReq = new GetPostByIDUseCaseRequest(ID)

        const validate = new GetPostUseCaseValidate()
        const repository = new GetPostUseCaseRepository()

        const usecase = new GetPostUseCase(validate, repository)

        const ucRes = await usecase.getPostByID(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

class UpdatePostController {
    async updatePostController (req: Request, res: Response): Promise<void> {
        const { ID, title, content } = req.body

        const ucReq = new UpdatePostUseCaseRequest(ID, title, content)
     
        const validate = new UpdatePostUseCaseValidate()
        const repository = new UpdatePostUseCaseRepository()

        const usecase = new UpdatePostUseCase(validate, repository)

        const ucRes = await usecase.updatePost(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

class DeletePostController {
    async deletePostController (req: Request, res: Response): Promise<void> {
        const { ID } = req.body

        const ucReq = new DeletePostUseCaseRequest(ID)

        const validate = new DeletePostUseCaeValidate()
        const repository = new DeletePostUseCaseRepository()

        const usecase = new DeletePostUseCase(validate, repository)

        const ucRes = await usecase.deletePostByID(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

export {
    CreatePostController,
    GetPostController,
    UpdatePostController,
    DeletePostController
}