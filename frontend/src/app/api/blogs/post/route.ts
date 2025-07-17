import {db} from "@/index";
import { NextResponse } from "next/server";
import { blogsTable } from "@/db/schema";

export async function POST(req: Request){
    const body = await req.json()
    try {
        const createBlog = await db.insert(blogsTable).values({
            author: body.author,
            title: body.title,
            shortNote: body.shortNote,
            content: body.content,
            image: body.image,
            publishedDate: body.publishedDate,
        });
        return NextResponse.json({"message": "Blog Created Successfully"}, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Internal Server Error', error: String(error) }, { status: 500 });
    }
}
