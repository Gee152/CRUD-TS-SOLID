import { Router } from 'express'
import { CreateUserController, GetUserController, UpdateUserController, DeleteUserController} from '../controller/user'

class UserRouter {
    private router: Router

    constructor() {
        this.router = Router()
        this.router.post('/createUser', new CreateUserController().createUserController)
        this.router.post('/getUser', new GetUserController().getUserController)
        this.router.post('/updateUser', new UpdateUserController().updateUserController)
        this.router.post('/deleteUser', new DeleteUserController().deleteUserController)
    }

    getRouter(): any {
        return this.router
    }
}

export { 
    UserRouter 
}