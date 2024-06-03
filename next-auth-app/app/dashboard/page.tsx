import { getServerSession } from "next-auth/next";
import { handler } from "@/app/api/auth/[...nextauth]/route";

export default async function Page() {
  const session: any = await getServerSession(handler);

  console.log("========session in dashboard===========");
  console.log(session);
  console.log(session?.user);

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
}
