var workName_CN = "工人_博物馆";
var workName_EN = "Post Factory";
var workDesc_CN = "单屏影像<br>1920px × 1080px<br>13m50s<br>2019~2020<br>"
    + "<br>展现了一个生产历史的工厂与一个展览历史的展馆之间的交互。作为客观实在的历史被特殊的工人生产，然后被爆发的消耗者湮灭，被消费了的历史堕入回收站。"
    + "<br>历史是静止的循环吗？不。"
    + "<br>工厂里的工人不是人类，而是人类的概念，它们在历史上的分分合合导致了各种方向上与人对立。"
    + "<br>在工人_博物馆，历史随着工人的制造而成为原材料，接着就进入了加工和再创造的车间，诉说着一条不为人知的生产线与消费线。"
    + "<br>重叠的信息直射着历史的堆叠，随着进一步的破除，信息本身的立意也越激进。";
var workDesc_EN = "1-channel video<br>1920px × 1080px<br>13m50s<br>2019~2020<br>"
    + "<br>It shows the interaction between a factory producting history and an exhibition hall displaying history. The history, which is objective and realistic, was producted by special workforce and destroyed by explosive consumer. In the wake of above reasons, consumed history fell into recycler."
    + "<br>Is history a static cycle? No."
    + "<br>Workers in factory isn’t human being but the concept of it. Their anisotropy in history, obviously, lead they to oppose in various kinds to traditional humanity."
    + "<br>In Post factory, history became raw materials with people making, then entered the workshop of processing and re-creation. It was telling about an unknown production line and consumption line."
    + "<br>The overlapping information is reflect the overlapping history. With further destruction, the intention of the information itself becomes more radical.";
var workLink = "https://player.vimeo.com/video/919120298?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
var workLinkTip = "作品观看 Preview<br>（Vimeo需要梯子）";
var workLinkBG = "../../../Resources/Images/Img_TestBG.gif";
var backAnchorPic = "../../../Resources/Images/Anim_BackAnchor.gif";

var arrowPic = "../../../Resources/Images/Anim_LeftArrow.gif";

var workPics = [
    "https://s2.loli.net/2024/08/24/ja8YkhRKbCzm1NQ.jpg",
    "https://s2.loli.net/2024/08/24/FCRn5sPirjhbfSD.jpg",
    "https://s2.loli.net/2024/08/24/4r9oFTB687wP1RK.jpg",
    "https://s2.loli.net/2024/08/24/e1oOXcwKmG3JAEk.jpg",
    "https://s2.loli.net/2024/08/24/EbGP9OghK54XTLJ.jpg",
    "https://s2.loli.net/2024/08/24/g2PYktr8l9RFUbO.jpg",
    "https://s2.loli.net/2024/08/24/YFaRPWjkxslQMhN.jpg",
    "https://s2.loli.net/2024/08/24/dXq1i4EVabO2F8l.jpg",
    "https://s2.loli.net/2024/08/24/6IWVTkbzJcKxHuZ.jpg",
    "https://s2.loli.net/2024/08/24/89i7QqMokNwtvjP.jpg",
]
var currentPicIndex = 0;// 当前图片索引

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