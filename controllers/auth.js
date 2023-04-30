import { googleVerify } from "../helpers/googleVerify.js"


export const AuthRouterPost=async(req,res)=>{

    //Recibimos el token ( Tanto el de google como el manual)
    const {token_id}=req.body

    //TODO: TOKEN GOOGLE  
    //  console.log(token_id)

    res.status(200).send({
        msg:'Todo Ok',
        token:token_id
    })

    //Decodificamos el token
    await googleVerify(token_id)
}