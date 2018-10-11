

const home_job_template = require('../views/home/home-job.html');

const render = () => {
    document.querySelector('.home-container main').innerHTML = home_job_template;
}

module.exports = {
    render
}