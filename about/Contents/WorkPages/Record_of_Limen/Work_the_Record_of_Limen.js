var workName_CN = "阈限志";
var workName_EN = "the Record of Limen";
var workDesc_CN = "互动游戏<br>win-x64<br>2021<br>"
    + "<br>作品是围绕“阈限”概念来进行思维发散的一款实验性超文本游戏，让游玩者通过使用阈限的游戏方式来自由地编造自己独有的阈限理论。"
    + "<br>阈限是一个人类学概念，表示仪式归训过程中的半脱离状态。现代科学技术构造了诸多的阈限的环境，并充斥到了我们的日常周遭中，在这里将阈限语境嫁接到文学领域，在其语言的描述中，每时每刻都在发生舞台事件。而阈限空间是用来过渡事件的空间，且不存在人类活动，因为它不属于事件应当发生的区域。由于在故事叙述中的事件焦点是有限的，所以在绝大多数区域内其实都属于阈限的环境。"
    + "<br>作品侧重于关注阈限空间里的奇异状态，这种状态是一种友好的脱离感，一种对于人类社会而言的相对的静止。";
var workDesc_EN = "Video game<br>win-x64<br>2021<br>"
    + "<br>The work is an experimental hypertext video game that focuses on the concept of \"Liminal\" for thinking divergence. With the playmode of liminal, the player can freely construct their original liminal theory."
    + "<br>The liminal is a concept theory of anthropology, indicates the semi-detached state in the process of ritual training. Modern scientific technology constitutes many liminal environments like this, and pour into our daily surroundings. The context of liminal is grafted here into the field of literature, in the description of its language, the arena events are taking place at every moment. The liminal space is the space to transit events. There is no any human activity, because it is not belongs to the area where the event should occur. Owing to the finiteness of event focuses in the story narration, most of area is belongs to the liminal space."
    + "<br>The work focuses on the strange state in the liminal space, which is a sense of detachment, and a kind of relative stillness for human society.";
var workLink = "https://127.0.0.1/";
var workLinkTip = "作品观看 Preview<br>（Vimeo需要梯子）";
var workLinkBG = "../../../Resources/Images/Img_TestBG.gif";
var backAnchorPic = "../../../Resources/Images/Anim_BackAnchor.gif";

var arrowPic = "../../../Resources/Images/Anim_LeftArrow.gif";

var workPics = [
    "https://s2.loli.net/2024/08/28/X1Ukj5nhRyx8IQN.jpg",
    "https://s2.loli.net/2024/08/28/bw9DvKO6EHAciM2.jpg",
    "https://s2.loli.net/2024/08/28/TxpLmt8kI9DnO5l.jpg",
    "https://s2.loli.net/2024/08/28/yUGVl9LSJH1KmOF.jpg",
    "https://s2.loli.net/2024/08/28/fzXenO4cC7MHmqN.jpg",
    "https://s2.loli.net/2024/08/28/7Jervo8ntHPmqkK.jpg",
    "https://s2.loli.net/2024/08/28/6qEky5iFud3GgjT.jpg",
    "https://s2.loli.net/2024/08/28/U2AWf9Xwi8S3I6p.jpg",
    "https://s2.loli.net/2024/08/28/pmUoWGuRxTYqcLv.jpg",
    "https://s2.loli.net/2024/08/28/H31yxbZ4sL8GMPU.jpg",
]
var currentPicIndex = 1;// 当前图片索引

BackAnchor(backAnchorPic);
Space(40);
DisplayTitlePic(workPics, arrowPic);
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