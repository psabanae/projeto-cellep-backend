const {Pool} = require('pg');

const client = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgres://ncljbmwfdtqmip:642b6596e62d3d30de8c297bee4a003781d109e6f0cf9640b937a2b9a32429a4@ec2-3-211-6-217.compute-1.amazonaws.com:5432/dc8oqlg0puv7ek',
    ssl:{
        rejectUnauthorized: false
    }
});


module.exports = client;