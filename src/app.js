/*import Layer from './components/layer/layer.js'*/
import Header from './components/header/header.js'
import DetailCell from './components/detailCell/detailCell.js'
import fetch from 'isomorphic-fetch'
import "./css/main.css"
fetch('http://localhost:3000/nav')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(stories) {
        console.log(stories);
    });
const App=function(){
	var dom=document.getElementById('app');
	var header=new Header();
	var detailCell=new DetailCell();
	dom.innerHTML=header.tpl({
		buyTit:"购票详情"
	})+detailCell.tpl({
 		dingdan:["订单信息","订单号:","39583","出票成功"],
 		play:["玩法","胜平负","投注倍数","1","过关方式","2串1","购彩时间","2017-06-06 16:22:06"]
 	})+detailCell.tpl({
 		dingdan:["奖金状态"],
 		play:["投注金额","￥12","投注倍数","1","过关方式","2串1","购彩时间","2017-06-06 16:22:06"]
 	})
	
   
}
new App
debugger

