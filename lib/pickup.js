const moment = require('moment');

function getPickUpProject(now = moment()){
    const start = moment("2020-10-31 08:00");

    if(now.diff(start,'days') === 0){
        return Math.floor((now.diff(start,'hours') / 2) + 1);
    } else if(now.diff(start,'days') === 1){
        return Math.floor((now.diff(start,'hours') / 2  + 1) - 6);
    }

    return 1;
}
module.exports = getPickUpProject;