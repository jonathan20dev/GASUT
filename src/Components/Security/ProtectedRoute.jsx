import { Navigate } from "react-router-dom";
import { useAuth } from "../../Business/Context/AuthContext";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div className="text-center">
                        <div className="spinner-border" role="status">
                        </div>
                      </div>;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}
