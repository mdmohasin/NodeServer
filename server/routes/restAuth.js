import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './../utils/constants';
import { consoleLog, consoleError } from '../utils/logging';
/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @Note : further this can be used as a authrization layer for each request
 * //todo: need to check the session storage at login
 */
function isLoggedIn(req, res, next) {     // jwt authentication
  consoleLog(req.body);
  const { authToken } = req.body;
  consoleLog(authToken);
  // jwt.verify(authToken, JWT_SECRET, (err, decoded) => {
  //   console.log(decoded, err); // bar
  //   return next();
  // });
  try {
    const decoded = jwt.verify(authToken, JWT_SECRET);
    consoleLog(decoded);
    return next();
  } catch (err) {
    // err
    consoleError(err);
  }
  return res.status(401).json({ success: false, message: 'You are not authenticated' });
}

module.exports = isLoggedIn;

