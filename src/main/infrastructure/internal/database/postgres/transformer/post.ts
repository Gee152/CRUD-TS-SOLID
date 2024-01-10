import { PostEntity } from "../../../../../domain/entity/post";
import { PostModel } from "../model/post";

function toPostEntity(m: PostModel): PostEntity {
    return new PostEntity(m.ID, m.title, m.content, m.createdAt, m.updatedAt)
}

function toPostModel(e: PostEntity): PostModel {
    return new PostModel(e.ID, e.title, e.content, e.createdAt, e.updatedAt)
}

export {
    toPostEntity,
    toPostModel
}