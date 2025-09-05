"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-3xl">
            <Button
            onClick={()=>authClient.signOut}
            className="w-full"
            >
                Sign Out
            </Button >
        </div>
    </div>
  );
}
