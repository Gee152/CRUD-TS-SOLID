import { Router } from 'express'
import { CreatePostController, DeletePostController, GetPostController, UpdatePostController } from '../controller/post'

class PostRouter {
    private router: Router

   constructor() {
        this.router = Router()
        this.router.post('/createPost', new CreatePostController().createPostController)
        this.router.post('/getPost', new GetPostController().getPostController)
        this.router.post('/updatePost', new UpdatePostController().updatePostController)
        this.router.post('/deletePost', new DeletePostController().deletePostController)
    }
    getRouter(): any {
        return this.router
    }
}

export {
    PostRouter
}