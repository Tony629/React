import { getServerSession } from "next-auth/next";
import { handler } from "@/app/api/auth/[...nextauth]/route";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export default async function Page(req: NextRequest) {
  const session: any = await getServerSession(handler);

  console.log("========session in dashboard===========");
  console.log(session);
  console.log(session?.user);

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET
  })

  console.log(JSON.stringify(token))

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
}
