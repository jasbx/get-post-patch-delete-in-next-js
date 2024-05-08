import { PrismaClient, Blogs } from '@prisma/client';


export async function GET(request:Request,
    { params }:
    { params: { id:string }}) {

    const prisma = new PrismaClient();
    const blogs:Blogs[]=await prisma.blogs.findMany({
        where:{
            id:parseInt(params.id)
        }
    })



    return  Response.json(blogs);
}
