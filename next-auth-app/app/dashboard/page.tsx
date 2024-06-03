
import { getServerSession } from "next-auth"
import { handler } from '@/app/api/auth/[...nextauth]/route'


export default async function Page() {
    // const session = await getServerSession(handler)

    // console.log("========session in dashboard===========")
    // console.log(session)

    return (
        <>
            <h1>Dashhboard</h1>

        </>
    )
}