import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Get all available pools
export const getPools = async (req, res) => {
    const { data, error } = await supabase
        .from('pools')
        .select('id, creator_id, departure, start_loc, end_loc');
    
    if (error) return res.status(400).json(error);
    res.json(data);
};

// Create a new pool
export const createPool = async (req, res) => {
    const { creator_id, departure, start_loc, end_loc } = req.body;

    const { data, error } = await supabase
        .from('pools')
        .insert([{ creator_id, departure, start_loc, end_loc }])
        .select();

    if (error) return res.status(400).json(error);
    res.json(data);
};

// Request to join a pool
export const joinPool = async (req, res) => {
    const { user_id } = req.body;
    const pool_id = req.params.id;

    const { data, error } = await supabase
        .from('join_requests')
        .insert([{ pool_id, user_id }])
        .select();

    if (error) return res.status(400).json(error);
    res.json(data);
};

// Approve a join request
export const approveJoinRequest = async (req, res) => {
    const request_id = req.params.id;

    const { data, error } = await supabase
        .from('join_requests')
        .update({ status: 'approved' })
        .eq('id', request_id)
        .select();

    if (error) return res.status(400).json(error);
    res.json(data);
};