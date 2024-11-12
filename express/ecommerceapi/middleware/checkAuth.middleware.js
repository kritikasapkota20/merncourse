const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config/constant");

// const checkAuth = (role) => {
//   return (req, res, next) => {
//     const { token } = req.headers;
//     try {
//       const user = jwt.verify(token, JWT_SECRET_KEY);
//       if (!user.roles.includes(role)) {
//         res.status(401).json({ message: "Unauthorized action" });
//         return;
//       }
//       req.authUser = user;
//       next();
//     } catch (error) {
//       res.status(401).json({ message: "Unauthorized" });
//     }
//   };
// };
// useCase = checAuth('customer') , checkAuth('Admin')

const checkAuth = (req, res, next) => {
  // console.log(req.cookies);

  const token = req.cookies.token ?? req.headers.token;
  try {
    const user = jwt.verify(token, JWT_SECRET_KEY);

    req.authUser = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
// roles = ['Customer', 'Admin', 'Super Admin' ]
// roles.includes('cuomster')
const checkAuthAdmin = (req, res, next) => {
  const token = req.cookies.token ?? req.headers.token;
  try {
    const user = jwt.verify(token, JWT_SECRET_KEY);
    // console.log(user);
   
    if (!user.role.includes("admin")) {
      res.status(401).json({ message: "Unauthorized action" });
      return;
    }
    req.authUser = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
// const checkAuthAdmin = (req, res, next) => {
//   try {
//     // Check token in cookies or authorization header
//     const token = req.cookies?.token || req.headers?.authorization?.split(" ")[1];

//     // If token is not found, return an error
//     if (!token) {
//       return res.status(401).json({ message: "Authorization token missing" });
//     }

//     // Verify the token
//     const decodedToken = jwt.verify(token, JWT_SECRET_KEY);

//     // Check if the user role is "Admin"
//     if (decodedToken.role !== "Admin") {
//       return res.status(403).json({ message: "Access denied. Admins only." });
//     }

//     // Add user data to request and move to next middleware
//     req.user = decodedToken;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Invalid or expired token" });
//   }
// };

module.exports = {
  checkAuth,
  checkAuthAdmin,
};