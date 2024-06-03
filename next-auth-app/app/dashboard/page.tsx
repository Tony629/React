
import { getServerSession } from "next-auth/next"


export default async function Page() {
    const session = await getServerSession();

    console.log("========session in dashboard===========")
    console.log(session)

    return (
        <>
            <h1>Dashhboard</h1>

        </>
    )
}