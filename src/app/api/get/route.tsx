import { User,PrismaClient } from "@prisma/client";
export async function GET(request:Request){
    const prisma=new PrismaClient()
    const users:User[]=await prisma.user.findMany()
    prisma.$disconnect()


    return new Response(JSON.stringify(users))





}