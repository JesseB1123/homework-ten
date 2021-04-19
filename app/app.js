import * as MODEL from "../model/model.js";

function init() {
    $("nav .links a").click(function (e) {
        let btnId = this.id;
        let contentId = btnId + "Content";
        console.log("clicked " + btnId);

        if (btnId === "home") {
            //display a white nav and hero image/content on the home page
            $("nav").removeClass(`black-nav`);
            $(".black-logo").css("display", "none");
            $(".logo").css("display", "block");
            $(".hero").addClass(`hero-image`);
            $(".hero-text").css("display", "block");
            MODEL.getPageContent(contentId);
        } else {
            //on all other pages, display a black nav and no hero image/content
            $("nav").addClass(`black-nav`);
            $(".black-logo").css("display", "block");
            $(".logo").css("display", "none");
            $(".hero").removeClass(`hero-image`);
            $(".hero-text").css("display", "none");
            MODEL.getPageContent(contentId);
        }

        //gets the button ids for individual tours and links to the pages
        $(".tour-promo a").click(function (e) {
            let tourBtnId = this.id;
            let tourContentId = tourBtnId + "Content";
            MODEL.getPageContent(tourContentId);
        })
    })
}

$(document).ready(function () {
    init();
    MODEL.getPageContent("homeContent");
})