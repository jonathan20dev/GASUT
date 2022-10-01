import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Business/Context/AuthContext";
import { UseAppContext } from "../../Business/Context/UseAppContext";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="text-center">
                        <div className="spinner-border" role="status">
                        </div>
                      </div>;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}
