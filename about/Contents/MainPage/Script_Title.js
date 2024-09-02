// 标题
var titles = [
    {
        name: "THE",
        pic: "./Resources/Images/Anim_Title_THE.gif",
        width: "13%",
        bottom: "30px",
    },
    {
        name: "WORK",
        pic: "./Resources/Images/Anim_Title_WORK.gif",
        width: "70%",
        bottom: "20px",
    },
    {
        name: "OF",
        pic: "./Resources/Images/Anim_Title_OF.gif",
        width: "8%",
        bottom: "40px",
    },
    {
        name: "YiweiPeng",
        pic: "./Resources/Images/Anim_Title_AUTHOR_en.gif",
        width: "20%",
        bottom: "0px",
    },
    {
        name: "YiweiPeng cn", //ㄆㄥˊㄧˋㄨㄟˇ
        pic: "./Resources/Images/Anim_Title_AUTHOR_cn.gif",
        width: "10%",
        bottom: "70px",
    },
    {
        name: "FROM",
        pic: "./Resources/Images/Anim_Title_FROM.gif",
        width: "13%",
        bottom: "60px",
    },
    {
        name: "2019",
        pic: "./Resources/Images/Anim_Title_2019.gif",
        width: "13%",
        bottom: "60px",
    },
    {
        name: "TO",
        pic: "./Resources/Images/Anim_Title_TO.gif",
        width: "8%",
        bottom: "60px",
    },
    {
        name: "THE BIG RIP",
        pic: "./Resources/Images/Anim_Title_BIGRIP.gif",
        width: "70%",
        bottom: "20px",
    }
];

// 空行
document.write("<div style=\"width: 100%; height: 100px;\"></div>");

document.write("<div class=\"title\">");
for (var i = 0; i < titles.length; i++){
    document.write(
        "<img class=\"titleImage\" src=\"" + titles[i].pic + "\""
        + "style=\"width: " + titles[i].width + "; margin-bottom: " + titles[i].bottom + ";\">"
    );
}
document.write("</div>");

// 空行
document.write("<div style=\"width: 100%; height: 512px;\"></div>");