import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import hook to access location

const useLoading = () => {
  const [loading, setLoading] = useState(true); // State to track loading status
  const location = useLocation(); // Get current location

  useEffect(() => {
    setLoading(true); // Set loading to true when location changes
    
    const timer = setTimeout(() => {
      setLoading(false); // Hide loading screen after the simulated loading duration
    }, 2000); // Simulate loading duration of 2 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [location]); // Run effect when location changes

  return loading; // Return the loading state
};

export default useLoading;