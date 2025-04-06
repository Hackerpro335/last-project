import {  Request, Response } from 'express'
import dotenv from 'dotenv';

const express = require('express');
const app = express();

dotenv.config();
const port = process.env.PORT || 3001; 

app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});