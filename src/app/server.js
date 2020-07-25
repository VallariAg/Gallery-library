const express = require('express')
const { Client } = require('pg')
const app = express()
let PORT = process.env.PORT | 2700
PORT = 2700
const pageSize = 12;

const client = new Client({
    // user: "postgres",
    user: "vallari",
    password: "password",
    host: "127.0.0.1",
    port: 5432,
    database: "vallari",
});
DB_TABLE = 'galleryimage';
start();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
})
// /api/images?page=:page
app.get('/api/images', async (req, res) => {
    let page = req.query.page;

    const rows = await readImages(page - 1, pageSize);
    // console.table(rows);
    res.setHeader("content-type", "application/json");
    res.send(JSON.stringify(rows));
})

app.listen(PORT, () => console.log("serving"))

async function start() {
    await connect();
}

async function connect() {
    try {
        await client.connect()
    }
    catch (e) {
        console.log(e)
    }
}
async function readImages(pageNum, pageSize) {
    try {
        let imagesLoaded = pageNum * pageSize;
        const result = await client.query(`select * from ${DB_TABLE} WHERE id > ${imagesLoaded} AND id <= ${imagesLoaded + pageSize}`);
        return result.rows;
    }
    catch (e) {
        console.log(e)
        return []
    }
}


