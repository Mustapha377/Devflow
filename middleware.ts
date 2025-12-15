import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isOnSignIn = req.nextUrl.pathname.startsWith("/sign-in");

  if (!isLoggedIn && !isOnSignIn) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  if (isLoggedIn && isOnSignIn) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
};
