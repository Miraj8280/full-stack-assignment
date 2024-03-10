// Importing necessary dependencies
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../contexts/AuthContext";

// Creating a custom hook named useSignup
const useSignup = () => {
  // Initializing state variables using the useState hook
  const [loading, setLoading] = useState(false);

  // Accessing the setAuthUser function from the AuthContext
  const { setAuthUser } = useAuthContext();

  // Defining the signup function which handles the signup process
  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    // Validating input data using handleInputErrors function
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });

    // If input validation fails, return from the function
    if (!success) {
      return;
    }

    // Set loading to true to indicate that the signup process is in progress
    setLoading(true);

    try {
      // Sending a POST request to the server's signup endpoint
      const res = await fetch("api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      // Parsing the response data
      const data = await res.json();

      // If the server returns an error, throw an error
      if (data.error) {
        throw new Error(data.error);
      }

      // Save user data in localStorage
      localStorage.setItem("chat-user", JSON.stringify(data));

      // Set the authenticated user using the setAuthUser function from the context
      setAuthUser(data);
    } catch (error) {
      // Display an error toast if there's an error during the signup process
      toast.error(error.message);
    } finally {
      // Set loading back to false after signup process completion or failure
      setLoading(false);
    }
  };

  // Return loading state and the signup function
  return { loading, signup };
};

// Exporting the useSignup hook as the default export
export default useSignup;

// Defining a helper function handleInputErrors to validate input data
const handleInputErrors = ({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  // Check if any of the required fields is empty
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }

  // Check if the passwords match
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  // Check if the password length is at least 6 characters
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  // If all checks pass, return true
  return true;
};
