import { PrismaClient,Blogs } from "@prisma/client"

export async function POST(request:Request){
    const body =await request.json()
    const prisma=new PrismaClient();
    const newBolgs:Blogs= await prisma.blogs.create({
        data:{
            id:body.id,
            title:body.title,
            desc:body.desc,
        }

    })
    return new Response( JSON.stringify(newBolgs))

}
