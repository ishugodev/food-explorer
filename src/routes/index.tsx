import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { api } from "../services/api";
import { useAuth } from "../hook/auth";

import { USER_ROLE } from "../utils/role";

import { CustomerRoutes } from "./customer.routes";
import { AdminRoutes } from "./admin.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user, signOut } = useAuth();

  useEffect(() => {
    const checkUserValidated = async () => {
      try {
        await api.get('/users/validated');
      } catch {
        signOut();
      }
    };

    checkUserValidated();
  }, []);

  function AccessRoute() {
    switch (user!.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />;
      default:
        return <AuthRoutes />;
    }
  }

  return (
    <BrowserRouter>
      {user ? <AccessRoute /> : <AuthRoutes />}
    </BrowserRouter>
  );
}
