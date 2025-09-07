"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
export const HomeView = () => {
  const router = useRouter();
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <h1>Welcome to the Home Page</h1>
        <div>
            <Button
              onClick={() => {
                authClient.signOut();
                router.push("/sign-in");
              }}
            >
              Sign-out
            </Button>
        </div>
      </div>
    </div>
  );
};
