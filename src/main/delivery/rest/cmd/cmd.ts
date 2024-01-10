import  express   from 'express'
import http from 'http'

import { Router } from '../router'
import { PORT } from '../../rest/config/config'

class CmdRest {
    private app: express.Application

    constructor() {
        this.app = express()
        this.router()
    }

    private router() {
        this.app.use(express.json())
        new Router(this.app)
    }

    public server(): void {
        const server = http.createServer(this.app)

        server.listen(PORT, () => {
            console.log(`app-rest is running... at port ${PORT}`)
        })
    }
}

export { 
    CmdRest 
}