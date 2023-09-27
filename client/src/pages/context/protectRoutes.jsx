import { useContext } from "react";
import { User } from "./context";
import { Outlet, Navigate } from 'react-router-dom';



export default function ProtectRoutes() {
  const user = useContext(User);

  return user==true? <Outlet /> : <Navigate to="/" />;


}