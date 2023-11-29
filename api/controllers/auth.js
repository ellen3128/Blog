import { db } from "../db.js";

export const register = (req, res) => {
  // Check existing user

  const q = "SELECT * FROM users WHERE email = ? OR username = ?";
  // sets up SQL query to check if a user already exists in the db
  // looks for user where the email or username matches the provided values
  // '?' placeholder for parameterized queries
  db.query(q, [req.body.email, req.body.name], (err, data) => {
    // db query line executes SQL query. It passes 'q', an array of values '[req.body.email, req.body.name]' to replace the '?' placeholders in the query
    if (err) return res.json(err);
    // if there's an error, sends error back as a JSON response
    if (data.length) return res.status(409).json("User already exists");
    // if query returns any rows (=data.length is true), the function sends 409 HTTP status code with a message 'user already exists'

    // PASSWORD HASHING
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    // password (req.body.password) is hashed using bcrypt

    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
    // SQL query to insert a new user into the 'users' table
    const values = [req.body.username, req.body.email, hash];
    // define values for insertion = an array of values: username, email and hashed password
    db.query(q, [values], (err, data) => {
    // query execution
      if (err) return res.json(err);
      return res.status(200).json("User has been created");
    });
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
