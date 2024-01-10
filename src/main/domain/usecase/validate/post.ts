import { CreatePostUseCaseRequest, DeletePostUseCaseRequest, GetPostByIDUseCaseRequest, UpdatePostUseCaseRequest } from "../ucio/post";

interface CreatePostUseCaseValidateInterface {
    createPost(req: CreatePostUseCaseRequest): Promise<string | null>
}

interface GetPostByIDUseCaseValidateInterface {
    getPostByID(req: GetPostByIDUseCaseRequest): Promise<string | null>
}

interface UpdatePostUseCaseValidateInterface {
    updatePost(req: UpdatePostUseCaseRequest): Promise<string | null>
}

interface DeletePostByIDUseCaseValidateInterface {
    deletePostByID(req: DeletePostUseCaseRequest): Promise<string | null>
}

export {
    CreatePostUseCaseValidateInterface,
    GetPostByIDUseCaseValidateInterface,
    UpdatePostUseCaseValidateInterface,
    DeletePostByIDUseCaseValidateInterface
}