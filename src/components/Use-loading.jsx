import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useLoading = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    
    const timer = setTimeout(() => {
      setLoading(false); // Hide loading screen after the simulated loading duration
    }, 2000); // Simulate loading duration

    return () => clearTimeout(timer);
  }, [location]);

  return loading; // Return the loading state
};

export default useLoading;