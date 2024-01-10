import express from 'express'
import { UserRouter } from './user'
import { PostRouter } from './post'

class Router {

    constructor(app: express.Router) {
        app.use(new UserRouter().getRouter())
        app.use(new PostRouter().getRouter())
    }
}

export { 
    Router
}