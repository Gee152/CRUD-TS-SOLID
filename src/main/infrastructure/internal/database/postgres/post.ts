import { PostEntity } from "../../../../domain/entity/post";
import { Connection } from "./connection";
import { PostModel } from "./model/post";

import { toPostEntity, toPostModel } from "./transformer/post";

async function createPost(post: PostEntity): Promise<PostEntity> {
    const model = toPostModel(post)
    const repository = await Connection.getRepository(PostModel)
    const modell = await repository.save(model)
        return toPostEntity(modell)
}

async function getPost(postID: number): Promise<PostEntity | null> {
    const repository = await Connection.getRepository(PostModel)
    const post = await repository.findOne(({where: {ID: postID}}))
        return post ? toPostEntity(post) : null
}

async function updatePost(post: PostEntity): Promise<PostEntity> {
    const repository = await Connection.getRepository(PostModel)
    const model = toPostModel(post)
    const result = await repository.save(model)
        return toPostEntity(result)
}

async function deletePost(postID: number): Promise<void> {
    const repository = await Connection.getRepository(PostModel)
    await repository.delete(postID)
}

export {
    createPost,
    getPost,
    updatePost,
    deletePost
}