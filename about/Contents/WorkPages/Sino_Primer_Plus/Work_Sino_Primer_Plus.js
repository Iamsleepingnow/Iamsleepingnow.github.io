var workName_CN = "文言程序训诂";
var workName_EN = "Sino Primer Plus";
var workDesc_CN = "文本<br>尺寸可变<br>2023<br>"
    + "<br>在以前的学生时代，老师只让我们去理解古诗词中的文学含义。"
    + "<br>但当时我眼中的古诗词不仅有文学含义，还有其背后的形式逻辑。"
    + "<br>我将记忆中仅存的碎片化的段落使用程序风格的解释性语言从易到难进行了重排。";
var workDesc_EN = "Text<br>Variable size<br>2023<br>"
    + "<br>In the old days when I was a student, my teachers only told us to understand the literary meanings in ancient poems."
    + "<br>But at that time, I saw not only the literary meaning of ancient poems, but also the formal logic behind them."
    + "<br>I rearranged the only remaining fragmented passages in my memory from easy to difficult using program-style explanatory language.";
var workLink = "https://online.fliphtml5.com/ulzon/bokl/";
//var workLinkTip = "作品预览 Preview<br>（Vimeo需要梯子）";
//var workLinkBG = "../../../Resources/Images/Img_TestBG.gif";
var backAnchorPic = "../../../Resources/Images/Anim_BackAnchor.gif";

var arrowPic = "../../../Resources/Images/Anim_LeftArrow.gif";

var titlePics = [
    "https://s2.loli.net/2024/08/29/F1e5JuvfDNtQ4iZ.jpg",
    "https://s2.loli.net/2024/08/29/3CadmEVFTlLAM8y.jpg",
    "https://s2.loli.net/2024/08/29/ovcDC6pyh2GiE7b.jpg",
    "https://s2.loli.net/2024/08/29/f8pAg1DbNcOd7Qa.jpg",
    "https://s2.loli.net/2024/08/29/9vK4yS5mMYwTtUP.jpg",
    "https://s2.loli.net/2024/08/29/wDyEUbAkuR1eKQl.jpg",
    "https://s2.loli.net/2024/08/29/7I6sZQEKcPb2riS.jpg",
    "https://s2.loli.net/2024/08/29/LTfYzx67EgDMO21.jpg",
    "https://s2.loli.net/2024/08/29/mgPZRl4dHzU1O8v.jpg",
    "https://s2.loli.net/2024/08/29/ZxfomEy8FK1YtrT.jpg",
]
var workPics = [
    "https://s2.loli.net/2024/08/29/3FwYtUpLIhn4M7W.jpg",
    "https://s2.loli.net/2024/08/29/8tuzKCMIxAGpWjT.jpg",
    "https://s2.loli.net/2024/08/29/aWFfKevdIQ5TbRG.jpg",
    //
    "https://s2.loli.net/2024/08/29/F1e5JuvfDNtQ4iZ.jpg",
    "https://s2.loli.net/2024/08/29/3CadmEVFTlLAM8y.jpg",
    "https://s2.loli.net/2024/08/29/ovcDC6pyh2GiE7b.jpg",
    "https://s2.loli.net/2024/08/29/f8pAg1DbNcOd7Qa.jpg",
    "https://s2.loli.net/2024/08/29/9vK4yS5mMYwTtUP.jpg",
    "https://s2.loli.net/2024/08/29/wDyEUbAkuR1eKQl.jpg",
    "https://s2.loli.net/2024/08/29/7I6sZQEKcPb2riS.jpg",
    "https://s2.loli.net/2024/08/29/LTfYzx67EgDMO21.jpg",
    "https://s2.loli.net/2024/08/29/mgPZRl4dHzU1O8v.jpg",
    "https://s2.loli.net/2024/08/29/ZxfomEy8FK1YtrT.jpg",
]
var currentPicIndex = 0;// 当前图片索引

BackAnchor(backAnchorPic);
Space(40);
DisplayTitlePic(titlePics, arrowPic);
DisplayWorkName(workName_CN, workName_EN);
DisplayWorkLink_FlipHTML5(workLink);
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
// 作品链接展示方法：FlipHTML5
function DisplayWorkLink_FlipHTML5(workLink){
    var height = 900;// 作品链接iframe高度
    document.write("<div style=\"height: 200px;\"></div>");// 空行
    document.write("<div class=\"WorkLinkDiv\" style=\"position: absolute; left: 0; right: 0; height: " + height + "px;\">");
    document.write("<div style=\"position:relative; padding-top:max(60%,324px); width:90%; left:5%;\">");
    document.write("<iframe style=\"position:absolute; border: 2px solid #fff; width:100%; height: " + height + "px; left:0; top:0;\" src=\"" + workLink + "\"  seamless=\"seamless\" scrolling=\"no\" frameborder=\"0\" allowtransparency=\"true\" allowfullscreen=\"true\" ></iframe>");
    document.write("</div>");
    document.write("</div>");
    document.write("<div style=\"height:  " + height + "px;\"></div>");// 空行
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