import { blogsTable } from "@/db/schema";
import {db} from "@/index";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const allBlogs = await db.select().from(blogsTable);
        return NextResponse.json(allBlogs, { status: 200 });
    }
    catch(error){
        return NextResponse.json({ message: 'Internal Server Error', error: String(error) }, { status: 500 });
    }
}

