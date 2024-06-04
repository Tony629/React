import { withAuth, NextRequestWithAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
    function middleware(request: NextRequestWithAuth) {
        console.log("middleware request url:" + request.nextUrl.pathname.toString())
        console.log("middleware token:" + JSON.stringify(request.nextauth.token))
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        }
    }
)

export const config = {
    matcher: ['/dashboard', '/settings']
}