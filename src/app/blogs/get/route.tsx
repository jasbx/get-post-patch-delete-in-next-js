
import { PrismaClient,Blogs} from '@prisma/client';
export async function GET(request:Request){
    const prisma=new PrismaClient()
    const blogs:Blogs[]=await prisma.blogs.findMany()
    prisma.$disconnect()


    return new Response(JSON.stringify(blogs))
}