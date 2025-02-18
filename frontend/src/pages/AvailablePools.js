import { useEffect, useState } from 'react';
import { supabase } from 'supabaseClient';

function AvailablePools() {
    const [pools, setPools] = useState([]);

    useEffect(() => {
        async function fetchPools() {
            const { data } = await supabase.from('pools').select('*');
            setPools(data);
        }
        fetchPools();
    }, []);

    return (
        <div>
            <h1>Available Pools</h1>
            {pools.map(pool => (
                <div key={pool.id}>
                    <h3>{pool.start_loc} → {pool.end_loc}</h3>
                    <p>Departure: {pool.departure}</p>
                </div>
            ))}
        </div>
    );
}

export default AvailablePools;