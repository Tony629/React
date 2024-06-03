'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

export default function Page() {
    const { data: session, status: sessionStatus } = useSession();
    console.log(session);
    console.log(session?.user?.name)
    return (
        <h1>Register</h1>
    )
}