import express from 'express';

const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send(`Node App Logging From Server-1 Port: ${port}`)
});

app.listen(port, () => {
    console.log(`[server] 🚀: Server is running at http://localhost:${port}`)
});