import { PostEntity } from "../../../domain/entity/post";
import { CreatePostUseCaseRepositoryInterface, DeletePostByIDUseCaseRepositoryInterface, GetPostByIDUseCaseRepositoryInterface, UpdateUseCaseRepositoryInterface } from "../../../domain/usecase/repository/post"
import { createPost, getPost, updatePost, deletePost } from "../../internal/database/postgres/post"

class CreatePostUseCaseRepository implements CreatePostUseCaseRepositoryInterface {
    async createPost(metadata: PostEntity): Promise<PostEntity> {
        console.log(metadata, 'metadata')
        return await createPost(metadata)
    }
}

class GetPostUseCaseRepository implements GetPostByIDUseCaseRepositoryInterface {
    async getByIDPost(ID: number): Promise<PostEntity | null> {
        return await getPost(ID)
    }
}

class UpdatePostUseCaseRepository implements UpdateUseCaseRepositoryInterface {
    async getByIDPost(postID: number): Promise<PostEntity | null> {
        return await getPost(postID)
    }
    async updatePost(post: PostEntity): Promise<PostEntity> {
        return await updatePost(post)
    }
}

class DeletePostUseCaseRepository implements DeletePostByIDUseCaseRepositoryInterface {
    async deletePostByID(ID: number): Promise<void> {
        return await deletePost(ID)
    }
}

export {
    CreatePostUseCaseRepository,
    GetPostUseCaseRepository,
    UpdatePostUseCaseRepository,
    DeletePostUseCaseRepository
}