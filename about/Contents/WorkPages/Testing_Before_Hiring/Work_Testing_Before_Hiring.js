var workName_CN = "能工智能审讯署";
var workName_EN = "Testing Before Hiring";
var workDesc_CN = "超文本游戏<br>win-x64<br>2020<br>"
    + "<br>这是一个互动游戏，参与者需要拿起游戏手柄在一个抽象的文字迷宫里漫游。在漫游过程中抉择面前的线路，将带领参与者进入不同的思维空间。"
    + "<br>游戏模拟即将被雇佣的工人正在进行的“思想矫正”环节测试。通过本次测试，观察参与者是否具有发展为“能工智能”的潜力。";
var workDesc_EN = "Hypertext Game<br>win-x64<br>2020<br>"
    + "<br>This is a interactive game. Players should pick up the gamepad and roam in an abstract text maze. Players choosing the route in front of them during the roaming process will lead they into different thinking spaces."
    + "<br>The game simulates the ongoing \"ideological correction\" test of the workers who will be hired. Through this test, observe whether the players have the potential to develop into Machining Intelligence.";
var workLink = "https://127.0.0.1/";
var workLinkTip = "作品观看 Preview<br>（Vimeo需要梯子）";
var workLinkBG = "../../../Resources/Images/Img_TestBG.gif";
var backAnchorPic = "../../../Resources/Images/Anim_BackAnchor.gif";

var arrowPic = "../../../Resources/Images/Anim_LeftArrow.gif";

var workPics = [
    "https://s2.loli.net/2024/08/28/XUwv9GRa8KCh6Pd.jpg",
    "https://s2.loli.net/2024/08/28/Ke8aSXR4V7ZvjJg.jpg",
    "https://s2.loli.net/2024/08/28/t459DfaFRwknOBM.jpg",
    "https://s2.loli.net/2024/08/28/2ruXYLZj64EJIWF.jpg",
    "https://s2.loli.net/2024/08/28/gOnexyEMrAKb6I1.jpg",
    "https://s2.loli.net/2024/08/28/6alsWKYgXbIix1A.jpg",
    "https://s2.loli.net/2024/08/28/HkUSdwx1FMc5YOe.jpg",
    "https://s2.loli.net/2024/08/28/VTeoAvU3SbHIlLP.jpg",
    "https://s2.loli.net/2024/08/28/2h5oiJVam8NGg3j.jpg",
    "https://s2.loli.net/2024/08/28/nFJlHpoza6rtRy7.jpg",
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