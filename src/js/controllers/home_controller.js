
//home视图的控制器
const home_template = require('../views/home/home.html');
const home_job_controller = require('./home_job_controller');

// 负责将home视图模板渲染在对应的地方
const render = () => {
    // 刚才说了，一切皆模块，说明html也是模块，看一下它暴露的是什么 发现是字符串
    //console.log(home_template)
    document.querySelector('#root').innerHTML = home_template;
    home_job_controller.render();
}

module.exports = {
    render
}


// 需求： 显示home  MVC