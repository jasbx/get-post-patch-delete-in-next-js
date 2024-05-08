import { PrismaClient, Blogs } from '@prisma/client';

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const prisma = new PrismaClient();
    const body = await request.json();

    const updatedBlog = await prisma.blogs.update({
        where: {
            id: parseInt(params.id)
        },
        data: {
            title: body.title, // Assuming the title is in the request body
            desc: body.desc // Assuming the title is in the request body
        }
    });

    return Response.json(updatedBlog);
}
