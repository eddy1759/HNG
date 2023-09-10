const express = require('express');
const cors = require('cors');
const { getCurrentDay, getCurrentUTCTime } = require('./helper');


const app = express();


app.use(cors({
    origin: '*',
}));


app.get('/api', (req, res) => {

    const slackName = req.query.slack_name;
    const track = req.query.track;

    const data = {
        "slack_name": slackName,
        "current_day": getCurrentDay(),
        "utc_time": getCurrentUTCTime(),
        "track": track,
        "github_file_url": "https://github.com/eddy1759/HngX-stage1/blob/main/app.js",
        "github_repo_url": "https://github.com/eddy1759/HngX-stage1",
        "status_code": 200,
    }

    res.json(data);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));