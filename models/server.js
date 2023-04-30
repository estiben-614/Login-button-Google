import express from "express";
import { AuthRouter } from "../routes/auth.js";


export class Servidor{
    constructor(){
        //Cada vez que se crea una clase server se ejecutan estas variables
        this.app= express()
        
        this.port = 8080

        //Conectar  ala base de datos
        this.conectarDB()

        //rutas
        this.paths={
            auth:'/auth'
        }
       
        //Middlewares : Funciones que se van a levantar cuando se ejecute el servidor 
        this.middelwares()
        
        //Rutas de aplicación
        this.routes()

        //Inicialización Sockets.io
        this.sockets()
    }

    async conectarDB(){
       
    }
    middelwares(){
        

        //Lectura y parseo del body, recibe la info de los post,put, etc
        this.app.use(express.json())

        //Directorio publico
        this.app.use(express.static('public'))

       
    }

    routes(){
        this.app.use('/auth',AuthRouter)

    }

    sockets(){
        
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
          })
    }
}