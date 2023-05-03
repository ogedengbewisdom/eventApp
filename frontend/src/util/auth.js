import { redirect } from "react-router-dom";

export const getTokenDuration = () => {
    const storedTime = localStorage.getItem("expiration");
    const loginTime = new Date(storedTime);
    const now = new Date();
    const duration = loginTime.getTime() - now.getTime();
    return duration;
}

export const getAuthToken = () => {
   const token = localStorage.getItem("token");

   if (!token) {
    return null;
   }
   
   const tokenDuration = getTokenDuration()
   if (tokenDuration < 0) {
    return 'EXPIRED';
   }

   return token;
}

export const tokenLoader = () => {
    const token = getAuthToken();
    return token;
}

export const checkAuthLoader = () => {
    const token = getAuthToken();
    if (!token) {
        return redirect("/auth");
    }
    return token;
}