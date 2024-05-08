import { PrismaClient } from '@prisma/client';

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const prisma = new PrismaClient();

    const deletedBlog = await prisma.blogs.delete({
        where: {
            id: parseInt(params.id)
        }
    });

    return Response.json(deletedBlog);
}
