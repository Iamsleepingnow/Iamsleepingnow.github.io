var workName_CN = "赤玉录";
var workName_EN = "Agate Tablet";
var workDesc_CN = "艺术微喷<br>375mm × 525mm × 6<br>2024<br>"
    + "<br>翠玉录（Emerald Tablet）是赫尔墨斯的神秘学杰作，也是中世纪炼金术盛行的信条。"
    + "<br>赤玉是玛瑙的古称，玛瑙是一种常见的硅酸盐，硅酸盐是半导体精炼材料的原料，半导体材料是显示处理器的基体材料，显示处理器是人工智能运算的核心。"
    + "<br>赤玉录是赫尔墨斯的神秘学杰作，也是人工智能运算盛行的信条。";
var workDesc_EN = "MicroJet Art Printing<br>375mm × 525mm × 6<br>2024<br>"
    + "<br>The Emerald Tablet is the occult masterpiece of Hermes and the creed in which medieval alchemy flourished."
    + "<br>\"赤玉\" is the ancient name for agate, a common silicate, which is the raw material for semiconductor refining materials, and semiconductor materials are the base material for display processors, which are the core of artificial intelligence computing."
    + "<br>The Agate Tablet is the occult masterpiece of Hermes and the creed in which artificial intelligence flourished.";
//var workLink = "https://127.0.0.1/";
//var workLinkTip = "作品预览 Preview<br>（Vimeo需要梯子）";
//var workLinkBG = "../../../Resources/Images/Img_TestBG.gif";
var backAnchorPic = "../../../Resources/Images/Anim_BackAnchor.gif";

var arrowPic = "../../../Resources/Images/Anim_LeftArrow.gif";

var titlePics = [
    "https://s2.loli.net/2024/08/29/CnjFtKs6Ue9yGkO.jpg",
    "https://s2.loli.net/2024/08/29/tdIVJOTaH13S7YB.jpg",
    "https://s2.loli.net/2024/08/29/9g4VBwcs3mFnECZ.jpg",
    "https://s2.loli.net/2024/08/29/Vk5psSgHc6zn97b.jpg",
    "https://s2.loli.net/2024/08/29/TxHGgYhfrJmXbdw.jpg",
    "https://s2.loli.net/2024/08/29/ZB7tiXQzWn4xPb5.jpg",
    "https://s2.loli.net/2024/08/29/KBSpO21grFVwALe.jpg",
]
var workPics = [
    "https://s2.loli.net/2024/08/29/AsJKpIFwecBzXjY.jpg",
    "https://s2.loli.net/2024/08/29/sGdOFtfQmAuRZkN.jpg",
    //
    "https://s2.loli.net/2024/08/29/tdIVJOTaH13S7YB.jpg",
    "https://s2.loli.net/2024/08/29/9g4VBwcs3mFnECZ.jpg",
    "https://s2.loli.net/2024/08/29/Vk5psSgHc6zn97b.jpg",
    "https://s2.loli.net/2024/08/29/TxHGgYhfrJmXbdw.jpg",
    "https://s2.loli.net/2024/08/29/ZB7tiXQzWn4xPb5.jpg",
    "https://s2.loli.net/2024/08/29/KBSpO21grFVwALe.jpg",
    //
    "https://s2.loli.net/2024/08/29/CnjFtKs6Ue9yGkO.jpg",
]
var currentPicIndex = 0;// 当前图片索引

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