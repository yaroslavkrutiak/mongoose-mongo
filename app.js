const express = require('express')
const app = express()
const userRoutes = require('./routes/user.route');
const articleRoutes = require('./routes/article.route');

app.use(express.json())

app.use('/users', userRoutes);
app.use('/articles', articleRoutes);

require('./connection/http-status-handler')(app)



app.listen(3000)

module.exports = app;