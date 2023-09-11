const app = require('./src/index');
const { PORT } = require('./config/config');

app.listen(PORT, () => {
    console.info(`Server running on port ${PORT}`);
});
