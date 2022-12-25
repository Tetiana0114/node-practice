const { app } = require('./app');

const PORT = 3001;

app.listen(3001, () => {
    console.log(`server in running on ${PORT}`);
});