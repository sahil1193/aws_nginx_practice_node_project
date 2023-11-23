const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Node App Logging From Server")
});

app.listen(port, () => {
    console.log(`[server] 🚀: Server is running at http://localhost:${port}`)
});