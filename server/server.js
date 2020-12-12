const express = require('express');
const routes = require('./routes');
const path = require('path');
const app = express();
require('./config/db')();

const PORT = process.env.PORT || 5000;

// parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("../clients/build"));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "../clients/build/index.html"));
    });
// }

app.listen(PORT, () => {
    console.log("App running on PORT: " + PORT)
});