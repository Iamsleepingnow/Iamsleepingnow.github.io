// 作者介绍左图
var authorDescLeft = [
    "./Resources/Images/Anim_Author_Graph.gif",
]
// 作者介绍右图
var authorDescRight = [
    "./Resources/Images/Anim_Author_Name1.gif",
    "./Resources/Images/Anim_Author_Name2.gif",
    "./Resources/Images/Anim_Author_Age.gif",
]
// 作者介绍内容
var authorDescContent_cn = "彭艺伟，男，1999年生于湖北宜昌，现居浙江杭州。尝试使用视觉交互、影像、声音等多媒体媒介手段来探讨事物的本身价值。作品以数据通融周遭的手段作为方法，围绕现实与幻想、现在与非现在、消费与生产进行凝练；有时会对道德语境与价值加以解读，但不局限于当下话题。";
var authorDescContent_en = "Yiwei Peng, male, 1999 born in Yichang, Hubei, now living in Hangzhou, Zhejiang. Try to use visual interaction, video, sound and other multimedia to explore the value of things in themselves. The works use the means of data integration as a method to condense around reality and fantasy, present and non-present, consumption and production; sometimes interpreting moral contexts and values, but not limited to current topics.";
var authorDescContent_cnTra = "彭藝偉，男，1999年生於湖北宜昌，現居浙江杭州。嘗試使用視覺交互、影像、聲音等多媒體媒介手段來探討事物的本身價值。作品以數據通融周遭的手段作為方法，圍繞現實與幻想、現在與非現在、消費與生產進行凝練；有時會對道德語境與價值加以解讀，但不局限於當下話題。";
//
var authorDescLRHeight = 200 + "px"; // 作者介绍左右图高度
var authorDescLPercentage = 40 + "%"; // 作者介绍左图宽度比
var authorDescRPercentage = 60 + "%"; // 作者介绍右图宽度比

var authorDescChangeFlag = false; // 作者介绍内容是否改变

// 空行
document.write("<div style=\"width: 100%; height: 100px;\"></div>");

document.write("<div style=\"width:100%;\">");
// 左图
document.write("<div id=\"AuthorDescLeft\" style=\"height:" + authorDescLRHeight + "; width:" + authorDescLPercentage + "; float: left;\">");
for (var i = 0; i < authorDescLeft.length; i++){
    document.write("<img id=\"AuthorDescLeftImg\" src=\"" + authorDescLeft[i] + "\" style=\"height: " + (100/authorDescLeft.length) + "%; float: right; clear:both;\"/>");
}
document.write("</div>");
// 右图
document.write("<div id=\"AuthorDescRight\" style=\"height:" + authorDescLRHeight + "; width:" + authorDescRPercentage + "; float:left;\">");
for (var i = 0; i < authorDescRight.length; i++){
    document.write("<img src=\"" + authorDescRight[i] + "\" style=\"height: " + (100/authorDescRight.length) + "%; float: left; clear:both;\"/>");
}
document.write("</div>");
// 下介绍
document.write("<div id=\"AuthorDescCenter\" style=\"clear:both; text-align:left;\">");
    document.write("<div style=\"height: 20px;\"></div>");// 空行
    document.write("<p class=\"authorDesc_CN\" id=\"AuthorDesc_CN\" style=\"position: relative; width: 80%; left: 10%;\">" + authorDescContent_cn + "</p>");
    document.write("<div style=\"height: 20px;\"></div>");// 空行
    // 繁简切换按钮
    document.write("<input type=\"image\" class=\"workName_EN\" id=\"AuthorDescChangeBtn\" value=\" ??? \" src = \"./Resources/Images/Anim_BG_Star01.gif\""
            + "style=\"z-index: 3; position: relative; width: 25px; left: 48%; top: 0px;\"></input>");
    var eleChange = document.getElementById("AuthorDesc_CN");
    document.getElementById("AuthorDescChangeBtn").onclick = (function(index){
        return function(){
            authorDescChangeFlag = !authorDescChangeFlag;// 切换标识符
            document.getElementById("AuthorDesc_CN").innerHTML = authorDescChangeFlag ? authorDescContent_cnTra : authorDescContent_cn;// 繁简转换
            document.getElementById("AuthorDescLeftImg").style.transform = authorDescChangeFlag ? "rotateY(180deg)" : "rotateY(0deg)";// 图片翻转
        }
    })(0);
    //
    document.write("<div style=\"height: 20px;\"></div>");// 空行
    document.write("<p class=\"authorDesc_EN\" style=\"position: relative; width: 80%; left: 10%;\">" + authorDescContent_en + "</p>");
    document.write("<div style=\"height: 20px;\"></div>");// 空行
document.write("</div>");
//
document.write("</div>");

// 空行
document.write("<div style=\"width: 100%; height: 256px;\"></div>");