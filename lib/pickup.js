const moment = require('moment');
require('moment-timezone');

function getPickUpProjectId(now = moment()){
    moment.tz.setDefault('Asia/Tokyo');
    const start = moment("2020-10-31 08:00").format();

    if(now.diff(start,'days') === 0){
        return limit(Math.floor((now.diff(start,'hours') / 2) + 1),1,13);
    } else {
        return limit(Math.floor((now.diff(start,'hours') / 2  + 1) - 5),1,13);
    }
}

function limit(num,mi,ma){
    return Math.max(Math.min(ma, num),mi);
}

module.exports = getPickUpProjectId;