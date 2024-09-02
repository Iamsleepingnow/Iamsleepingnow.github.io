var workName_CN = "天地银行NFT";
var workName_EN = "NFT TIANDY Bank";
var workDesc_CN = "光栅画<br>尺寸可变<br>2021<br>"
    + "<br>一、NFT是一种代币，拥有基本货币职能；冥币也是一种代币，也拥有基本货币职能。"
    + "<br>二、NFT在虚拟的元宇宙中流通，所以NFT是虚拟的；冥币在虚拟的阴间中流通，所以冥币也是虚拟的。"
    + "<br>三、NFT的使用者在链上交易，契约是去中心化的；冥币的使用者在庙上交易，灰烬也是去中心化的。"
    + "<br>论证结束。“炒币”=“烧币”。";
var workDesc_EN = "Raster painting<br>Variable size<br>2021<br>"
    + "<br>I. NFTs are tokens that have a basic monetary function; ancestor money are also tokens that also has a basic monetary function."
    + "<br>II. NFTs circulate in the virtual metaverse, so NFTs are virtual; ancestor money circulate in the virtual netherworld, so ancestor money is also virtual."
    + "<br>III. Users of NFTs trade on the chain, and contracts are decentralized; users of ancestor money trade on the temple, and ashes are decentralized, too."
    + "<br>Argument closed. \"speculate on currency\" = \"let the money on fire\".";
//var workLink = "https://127.0.0.1/";
//var workLinkTip = "作品观看 Preview<br>（Vimeo需要梯子）";
//var workLinkBG = "../../../Resources/Images/Img_TestBG.gif";
var backAnchorPic = "../../../Resources/Images/Anim_BackAnchor.gif";

var arrowPic = "../../../Resources/Images/Anim_LeftArrow.gif";

var titlePics = [
    "https://s2.loli.net/2024/08/30/imUZ3zbEG5fTWet.jpg",
    "https://s2.loli.net/2024/08/30/Zrok8lMP5FxhAcU.jpg",
    "https://s2.loli.net/2024/08/30/x1TSuhjtn78fgpz.jpg",
    "https://s2.loli.net/2024/08/30/pAYgXzjEFZnITJD.jpg",
    "https://s2.loli.net/2024/08/30/zEYUcXVrfWHuRZd.jpg",
    "https://s2.loli.net/2024/08/30/D5whfQPcSIzGprs.jpg",
    "https://s2.loli.net/2024/08/30/m2CUZAIKVP3Ddri.jpg",
]
var workPics = [
    "https://s2.loli.net/2024/08/30/Zrok8lMP5FxhAcU.jpg",
    "https://s2.loli.net/2024/08/30/x1TSuhjtn78fgpz.jpg",
    "https://s2.loli.net/2024/08/30/pAYgXzjEFZnITJD.jpg",
    "https://s2.loli.net/2024/08/30/zEYUcXVrfWHuRZd.jpg",
    "https://s2.loli.net/2024/08/30/D5whfQPcSIzGprs.jpg",
    "https://s2.loli.net/2024/08/30/m2CUZAIKVP3Ddri.jpg",
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