import { PostEntity } from "../../entity/post"
import { ErrorEntity } from "../../entity/error"

class CreatePostUseCaseRequest {
    public ID: number | null
    public title: string
    public content: string

    constructor(ID: number | null, title: string, content: string) {
        this.ID = ID
        this.title = title
        this.content = content
    }
}

class CreatePostUseCaseResponse {
    public post: PostEntity | null
    public error: ErrorEntity | null

    constructor(post: PostEntity | null, error: ErrorEntity | null) {
        this.post = post
        this.error = error
    }
}

class GetPostByIDUseCaseRequest {
    public ID: number

    constructor(ID: number) {
        this.ID = ID
    }
}

class GetPostByIDUseCaseReponse {
    public post: PostEntity | null
    public error: ErrorEntity | null

    constructor(post: PostEntity | null, error: ErrorEntity | null) {
        this.post = post
        this.error = error
    }
}

class UpdatePostUseCaseRequest {
    public ID: number
    public title: string
    public content: string

    constructor(ID: number, title: string, content: string) {
        this.ID = ID
        this.title = title
        this.content = content
    }
}

class UpdatePostUseCaseReponse {
    public post: PostEntity | null
    public error: ErrorEntity | null

    constructor(post: PostEntity | null, error: ErrorEntity | null) {
        this.post = post
        this.error = error
    }
}

class DeletePostUseCaseRequest {
    public ID: number

    constructor(ID: number) {
        this.ID = ID
    }
}

class DeletePostUseCaseResponse {
    public error: ErrorEntity | null

    constructor(error: ErrorEntity | null) {
        this.error = error
    }
}

export {
    CreatePostUseCaseRequest,
    CreatePostUseCaseResponse,
    GetPostByIDUseCaseRequest,
    GetPostByIDUseCaseReponse,
    UpdatePostUseCaseRequest,
    UpdatePostUseCaseReponse,
    DeletePostUseCaseRequest,
    DeletePostUseCaseResponse
}