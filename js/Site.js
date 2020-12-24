var Site = /** @class */ (function () {
    function Site() {
    }
    Site.Init = function () {
        console.log("ready!");
        $("#menu").load("pages/Menu.html");
        $("#footer").load("pages/Footer.html");
        $("#main").load("pages/Home.html");
    };
    Site.MenuClick = function (el, page) {
        $(".selected").removeClass("selected");
        $(el).addClass("selected");
        $("#main").load("pages/" + page);
    };
    Site.MessageSubmitClick = function () {
        alert("Message Submitted");
    };
    return Site;
}());
//# sourceMappingURL=Site.js.map