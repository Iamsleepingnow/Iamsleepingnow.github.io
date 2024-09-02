// 作品
var works = [
    {
        name: "工人_博物馆",
        nameTra: "工人_博物館",
        name_en: "Post factory",
        pic: ".\\Resources\\Images\\WorksGIF\\工人_博物馆Capiters_factory.gif",
        url: ".\\Contents\\WorkPages\\Post_Factory\\Work_Post_Factory.html",
    },
    {
        name: "数据主义",
        nameTra: "數據主義",
        name_en: "Dataism",
        pic: ".\\Resources\\Images\\WorksGIF\\数据主义Dataism.gif",
        url: ".\\Contents\\WorkPages\\Dataism\\Work_Dataism.html",
    },
    {
        name: "能工智能审讯署",
        nameTra: "能工智能審訊署",
        name_en: "Testing Before Hiring",
        pic: ".\\Resources\\Images\\WorksGIF\\能工智能Testing_Before_Hiring.gif",
        url: ".\\Contents\\WorkPages\\Testing_Before_Hiring\\Work_Testing_Before_Hiring.html",
    },
    {
        name: "小石潭新记",
        nameTra: "小石潭新記",
        name_en: "XiaoShiTanJi Pseudo code",
        pic: ".\\Resources\\Images\\WorksGIF\\小石潭新记XiaoShiTanJi.gif",
        url: ".\\Contents\\WorkPages\\XiaoShiTanJi_Code\\Work_XiaoShiTanJi_Pseudo_code.html",
    },
    {
        name: "玻璃数据",
        nameTra: "玻璃數據",
        name_en: "Glass Data",
        pic: ".\\Resources\\Images\\WorksGIF\\玻璃数据GlassData.gif",
        url: ".\\Contents\\WorkPages\\Glass_Data\\Work_Glass_Data.html",
    },
    {
        name: "天地银行NFT",
        nameTra: "天地銀行NFT",
        name_en: "NFT TIANDY Bank",
        pic: ".\\Resources\\Images\\WorksGIF\\天地银行TianDiBank.gif",
        url: ".\\Contents\\WorkPages\\NFT_TIANDY_Bank\\Work_NFT_TIANDY_Bank.html",
    },
    {
        name: "阈限志",
        nameTra: "閾限誌",
        name_en: "the Record of Limen",
        pic: ".\\Resources\\Images\\WorksGIF\\阈限志The_Record_of_Limen.gif",
        url: ".\\Contents\\WorkPages\\Record_of_Limen\\Work_the_Record_of_Limen.html",
    },
    {
        name: "XP，但是番茄花园版",
        nameTra: "XP，但是番茄花園版",
        name_en: "eXPerienced and cracked",
        pic: ".\\Resources\\Images\\WorksGIF\\番茄花园eXPerienced_and_cracked.gif",
        url: ".\\Contents\\WorkPages\\EXPeriencedCracked\\Work_eXPerienced_and_cracked.html",
    },
    {
        name: "心机接口",
        nameTra: "心機接口",
        name_en: "the Meta-Universe Poetry",
        pic: ".\\Resources\\Images\\WorksGIF\\心机接口the_Meta-Universe_Poetry.gif",
        url: ".\\Contents\\WorkPages\\Meta_Universe_Poetry\\Work_the_Meta_Universe_Poetry.html",
    },
    {
        name: "文言程序训诂",
        nameTra: "文言程序訓詁",
        name_en: "Sino Primer Plus",
        pic: ".\\Resources\\Images\\WorksGIF\\文言程序训诂Sino_Primer_Plus.gif",
        url: ".\\Contents\\WorkPages\\Sino_Primer_Plus\\Work_Sino_Primer_Plus.html",
    },
    {
        name: "赤玉录",
        nameTra: "赤玉錄",
        name_en: "Agate Tablet",
        pic: ".\\Resources\\Images\\WorksGIF\\赤玉录Agate_Tablet.gif",
        url: ".\\Contents\\WorkPages\\Agate_Tablet\\Work_Agate_Tablet.html",
    },
    {
        name: "昆虫说明书",
        nameTra: "昆蟲說明書",
        name_en: "iNsect iNstructions",
        pic: ".\\Resources\\Images\\WorksGIF\\昆虫说明书iNsect_iNstructions.gif",
        url: ".\\Contents\\WorkPages\\INsect_iNstructions\\Work_iNsect_iNstructions.html",
    }
]
// 星星动画帧
var starFrames = [
    "./Resources/Images/Anim_BG_Star01.gif",
    "./Resources/Images/Anim_BG_Star02.gif",
    "./Resources/Images/Anim_BG_Star03.gif",
    "./Resources/Images/Anim_BG_Star04.gif",
    "./Resources/Images/Anim_BG_Star05.gif",
]
var workFrame = "./Resources/Images/Anim_Frame200.gif";

// 随机生成坐标X
function CSS_RandomLeft(_xmin, _xmax){
    return " left: " + (Math.floor(Math.random() * (_xmax - _xmin + 1) + _xmin)) + "%;"
}
// 随机生成坐标Y
function CSS_RandomTop(_ymin, _ymax){
    return " top: " + Math.floor(Math.random() * (_ymax - _ymin + 1) + _ymin) + "px;";
}

var workLefts = []; // 工作展示框左边距记录

// 绘制作品展示框
document.write("<div id = \"WorksDisplay\" style = \"position: relative;\">");
for (var i = 0; i < works.length; i++){
    var leftMin = 0; var leftMax = 80;
    var run = (Math.floor(Math.random() * (leftMax - leftMin + 1) + leftMin));
    workLefts[i] = run;
    document.write( // 框架
          "<div id=\"Work_" + i + "\" style = \""
        + "position: absolute; z-index: 2;"
        + "width: 200px; height: 250px;"
        + "top:" + i*(250+10) + "px;"
        + " left: " + run + "%;"
        + "text-align: left; border: 0px solid red;"
        + "transform: rotate(" + (Math.random()*90-45) + "deg);"
        + "\">"
    );
    document.write( // 序号、左右箭头
          "<p class=\"workName_EN\" style=\"height: 30px;\">" + "<  " + (i+1) + "  >" + "</p>"
        + "<input type=\"image\" class=\"workName_EN\" id=\"DisplayBtnLeft_" + i + "\" value=\" L \" src = \"./Resources/Images/Anim_LeftArrow.gif\""
            + "style=\"z-index: 3; position: absolute; left: -31px; top: 80px; width: 30px; transform: rotate(0deg);\"></input>"
        + "<input type=\"image\" class=\"workName_EN\" id=\"DisplayBtnRight_" + i + "\" value=\" R \" src = \"./Resources/Images/Anim_LeftArrow.gif\""
            + "style=\"z-index: 3; position: absolute; left: 151px; top: 80px; width: 30px; transform: rotate(180deg);\"></input>"
    );
    document.write( // 图片、文字
         "<a href = \"" + works[i].url + "\">"
            + "<img style= \"width: 150px; height: 150px; position: relative; z-index: 0;\" src = \"" + works[i].pic + "\">"
            + "<img style= \"width: 155px; height: 155px; position: absolute; z-index: 1; left: -2.5px; top: 27.5px;\" src = \"" + workFrame + "\">"
            + "<p class=\"workName_CN\">" + works[i].name + "</p>"
            + "<p class=\"workName_Tra\">" + works[i].nameTra + "</p>"
            + "<p class=\"workName_EN\">" + works[i].name_en + "</p>"
        + "</a>"
    );
    document.write("</div>"); // 框架
}
// 左右箭头按钮事件
for (var i = 0; i < works.length; i++){
    var eleLeft = document.getElementById("DisplayBtnLeft_" + i);
    var eleRight = document.getElementById("DisplayBtnRight_" + i);
    eleLeft.onclick = (function(index){
        return function(){
            workLefts[index] = workLefts[index] - 2;
            document.getElementById("Work_" + index).style.left = (workLefts[index]) + "%";
        }
    })(i);
    eleRight.onclick = (function(index){
        return function(){
            workLefts[index] = workLefts[index] + 2;
            document.getElementById("Work_" + index).style.left = (workLefts[index]) + "%";
        }
    })(i);
}

// 这里随机在背景中生成图片
for (var i = 0; i < 120; i++){
    document.write(
        "<img style = \""
            + "position: absolute; z-index: 1;"
            + "width: 50px; height: 50px;"
            + "top:" + Math.floor(Math.random() * (works.length*250)) + "px;"
            + CSS_RandomLeft(0, 100)
            + "text-align: left; border: 0px solid red;"
            + "transform: rotate(" + (Math.random()*90-45) + "deg);"
            + "opacity:0.5"
            + "\" src = \"" + starFrames[Math.floor(Math.random() * starFrames.length)] + "\""
        + ">"
    );
}
// todo
document.write("</div>");
document.write("<div style=\"width: 100%; height: " + (works.length*250) + "px;\"></div>");

// 空行
document.write("<div style=\"width: 100%; height: 512px;\"></div>");