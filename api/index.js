import express from 'express';
import cors from 'cors';

import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";

const app = express();

// Middleware for setting CSP
const setCSP = (req, res, next) => {
    res.setHeader(
      "Content-Security-Policy",
      "default-src 'self' 'unsafe-inline' 'unsafe-eval'; default-src * self blob: data: gap:;"
    );
    next();
};

// Use Middlewares
app.use(cors());
app.use(setCSP);
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/posts', postRoutes);

// New Test Route
app.get('/api/test', (req, res) => {
    res.send('Test route is working!');
});

// Error Handling
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
});

// Server Start
const PORT = 8800;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
