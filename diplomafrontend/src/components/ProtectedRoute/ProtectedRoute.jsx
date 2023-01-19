const ProtectedRoute = ({ loggedIn, children }) => {
    return loggedIn && children;
  };
  
  export default ProtectedRoute;