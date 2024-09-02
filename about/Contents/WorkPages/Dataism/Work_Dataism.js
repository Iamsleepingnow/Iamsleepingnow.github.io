var workName_CN = "数据主义";
var workName_EN = "Dataism";
var workDesc_CN = "三屏影像（合作作品，合作者：徐健）<br>5760px × 1080px<br>9m49s<br>2020<br>"
    + "<br>新的数据主义时代下，人被认为是算法的集合，自由意志也被证明并不存在。"
    + "<br>在一间日常的酒店中，一位失去活动功能的人正沉睡于梦境之中。"
    + "<br>数据穿梭于梦境、现实之间，重塑着整个世界。";
var workDesc_EN = "3-channel video (Collaborative works, collaborators: Jian Xu)<br>5760px × 1080px<br>9m49s<br>2020<br>"
    + "<br>In the new era of dataism, the Humanity is considered to be the gathering of algorithms and the Free will is also proved to be non-existent."
    + "<br>In a daily hotel, a person who has lost activity is sleeping deeply in a dream."
    + "<br>Data shuttles between dreams and reality, reshaping the entire world.";
var workLink = "https://127.0.0.1/";
var workLinkTip = "作品预览 Preview<br>（Vimeo需要梯子）";
var workLinkBG = "../../../Resources/Images/Img_TestBG.gif";
var backAnchorPic = "../../../Resources/Images/Anim_BackAnchor.gif";

var arrowPic = "../../../Resources/Images/Anim_LeftArrow.gif";

var titlePics = [
    "https://s2.loli.net/2024/08/28/ZMsmboFkc6UXVQL.jpg",
    "https://s2.loli.net/2024/08/28/qtynxS8pNsdvMDO.jpg",
    "https://s2.loli.net/2024/08/28/Qz3h1bECJRYMBki.jpg",
    "https://s2.loli.net/2024/08/28/rQvNY32TxCBK9Pp.jpg",
    "https://s2.loli.net/2024/08/28/ywoMIORqzFdvcDX.jpg",
    "https://s2.loli.net/2024/08/28/CxGqrRkMb3eljzs.jpg",
    "https://s2.loli.net/2024/08/28/cQnigSs6COkPmUu.jpg",
    "https://s2.loli.net/2024/08/28/xb2WJ3wMcdt8LEs.jpg",
]
var workPics = [
    "https://s2.loli.net/2024/08/28/AIXcEB5ujkZbTDm.jpg",
    "https://s2.loli.net/2024/08/28/LJihvpsfY91FQEP.jpg",
    "https://s2.loli.net/2024/08/28/7XuL4dUaGAsO2fK.jpg",
    "https://s2.loli.net/2024/08/28/nYsKizH9pLE7x5O.jpg",
    "https://s2.loli.net/2024/08/28/FMitoGTkV68sKUg.jpg",
    "https://s2.loli.net/2024/08/28/OXBvCZtfTRH7une.jpg",
    "https://s2.loli.net/2024/08/28/vVdO9BS6U7t38LX.jpg",
    //
    "https://s2.loli.net/2024/08/28/ZMsmboFkc6UXVQL.jpg",
    "https://s2.loli.net/2024/08/28/qtynxS8pNsdvMDO.jpg",
    "https://s2.loli.net/2024/08/28/Qz3h1bECJRYMBki.jpg",
    "https://s2.loli.net/2024/08/28/rQvNY32TxCBK9Pp.jpg",
    "https://s2.loli.net/2024/08/28/ywoMIORqzFdvcDX.jpg",
    "https://s2.loli.net/2024/08/28/CxGqrRkMb3eljzs.jpg",
    "https://s2.loli.net/2024/08/28/cQnigSs6COkPmUu.jpg",
    "https://s2.loli.net/2024/08/28/xb2WJ3wMcdt8LEs.jpg",
]
var currentPicIndex = 6;// 当前图片索引

BackAnchor(backAnchorPic);
Space(40);
DisplayTitlePic(titlePics, arrowPic);
DisplayWorkName(workName_CN, workName_EN);
//DisplayWorkLink(workLink, workLinkTip, workLinkBG);
DisplayWorkDescs(workDesc_CN, workDesc_EN);
Space(128);
DisplayBelowPic(workPics);
Space(256);

// 返回锚点
function BackAnchor(backAnchorPic){
    document.write("<a href=\"../../../index.html#WorksDisplay\" style=\"text-decoration: none;\">");
    document.write("<div id=\"FixedAnchor_BackPage\" style=\"position: fixed; width: 50px; height: 50px; left: 25px; top: 25px; background-image: url('" + backAnchorPic + "'); background-size: 100% 100%;\"></div>");
    document.write("</a>");
}
// 空行
function Space(gap_px){
    document.write("<div style=\"width: 100%; height: " + gap_px + "px;\"></div>");// 空行
}
// 标题图片展示方法
function DisplayTitlePic(workPics, arrowPic){
    document.write("<div style=\"width:100%;\">");
    document.write("<img id=\"WorkTitlePic\" src=\"" + workPics[currentPicIndex] + "\" style=\"width: 100%; margin-bottom: 15px;\">");
    // 左右箭头
    document.write("<input type=\"image\" class=\"button\" id=\"DisplayBtnLeft\" value=\" L \" src = \"" + arrowPic + "\""
                    + "style=\"z-index: 3; position: absolute; left: 13.66%; top: 150px; width: 3%; transform: rotate(0deg);\"></input>"
                + "<input type=\"image\" class=\"button\" id=\"DisplayBtnRight\" value=\" R \" src = \"" + arrowPic + "\""
                    + "style=\"z-index: 3; position: absolute; left: 83.33%; top: 150px; width: 3%; transform: rotate(180deg);\"></input>");
    document.getElementById("DisplayBtnLeft").onclick = (function(index){
        return function(){
            currentPicIndex--;
            if (currentPicIndex < 0){
                currentPicIndex = workPics.length - 1;
            }
            document.getElementById("WorkTitlePic").setAttribute("src", workPics[currentPicIndex]);
        }
    })(0);
    document.getElementById("DisplayBtnRight").onclick = (function(index){
        return function(){
            currentPicIndex++;
            if (currentPicIndex > workPics.length - 1){
                currentPicIndex = 0;
            }
            document.getElementById("WorkTitlePic").setAttribute("src", workPics[currentPicIndex]);
        }
    })(0);
    document.write("</div>");
}
// 作品名称展示方法
function DisplayWorkName(workName_CN, workName_EN){
    document.write("<div style=\"width:100%;\">");
    document.write("<p id=\"Title_CN\">" + workName_CN + "</p>");
    document.write("<p id=\"Title_EN\">" + workName_EN + "</p>");
    document.write("</div>");
}
// 作品链接展示方法
function DisplayWorkLink(workLink, workLinkTip, workLinkBG){
    document.write("<div style=\"height: 200px;\"></div>");// 空行
    document.write("<div class=\"WorkLinkDiv\" style=\"position: absolute; left: 0; right: 0; background-image: url('" + workLinkBG + "'); background-size: 33.33%;\">");
    document.write("<p id=\"WorkLink\">" + "<a href=\"" + workLink + "\" target=\"_blank\">" + workLinkTip + "</a>" + "</p>");
    document.write("</div>");
    document.write("<div style=\"height: 100px;\"></div>");// 空行
}
// 作品介绍展示方法
function DisplayWorkDescs(workDesc_CN, workDesc_EN){
    document.write("<div id=\"WorkDescDiv\" style=\"clear:both; text-align:left;\">");
    document.write("<div style=\"height: 200px;\"></div>");// 空行
    document.write("<p class=\"WorkDesc_CN\" style=\"position: relative; width: 90%; left: 5%;\">" + workDesc_CN + "</p>");
    document.write("<div style=\"height: 80px;\"></div>");// 空行
    document.write("<p class=\"WorkDesc_EN\" style=\"position: relative; width: 90%; left: 5%;\">" + workDesc_EN + "</p>");
    document.write("<div style=\"height: 160px;\"></div>");// 空行
    document.write("</div>");
}
// 文后图片展示方法
function DisplayBelowPic(belowPics){
    for (var i = 0; i < belowPics.length; i++){
        document.write("<img src=\"" + belowPics[i] + "\" style=\"width: 100%; margin-bottom: 15px;\">");
    }
}