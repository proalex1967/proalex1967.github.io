class Site{
    public static Init(): void {
        console.log("ready!");
        $("#menu").load("pages/Menu.html");
        $("#footer").load("pages/Footer.html");
        $("#main").load("pages/Home.html");
    }
    public static MenuClick(el: HTMLElement, page: string): void {
        $(".selected").removeClass("selected");
        $(el).addClass("selected");
        $("#main").load("pages/" + page);
    }
    public static MessageSubmitClick() {
        alert("Message Submitted");
    }
}