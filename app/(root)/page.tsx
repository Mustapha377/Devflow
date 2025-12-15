import React from "react";
import { auth, signOut } from "@/auth"; // Import signOut from @/auth, not next-auth/react
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  console.log("session", session);

  return (
    <>
      <h1 className="h1-bold flex-center">Welcome to the world of Next.js</h1>
      {session ? (
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: ROUTES.SIGN_IN });
          }}
          className="px-10 pt-[100px]"
        >
          <Button type="submit">Log out</Button>
        </form>
      ) : (
        <p>Not logged in</p>
      )}
    </>
  );
};

export default Home;
