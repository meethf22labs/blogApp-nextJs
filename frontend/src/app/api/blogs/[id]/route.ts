import {db} from "@/index"
import { blogsTable } from "@/db/schema"
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function GET(req: Request, context: {params : { id: string }}){
    try {
       const getBlogById = await db.select().from(blogsTable).where(eq(blogsTable.id, Number(context.params.id)));
       return NextResponse.json(getBlogById, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Internal Server Error', error: String(error) }, { status: 500 });
    }
}