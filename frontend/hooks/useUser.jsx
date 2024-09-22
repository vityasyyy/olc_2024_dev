import { useEffect, useState } from "react";

export default function useUser() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchUser() {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/validate`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.ok) {
        setLoggedIn(true);
      }
      setLoading(false);
    }

    fetchUser();
  }, []);

  return [loading, loggedIn];
}
