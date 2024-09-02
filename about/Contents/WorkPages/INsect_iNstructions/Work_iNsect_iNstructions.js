var workName_CN = "昆虫说明书";
var workName_EN = "iNsect iNstructions";
var workDesc_CN = "互动游戏<br>win-x64<br>2024<br>"
    + "<br>本产品为iNsect式训练器，型号：CHAOS-NN-001。"
    + "<br>操作说明：A键进入、B键学习、Y键遗忘。"
    + "<br>故障排除：一、使用过程中若出现非人为故障，属于正常情况。二、切勿与模型交流。三、请做好个人防护。"
    + "<br>其他信息：重复、预知性、训练、神经科学、混沌、模式、模型。";
var workDesc_EN = "Video game<br>win-x64<br>2024<br>"
    + "<br>This product is the \"iNsect\" style trainer. Product model: CHAOS-NN-001."
    + "<br>Operation Description: A key to Enter, B key to Learn, Y key to Forget."
    + "<br>Troubleshooting: I. It's aa Normla sitautioN that if there a NoN-humaN giltch duriNg u.se. II. Do not communicate with the model. III. Please do personal protection."
    + "<br>Additional Information: Repetition, Predictability, Training, Neuroscience, Chaos, Patterns, Models.";
var workLink = "https://iamsleepingnow.itch.io/game-insect-instructions/download/JPrACMKVGFImHMwkjmY2ke_Cbyvcrk2OdVap9Lss";
var workLinkTip = "作品下载 Download<br>（itch需要梯子）";
var workLinkBG = "../../../Resources/Images/Img_TestBG.gif";
var backAnchorPic = "../../../Resources/Images/Anim_BackAnchor.gif";

var arrowPic = "../../../Resources/Images/Anim_LeftArrow.gif";

var workPics = [
    "https://s2.loli.net/2024/08/28/goVGQFqPW5lnifC.jpg",
    "https://s2.loli.net/2024/08/28/ht5mcBlzjvT39YF.jpg",
    "https://s2.loli.net/2024/08/28/yu7B83KIC6vlMfn.jpg",
    "https://s2.loli.net/2024/08/28/vgCdJQijY8W7GoX.jpg",
    "https://s2.loli.net/2024/08/28/qQXi4jfrNIdTRvU.jpg",
    "https://s2.loli.net/2024/08/28/NM4znkQTljDiAof.jpg",
    "https://s2.loli.net/2024/08/28/Ffv3aSdkZMgOJBl.jpg",
    "https://s2.loli.net/2024/08/28/4ol9wIcdVpyKHfA.jpg",
    "https://s2.loli.net/2024/08/28/RlrCeSwgZLUYhty.jpg",
    "https://s2.loli.net/2024/08/28/EPx9BgLNHsUZpaw.jpg",
]
var currentPicIndex = 2;// 当前图片索引

BackAnchor(backAnchorPic);
Space(40);
DisplayTitlePic(workPics, arrowPic);
DisplayWorkName(workName_CN, workName_EN);
DisplayWorkLink(workLink, workLinkTip, workLinkBG);
DisplayWorkWidget("https://itch.io/embed/2931894", "https://iamsleepingnow.itch.io/game-insect-instructions");
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
// 作品站外网页展示方法
function DisplayWorkWidget(url1, url2){
    document.write("<iframe frameborder=\"0\" src=\"" + url1 + "\" width=\"552\" height=\"167\"><a href=\"" + url2 + "\">昆虫说明书 (iNsect iNstructions) by Iamsleepingnow</a></iframe>");// 空行
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