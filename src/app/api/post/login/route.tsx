import { PrismaClient, User } from '@prisma/client'
import { LoginInterface } from '../../validate/validations';
import  Jwt  from 'jsonwebtoken';
const prisma = new PrismaClient()
export async function POST(request: Request) {
try{
    const body = await request.json() as LoginInterface;
    const user= await prisma.user.findUnique({ where:{ email:body.email}})
    if (!user){
        return new  Response (JSON.stringify({massg:'you dont have acount '}),{status:400})
    }
const jwtPayload={
    id:user.id,
    email:user.email,
    password:user.password
}
// const jwtweb= jwt.sign(jwtPayload,"priatetoken293993",{expiresIn:'20d'})
//     const passwordmatch = await bcrypt.compare(body.password, user.password);
// if(!passwordmatch){
//     return new  Response (JSON.stringify({massg:'you password incorrect '}),{status:400})   
// }

const token=Jwt.sign(jwtPayload,process.env.JWT_SECRET as string,{expiresIn:'30d'});
    return new Response(JSON.stringify(
        {massge:'login succesfull',token}
    ), {
        status: 201
    }

    )
}
catch(error){
return Response.json({masssge:"internal server error"},{status:500})
}
}
