import Image from "next/image";
import React from "react";

const SocialAuthForm = () => {
  const buttonClasss =
    "flex-center background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5";
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <button className={buttonClasss}>
        <Image
          src="/icons/github.svg"
          alt="Github logo "
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>log in with Github</span>
      </button>
      <button className={buttonClasss}>
        <Image
          src="/icons/google.svg"
          alt="google logo "
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>log in with google</span>
      </button>
    </div>
  );
};

export default SocialAuthForm;
