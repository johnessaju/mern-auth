import jwt from 'jsonwebtoken';
const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  }); // create a token that expires in 30 days
  // send token in http-only cookie
  res.cookie('jwt', token, {
    httpOnly: true, // JS on client side cannot access the cookie
    secure: process.env.NODE_ENV === 'production', // only send cookie over https in production
    sameSite: 'strict', // only send cookie for same site requests
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days in milliseconds
  });
};
export default generateToken;
