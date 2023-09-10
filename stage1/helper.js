const moment = require('moment');

function getCurrentDay() {
    return moment.utc().format('dddd');
};

function getCurrentUTCTime() {
    const utc = moment.utc();
    return utc.format('YYYY-MM-DDTHH:mm:ss[Z]')
};

module.exports = { getCurrentDay, getCurrentUTCTime };