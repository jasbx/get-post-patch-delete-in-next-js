import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()
export async function POST(request: Request) {
    const body = await request.json();

    const newuser:User = await prisma.user.create({
        data: {
            id:body.id,
            username:body.username,
            email:body.email,
            password: body.password,
        }
    })



    return new Response(JSON.stringify(newuser), {
        status: 201
    }

    )
}
