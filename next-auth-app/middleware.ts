import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { handler } from '@/app/api/auth/[...nextauth]/route'

export async function middleware(request: NextRequest) {
    // const session = await getServerSession(handler)
    // console.log("===session===")
    // console.log(session)\

    console.log("=================")

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*']
}