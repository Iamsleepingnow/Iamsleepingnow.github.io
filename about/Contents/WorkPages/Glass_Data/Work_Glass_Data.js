var workName_CN = "玻璃数据";
var workName_EN = "Glass Data";
var workDesc_CN = "双屏影像<br>3840px × 1080px<br>8m0s<br>2021<br>"
    + "<br>“一和零”代表“是与否”，数据构成了人的周遭，命运不再是神秘的，而是简单可预知的。"
    + "<br>虚拟世界的边界在于机械主义带来的容量和模拟，信息并不是自由的，它们只是被困在由资本创造的玻璃景观箱中。"
    + "<br>在数据代码的遥控器与收发器发射的红外线的照耀下，它们依旧活跃，游离在那斑驳的折射中，因为玻璃透明且无懈可击。";
var workDesc_EN = "2-channel video<br>3840px × 1080px<br>8m0s<br>2021<br>"
    + "<br>\"One and zero\" stands for \"yes or not\". Data constitutes people's surroundings. Fate is no longer mysterious, but simple and predictable."
    + "<br>The boundary of the virtual world lies in the capacity and simulation brought about by Mechanism. Information is not free. It is trapped in a terrarium created by capital."
    + "<br>Under the shining of the infrared rays emitted by the remote control and transceiver of the data code, they are still active, floating in the mottled refraction, because the glass is transparent and unassailable.";
var workLink = "https://www.bilibili.com/video/BV1Sv411G7jy/";
var workLinkTip = "作品观看 Preview<br>（Bilibili）";
var workLinkBG = "../../../Resources/Images/Img_TestBG.gif";
var backAnchorPic = "../../../Resources/Images/Anim_BackAnchor.gif";

var arrowPic = "../../../Resources/Images/Anim_LeftArrow.gif";

var titlePics = [
    "https://s2.loli.net/2024/08/24/ZxAeSEsXITC5Oop.jpg",
    "https://s2.loli.net/2024/08/24/ih9DMqrw2z5YC3g.jpg",
    "https://s2.loli.net/2024/08/24/XyoVQv16qK25bAE.jpg",
    "https://s2.loli.net/2024/08/24/IDjxBk9fVLT6tEz.jpg",
    "https://s2.loli.net/2024/08/24/DcjEygHQ2Xq6en4.jpg",
    "https://s2.loli.net/2024/08/24/GNkXeyswAYIxJd3.jpg",
    "https://s2.loli.net/2024/08/24/IFn1ZMST5H73iOj.jpg",
    "https://s2.loli.net/2024/08/24/3Iok7V1DhXW4fFx.jpg",
]
var workPics = [
    "https://s2.loli.net/2024/08/24/ZxAeSEsXITC5Oop.jpg",
    "https://s2.loli.net/2024/08/24/ih9DMqrw2z5YC3g.jpg",
    "https://s2.loli.net/2024/08/24/XyoVQv16qK25bAE.jpg",
    "https://s2.loli.net/2024/08/24/IDjxBk9fVLT6tEz.jpg",
    "https://s2.loli.net/2024/08/24/DcjEygHQ2Xq6en4.jpg",
    "https://s2.loli.net/2024/08/24/GNkXeyswAYIxJd3.jpg",
    "https://s2.loli.net/2024/08/24/IFn1ZMST5H73iOj.jpg",
    "https://s2.loli.net/2024/08/24/3Iok7V1DhXW4fFx.jpg",
    "https://s2.loli.net/2024/08/24/4lhtTJfACS5gzFO.jpg",
    "https://s2.loli.net/2024/08/24/R79QF86pbE2Gogu.jpg",
    "https://s2.loli.net/2024/08/24/zrVT6AZ5CSbKBy9.jpg",
]
var currentPicIndex = 4;// 当前图片索引

BackAnchor(backAnchorPic);
Space(40);
DisplayTitlePic(titlePics, arrowPic);
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