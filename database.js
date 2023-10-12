const { Client } = require('pg');
const client = new Client({ user: 'postgres', host: 'localhost', database: 'review', password: 'Vajintha@1511', port: '5432', });
client.connect() .then(() => { console.log('Connected to PostgreSQL database!'); }) .catch((err) => { console.error('Error connecting to the database:', err); });


client.query('select *from users',(err,res)=>{
    if(!err)
    {
        console.log(res.rows)
    }
    else{
        console.log(err.message)
    }
})
client.query("SELECT * FROM users WHERE fname = 'BMW'",(err,res)=>{
    if(!err)
    {
        console.log(res.rows)
    }
    else{
        console.log(err.message)
    }
})

