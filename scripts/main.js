$(document).ready(function () {
    $(".banner-text").delay(500).animate({ opacity: 1 }, 700);

    $(".products div").mouseenter(function () {
        $(this).animate({ opacity: 0.7 }, 700);
    })

    $(".products div").mouseleave(function () {
        $(this).animate({ opacity: 1 }, 700);
    })
    console.log(document.getElementById("mySidenav").style);
})

function openNav() {
        if ((document.getElementById("mySidenav").style.width) && (document.getElementById("mySidenav").style.width != "0px")) {
            document.getElementById("mySidenav").style.width = "0";
        }
        else {
            document.getElementById("mySidenav").style.width = "100%";
        }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



