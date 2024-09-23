"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const RegisterButton = ({ classSlug }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const router = useRouter();

  const handleAction = () => {
    setIsModalOpen(true); // Open modal on button click
  };

  const handleConfirm = async () => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/olcon/joinolcon`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
        }),
      });

      if (!response.ok) {
        throw new Error("Registration failed. Please try again.");
      }

      // Redirect to success page or OLCon page after successful registration
      router.push(`/olcon/`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setIsModalOpen(false); // Close modal after submission
    }
  };

  return (
    <>
      {/* Register Button */}
      <Button variant="secondary" onClick={handleAction}>
        Join OLCon
      </Button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4">Register for OLCon</h2>

            {/* Username Field */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Enter your username"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-sm text-red-500">{error}</p>}

            {/* Buttons */}
            <div className="flex justify-end space-x-3">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleConfirm}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterButton;
