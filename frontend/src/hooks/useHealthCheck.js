import { useEffect } from "react";

const useHealthCheck = () => {
   useEffect(() => {
      const fetchHealth = async () => {
         try {
            const response = await fetch("/api/health");
            const data = await response.json();
            console.log(JSON.stringify(data));
         } catch (error) {
            console.log("NOK", error);
         }
      };

      fetchHealth();
   }, []);
};

export default useHealthCheck;
