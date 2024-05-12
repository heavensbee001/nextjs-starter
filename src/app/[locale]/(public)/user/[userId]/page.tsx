"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import H1 from "@/components/ui/text/H1";
import LoadingAnimation from "@/components/ui/text/LoadingAnimation";
import { useState, useEffect } from "react";

export default function UserPage({ params }: { params: { userId: string } }) {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/${params.userId}`
      );
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const isLoading = userData === null;

  return (
    <main className="min-h-screen">
      <div className="container w-full max-w-4xl mx-auto pt-20">
        <section className="flex items-center">
          <Avatar className="h-20 w-20 mr-4">
            <AvatarImage src={userData?.profile?.picture} />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          {!isLoading ? (
            <H1>{`${userData?.profile?.firstName} ${userData?.profile?.lastName}`}</H1>
          ) : (
            <LoadingAnimation lines={2} className="max-w-2xl" />
          )}
        </section>
      </div>
    </main>
  );
}
