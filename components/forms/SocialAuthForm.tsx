"use client";

import { signIn } from "next-auth/react";
import { toast } from "@/hooks/use-toast";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const SocialAuthForm = () => {
  const buttonClasss =
    "flex-center background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      const result = await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: false,
      });

      if (result?.error) {
        // Handle specific error types
        const errorMessage =
          {
            OAuthSignin: "Error constructing OAuth sign-in URL",
            OAuthCallback: "Error handling OAuth callback",
            OAuthCreateAccount: "Could not create OAuth provider account",
            EmailCreateAccount: "Could not create email provider account",
            Callback: "Error in callback handler",
            OAuthAccountNotLinked:
              "Email already associated with another account",
            SessionRequired: "Please sign in to access this page",
            Default: "Unable to sign in",
          }[result.error] || result.error;

        toast({
          title: "Sign-in failed",
          description: result.error,
          variant: "destructive",
        });
      } else if (result?.url) {
        window.location.href = result.url;
      }
    } catch (error) {
      toast({
        title: "Sign-in failed",
        description:
          error instanceof Error
            ? error.message
            : "An error occurred during sign-in",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClasss} onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          alt="Github logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with GitHub</span>
      </Button>

      <Button className={buttonClasss} onClick={() => handleSignIn("google")}>
        <Image
          src="/icons/google.svg"
          alt="Google logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
