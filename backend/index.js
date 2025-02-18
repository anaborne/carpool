import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.use(cors());
app.use(express.json());

// Import Routes
import poolRoutes from './routes/poolRoutes.js';
app.use('/pools', poolRoutes);

app.get('/', (req, res) => res.send('Carpool API is running...'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));