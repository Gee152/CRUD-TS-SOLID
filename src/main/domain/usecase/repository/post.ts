import { PostEntity } from "../../entity/post"

interface CreatePostUseCaseRepositoryInterface {
    createPost(metadata: PostEntity): Promise<PostEntity>
}

interface GetPostByIDUseCaseRepositoryInterface {
    getByIDPost(ID: number): Promise<PostEntity | null>
}

interface UpdateUseCaseRepositoryInterface {
    getByIDPost(ID: number): Promise<PostEntity | null>
    updatePost(post: PostEntity): Promise<PostEntity>
}

interface DeletePostByIDUseCaseRepositoryInterface {
    deletePostByID(ID: number): Promise<void>
}

export {
    CreatePostUseCaseRepositoryInterface,
    GetPostByIDUseCaseRepositoryInterface,
    UpdateUseCaseRepositoryInterface,
    DeletePostByIDUseCaseRepositoryInterface
}
