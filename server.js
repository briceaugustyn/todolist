const express = require('express');
require('./services/passport.js');

const app = express();

require('./routes/authRoutes.js')(app);

app.get('/', (req,res) => {
    res.send({hi: 'there'})
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
    console.log("Todo List listening on port: " + PORT);
});

