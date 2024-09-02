var workName_CN = "心机接口";
var workName_EN = "the Meta-Universe Poetry";
var workDesc_CN = "单屏影像<br>3840px × 2160px<br>15m30s<br>2023<br>"
    + "<br>元宇宙体系将现实中的资源转化为虚拟中的价值，并在虚拟中“打印”出来，这实质上是一种对于现实资源的再现。"
    + "<br>一个人操控着自己在元宇宙中的化身，于一个叫“元宇宙之心”的虚拟空间里进行“打印”仪式。"
    + "<br>没有人知道仪式最后成功与否。";
var workDesc_EN = "1-channel video<br>3840px × 2160px<br>15m30s<br>2023<br>"
    + "<br>The metaverse system transforms real resources into virtual values and \"prints\" them in the virtual world, which is essentially a reproduction of real resources."
    + "<br>A person controls his own avatar in the metaverse and performs a \"printing ritual\" in a virtual space called \"the Heart of Meta-Universe\"."
    + "<br>No one knows whether the ritual was successful or not in the end.";
var workLink = "https://player.vimeo.com/video/918800459?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
var workLinkTip = "作品观看 Preview<br>（Vimeo需要梯子）";
var workLinkBG = "../../../Resources/Images/Img_TestBG.gif";
var backAnchorPic = "../../../Resources/Images/Anim_BackAnchor.gif";

var arrowPic = "../../../Resources/Images/Anim_LeftArrow.gif";

var workPics = [
    "https://s2.loli.net/2024/08/24/zFmiZ1dbcGp2MHA.jpg",
    "https://s2.loli.net/2024/08/24/ZBTAwXhIgE3Svj2.jpg",
    "https://s2.loli.net/2024/08/24/zkVY87ZWrsHSmh6.jpg",
    "https://s2.loli.net/2024/08/24/yDrqIbOXcfnsYE6.jpg",
    "https://s2.loli.net/2024/08/24/Kk3Lht79gAovZjF.jpg",
    "https://s2.loli.net/2024/08/24/dUrVQKaWwI8HcuP.jpg",
    "https://s2.loli.net/2024/08/24/Xki7hYAqyGfFOpM.jpg",
    "https://s2.loli.net/2024/08/24/1CVxjqsa7zhXIwB.jpg",
    "https://s2.loli.net/2024/08/24/5A3QVXUdml1ceE4.jpg",
    "https://s2.loli.net/2024/08/24/eoxnlbp6v5XN3ut.jpg",
]
var currentPicIndex = 3;// 当前图片索引

BackAnchor(backAnchorPic);
Space(40);
DisplayTitlePic(workPics, arrowPic);
DisplayWorkName(workName_CN, workName_EN);
DisplayWorkLink(workLink, workLinkTip, workLinkBG);
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