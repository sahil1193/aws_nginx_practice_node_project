import express from 'express';

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send(`Node App Logging From Server-2 Port: ${port}`)
});

app.listen(port, () => {
    console.log(`[server] 🚀: Server is running at http://localhost:${port}`)
});