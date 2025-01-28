'use client'
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";


type SignInPageProps = {
  searchParams: {
    redirectUrl: string;
  };
};

export default function SignInPage({ searchParams: { } }: SignInPageProps) {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <SignIn signUpUrl="/sign-up" />
        </div>
      </div>
    </section>
  );
}