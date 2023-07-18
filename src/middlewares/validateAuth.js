import db from "../database/database.connection.js";

export default async function validateAuth(req, res, next) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");
  
  if (!token) return res.sendStatus(401);
  
  try {
    
  } catch (err) {
    res.status(500).send(err.message);
  }
  
  next();
}