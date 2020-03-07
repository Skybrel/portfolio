var status = "";
var st_ = "";
var index = 0;
var forWPage = "first";
var bacWPage = "no";
var currPage = 0;
var toggleNum = 2;
var file_name = "";
var htmlDict = {
    "base64": "<tr class='menuTr1'><th class='menuTh1 bottomT'><a id='enco' href='/apps/base64-encoder/' target='_blank'>Encoder</a></th></tr><tr class='menuTr2'><th class='menuTh2'><a id='deco' href='/apps/base64-decoder/' target='_blank'>Decoder</a></th></tr>",
    "qrCode": "<tr class='menuTr3'><th class='menuTh3 bottomT'><a>QR Generator</a></th></tr><tr class='menuTr4'><th class='menuTh4'><a>QR Reader</a></th></tr>",
    "iot": "<tr class='menuTr5'><th class='menuTh5'><a>IOT</a></th></tr>",
    "photo": "<tr class='menuTr6'><th class='menuTh6'><a>Color Photo</a></th></tr>",
    "copyButton": "<button class='message'></button>",
    "reset": "<button id='reset' class='glyphicon glyphicon-retweet' style='position:absolute;width:40px;font-size:20pt;height:40px;background-color:transparent;top:307px;left:540px;border-color:transparent;border-radius:5px;'></button>",
}
var strR = ["An Electronic Engineer", "Embedded Developer", "Python Developer", "IOT Developer", "Django Developer", "Good Trainer"];
$(window).on('resize', function() {
    location.reload();
});


$(document).ready(function() {
    setInterval(function() {
        $(".nav5 strong").animate({
            opacity: 0
        }, function() {
            if (strR.length > index) {
                $(this).text(strR[index]).animate({ opacity: 1 });
                ++index;
            } else
                index = 0;
        });
    }, 2000);
    var current_addr = $(location).attr('href');
    if (current_addr.indexOf("encoder") != -1) {
        $(".nav-right-base64 a#encoder").css({ "color": "black", "background-color": "rgb(229,255,0)" });
        $(".content-base64").append(htmlDict['reset']);
        $(".content-base64").append(htmlDict['copyButton'])

    } else {
        $(".nav-right-base64 a#encoder").css({ "color": "white", "background-color": "rgba(229,255,0,0)" });

    }
    $('a#a4').click(function() {
        // history.pushState(null, '', '/en/step2');
        $('#content-inner-div').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        return false;

    });

    // $("#content-inner-div").scroll(function() {

    //   });
    if (current_addr.indexOf("decoder") != -1) {
        $(".nav-right-base64 a#decoder").css({ "color": "black", "background-color": "rgb(229,255,0)" });
    } else {
        $(".nav-right-base64 a#decoder").css({ "color": "white", "background-color": "rgba(229,255,0,0)" });

    }

    $("section.demo").click(function() {
        $(".content-skelton").css({ "transform": "translate(0,-100%)", "transition": "1s" });
    });
    $("div.top-right-mobile-navigaton b").click(function(e) {
        e.preventDefault();
        var arrow_dir = $("div.top-right-mobile-navigaton").attr("id");
        switch (arrow_dir) {
            case 'top-left-nav-right':
                $("#mini-mobile-menu-bar, #apps").show();
                $("div.top-right-mobile-navigaton").animate({ 'width': '100%' }, { duration: 500, queue: false });
                $('div.top-right-mobile-navigaton b').text('>').animate({ 'right': '342px' }, { duration: 500, queue: false });
                $(".div-header").fadeOut(300);
                $("div.top-right-mobile-navigaton").attr("id", "top-left-nav-left");
                break;
            case 'top-left-nav-left':
                $("#mini-mobile-menu-bar, #apps").hide();
                $("div.top-right-mobile-navigaton").animate({ 'width': '5%' }, { duration: 500, queue: false });
                $(".top-right-mobile-navigaton b").text('<').animate({ 'right': '0px' }, { duration: 500, queue: false });
                $("div.top-right-mobile-navigaton").attr("id", "top-left-nav-right");
                $(".div-header").fadeIn(1000);
                break;
            default:
                alert('wrong');
        }
    });

    $("nav.nav-right").swipe({
        swipe: function(event, direction) {
            if ("" + direction == "left") {
                var arrow_dir = $('div.top-right-mobile-navigaton').attr("id");
                switch (arrow_dir) {
                    case 'top-left-nav-right':
                        $("#mini-mobile-menu-bar, #apps").show();
                        $("div.top-right-mobile-navigaton").animate({ 'width': '100%' }, { duration: 500, queue: false });
                        $('div.top-right-mobile-navigaton b').text('>').animate({ 'right': '342px' }, { duration: 500, queue: false });
                        $(".div-header").fadeOut(300);
                        $("div.top-right-mobile-navigaton").attr("id", "top-left-nav-left");
                        break;
                    default:
                        alert('wrong');
                }
            }
        }
    });

    $("div.top-right-mobile-navigaton b, div.top-right-mobile-navigaton").swipe({
        swipe: function(event, direction) {
            if ("" + direction == "right") {
                var arrow_dir = $('div.top-right-mobile-navigaton').attr("id");
                switch (arrow_dir) {
                    case 'top-left-nav-left':
                        $("#mini-mobile-menu-bar, #apps").hide();
                        $("div.top-right-mobile-navigaton").animate({ 'width': '5%' }, { duration: 500, queue: false });
                        $('div.top-right-mobile-navigaton b').text('<').animate({ 'right': '0px' }, { duration: 500, queue: false });
                        $("div.top-right-mobile-navigaton").attr("id", "top-left-nav-right");
                        $(".div-header").fadeIn(1000);
                        break;
                    default:
                        alert('wrong');
                }
            }
        }
    });

    $("#apps").click(function() {
        $(this).css({ "color": "black", "background-color": "rgb(229, 255, 0)" });
        $(".master-menu").fadeIn(500);
    });
    // .mouseleave(function() {
    //     $(this).css({ "color": "white", "background-color": "transparent" });
    //     $(".master-menu").fadeOut(500);

    // });
    $(".download-btn").click(function() {
        var inputText = $("#coded-text").val();
        if (inputText.length > 0) {
            $("#coded-text").text('');
            $("#input-submit").trigger('click');
        } else {
            $(".warning-box").fadeIn(500);

        }
    });

    $("#coded-text").focus(function() {
        $(".warning-box").fadeOut(50);
    });

    $(".switch input").click(function() {
        if (toggleNum % 2 != 0) {
            toggleNum = 2;
            $("#filename").attr("disabled", "true");
            $("#filename").fadeOut(500);
            $("#fileExt-name").val("");
            $("#filename").val("");

        } else if (toggleNum % 2 == 0) {
            $("#filename").css({ "background-color": "transparent", "border-color": "rgb(84, 163, 228)" }).fadeIn(500);
            $("#filename").removeAttr("disabled");
            toggleNum += 1;
        }
    });

    $("#filename").focusout(function() {
        $("#fileExt-name").val($("#filename").val());
    });

    $(".message").css({ "color": "white", "width": "70px", "height": "25px", "bottom": "102.5px", "right": "85px", "position": "absolute", "background-color": "rgb(88,88,88)", "border-radius": "10px", "border": "none" }).text('</ > copy');

    $("#reset").click(function() {
        ajaxReset();
    });

    $(".message").click(function() {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(".output-text").text()).select();
        document.execCommand("copy");
        $temp.remove();
        $(".message").text("copied !");
    });

    $("form.encoder-form").on("submit", function(event) {
        event.preventDefault();
        var data = new FormData($('form.encoder-form').get(0));
        // alert($("#upload-file")[0].files[0].size + " Bytes");
        $.ajax({
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener('progress', function(e) {
                    if (e.lengthComputable) {
                        var percentValue = Math.round((e.loaded / e.total) * 100);
                        $(".progress-bar").width('' + percentValue + '%');
                        $(".progress p").text('' + percentValue + '%');
                    }
                });
                return xhr;
            },
            url: $(this).attr('action'),
            type: $(this).attr('method'),
            data: data,
            cache: false,
            processData: false,
            contentType: false,
            beforeSend: function() {
                var percentValue = '0%';
                $(".progress").show();
                // $(".textarea").css({ "color": "rgba(255, 255, 255)" }).attr("placeholder", "Drag & Drop File or Public Link");
                $(".progress-bar").width(percentValue);
                $(".progress p").text(percentValue);
            },
            success: function(response) {
                $('.output-text').text(response);
                $('.submit-btn').attr("disabled", "true");
            },
            error: function() {
                alert("check your code !");
            }
        });
    });

    $(".div-sidebar").attr("id", "hover-hide");
    $("#text1").hide();
    $("#toggle-text").text("<<");
    $("#a1").click(function() {
        $(".master-menu").fadeIn(500);
    });

    // $(".master-menu").mouseleave(function() {
    //     $(this).fadeOut(50);
    //     $("#sub-menu").fadeOut(50);
    //     $("i.divArrow").fadeOut(50);

    // });
    if ($(window).width() > 1000) {
        // $("#content-inner-div").scroll(function() {
        //     if ($(this).scrollTop() == 0 && (forWPage == "noWhere" || bacWPage == "no")) {
        //         if (forWPage == "noWhere") {
        //             $(this).animate({
        //                 scrollTop: 700
        //             }, 1000);
        //             forWPage = "first";
        //         }
        //     }
        //     if ($(this).scrollTop() > 80 && (forWPage == "first" || bacWPage == "no")) {
        //         if (forWPage == "first") {
        //             $(this).animate({
        //                 scrollTop: 700
        //             }, 1000);
        //             forWPage = "second";
        //             bacWPage = "yes";
        //         } else {
        //             $(this).animate({
        //                 scrollTop: 0
        //             }, 1000);
        //             forWPage = "noWhere";
        //             bacWPage = "no";

        //         }
        //     } else if ($(this).scrollTop() > 780 && (forWPage == "second" || bacWPage == "yes")) {
        //         if (forWPage == "second") {
        //             $(this).animate({
        //                 scrollTop: 1400
        //             }, 1000);
        //             forWPage = "third";
        //             bacWPage = "yes";
        //         } else {
        //             $(this).animate({
        //                 scrollTop: 0
        //             }, 1000);
        //             forWPage = "first";
        //         }
        //     }
        // });

        $(".div-sidebar").css({ "transform": "translate(-40px,0)" });
        $(".div-sidebar").mouseover(function() {
            status = $(this).attr("id");
            st_ = "off";
            $("#hover-hide").css({ "border-color": "rgba(36,169,83,1)", "transform": "translate(4px,0)", "transition": "1s" });
            $("#sideNavID").css({ "left": "5px", "top": "-4%" });
        });

        $("th.sideNav").click(function() {
            var sideOpt = $(this).attr("id");
            switch (sideOpt) {
                case 's1':
                    $("th.sideNav a").trigger("click");
                    break;
                case 's2':
                    $("th#s2 a").trigger("click");
                    break;
                case 's3':
                    $("th#s3 a").trigger("click");
                    break;
                case 's4':
                    $("th#s4 a").trigger("click");
                    break;
                case 's5':
                    $("th#s5 a").trigger("click");
                    break;
                case 's6':
                    $("th#s6 a").trigger("click");
                    break;
                default:
                    break;
            }
        });
        $(".div-sidebar").mouseleave(function() {
            if (status == "hover") {
                $("#sideNavID").css({ "left": "5px" });
                $("#hover-hide").css({ "border-color": "rgba(36,169,83,0)", "transform": "translate(-40px,0)", "transition": "1s" });
                if ($(".div-sidebar").width() < 200) {
                    $(".original").hide();
                } else {
                    $(".original").show();
                }
            }
            if (status == "hover-hide") {
                $("#sideNavID").css({ "left": "5px" });
                $("#hover-hide").css({ "border-color": "rgba(36,169,83,0)", "transform": "translate(-40px,0)", "transition": "1s" });
                if ($(".div-sidebar").width() < 200) {
                    $(".original").hide();
                } else {
                    $(".original").show();
                }
            }
        });

        $("div.top-right-mobile-navigaton").hide();
        $(".toggle-button").show();
        $("tr.menuTr th").mouseover(function() {
            var jsLang = $(this).attr("id");
            $(".nextMenu").empty();
            switch (jsLang) {
                case 'opt1':
                    $("i.dirArrow").css({ "top": "70px", "transform": "rotate(0deg)", "transition": "0.3s" }).fadeIn(50);
                    $(".nextMenu").css({ "height": "73px" }).append(htmlDict['base64']);
                    $("#sub-menu").css({ "height": "76.7px", "top": "69px", "transition": "0.2s" }).fadeIn(60);
                    $("i.dirArrow").mouseover(function() {
                        $(".nextMenu").empty();
                        $("i.dirArrow").css({ "top": "70px", "transform": "rotate(0deg)", "transition": "0.3s" }).fadeIn(50);
                        $(".nextMenu").css({ "height": "73px" }).append(htmlDict['base64']);
                        $("#sub-menu").css({ "height": "76.7px", "top": "69px", "transition": "0.2s" }).fadeIn(60);
                        $("#sub-menu table.nextMenu tr.menuTr1 th a").on('click', function() {
                            $("i.dirArrow").fadeOut(50);
                            $(".nextMenu").empty();
                            $("#sub-menu").fadeOut(50);
                        });
                        $("#sub-menu table.nextMenu tr.menuTr2 th a").on('click', function() {
                            $("i.dirArrow").fadeOut(50);
                            $(".nextMenu").empty();
                            $("#sub-menu").fadeOut(50);
                        });
                    });

                    break;
                case 'opt2':
                    $("i.dirArrow").css({ "top": "107px", "transform": "rotate(0deg)", "transition": "0.3s" }).fadeIn(50);
                    $(".nextMenu").css({ "height": "34px" }).append(htmlDict['photo']);
                    $("#sub-menu").css({ "height": "38.35px", "top": "107px", "transition": "0.2s" }).fadeIn(60);
                    $("i.dirArrow").mouseover(function() {
                        $(".nextMenu").empty();
                        $("i.dirArrow").css({ "top": "107px", "transform": "rotate(0deg)", "transition": "0.3s" }).fadeIn(50);
                        $(".nextMenu").css({ "height": "34px" }).append(htmlDict['photo']);
                        $("#sub-menu").css({ "height": "38.35px", "top": "107px", "transition": "0.2s" }).fadeIn(60);
                    });
                    break;
                case 'opt3':
                    $("i.dirArrow").css({ "top": "143px", "transform": "rotate(0deg)", "transition": "0.3s" }).fadeIn(50);
                    $(".nextMenu").css({ "height": "73px" }).append(htmlDict['qrCode']);
                    $("#sub-menu").css({ "height": "76.7px", "top": "143px", "transition": "0.2s" }).fadeIn(60);
                    $("i.dirArrow").mouseover(function() {
                        $(".nextMenu").empty();
                        $("i.dirArrow").css({ "top": "143px", "transform": "rotate(0deg)", "transition": "0.3s" }).fadeIn(50);
                        $(".nextMenu").css({ "height": "73px" }).append(htmlDict['qrCode']);
                        $("#sub-menu").css({ "height": "76.7px", "top": "143px", "transition": "0.2s" }).fadeIn(60);
                    });
                    break;
                case 'opt4':
                    $("i.dirArrow").css({ "top": "180px", "transform": "rotate(0deg)", "transition": "0.3s" }).fadeIn(50);
                    $(".nextMenu").css({ "height": "34px" }).append(htmlDict['iot']);
                    $("#sub-menu").css({ "height": "38.35px", "top": "180px", "transition": "0.2s" }).fadeIn(60);
                    $("i.dirArrow").mouseover(function() {
                        $(".nextMenu").empty();
                        $("i.dirArrow").css({ "top": "180px", "transform": "rotate(0deg)", "transition": "0.3s" }).fadeIn(50);
                        $(".nextMenu").css({ "height": "34px" }).append(htmlDict['iot']);
                        $("#sub-menu").css({ "height": "38.35px", "top": "180px", "transition": "0.2s" }).fadeIn(60);
                    });
                    break;
                default:
                    alert('check your code !');
            }
        }).mouseleave(function() {
            $("i.dirArrow").fadeOut(50);
            $(".nextMenu").empty();
            $("#sub-menu").fadeOut(50);
        });
        $(".container-down, .content-skelton").click(function() {
            $(".master-menu").fadeOut(50);
            $("#sideNavID").css({ "left": "5px" });
            $("#hover-hide").css({ "border-color": "rgba(36,169,83,0)", "transform": "translate(-30px,0)", "transition": "1s" });
            if ($(".div-sidebar").width() < 100) {
                $(".original").hide();
            } else {
                $(".original").show();
            }

        });
        $(".toggle-button").click(function() {
            var jsLang = $(this).attr("id");
            status = jsLang;
            switch (jsLang) {
                case 'collapse-toggle':
                    status = jsLang;
                    $("table.sideTable").hide();
                    $(this).attr("id", "yes");
                    $("#none").css({ "left": "5px", "height": "98%", "top": "-4%" });
                    $(".div-sidebar").attr("id", "hover-hide");
                    status = "hover";
                    $("table.sideTable,th.sideTable,td.sideTable").css({ "border": "1px solid rgba(255, 255, 255, 0)", "padding": "6px 2px", "border-collapse": "separate", "border-spacing": "0 26px", "font-size": "25px" }).show();
                    $(".original").hide();
                    $(".iconic").show();
                    $(".photo-div").hide();
                    $(".div-sidebar").css({ "width": "55px", "border-color": "rgba(36,169,83,1)", "left": "-1330px" });
                    $(".toggle-button").css({ "font-size": "150%", "height": "45px", "border-color": "rgb(36,169,83)", "background-color": "rgb(36,169,83)", "width": "30%", "transform": "translate(3px,0) rotate(180deg)", "transition": "0.5s" }).text("<");
                    break;
                case 'yes':
                    $(this).attr("id", "collapse-toggle");
                    $(".div-sidebar").attr("id", "hide");
                    st_ = "hide";
                    $("table.sideTable").hide();
                    $(".sidebar-navigation").css({ "left": "8px", "height": "83%", "top": "15%" });
                    $(".sidebar-navigation").attr("id", "none");
                    $("table.sideTable,th.sideTable,td.sideTable").css({ "border": "3px solid rgba(255, 255, 255, 0)", "padding": "10px 15px 10px 15px", "border-collapse": "separate", "border-spacing": "0 8.2px", "font-size": "17px" }).show();
                    $(".original").show();
                    $(".iconic").hide();
                    status = jsLang;
                    $(".div-sidebar").css({ "width": "200px", "border-color": "rgb(36,169,83)", "left": "-1175px", "transition": "1s" });
                    $(".toggle-button").css({ "border": "1px solid rgb(36, 169, 83)", "font-size": "15px", "width": "12%", "height": "45px", "transform": "rotate(0deg)" }).text("<<");
                    $(".sidebar-navigation").fadeIn(2000);
                    $(".photo-div").fadeIn(2000);
                    break;
                default:
                    alert("Default");
            }
        });
    }
    if ($(window).width() < 500) {
        $(".div-sidebar").css({ "transform": "translate(-70px,0)" });
        $("#mini-mobile-menu-bar, #apps").hide();
        $("div.top-right-mobile-navigaton").show();
        $(".toggle-button").show();
        $("tr.menuTr th").click(function() {
            var jsLang = $(this).attr("id");
            // alert(jsLang);
            $(".nextMenu").empty();
            switch (jsLang) {
                case 'opt1':
                    $("i.dirArrow").css({ "top": "68px", "transform": "rotate(0deg)", "transition": "0.3s" }).fadeIn(50);
                    $(".nextMenu").css({ "height": "100%" }).append(htmlDict['base64']);
                    $("#sub-menu").css({ "height": "50px", "top": "65px", "transition": "0.2s" }).fadeIn(60);
                    // $("i.dirArrow").mouseover(function() {
                    //     $(".nextMenu").empty();
                    //     $("i.dirArrow").css({ "top": "70px", "transform": "rotate(0deg)", "transition": "0.3s" }).fadeIn(50);
                    //     $(".nextMenu").css({ "height": "73px" }).append(htmlDict['base64']);
                    //     $("#sub-menu").css({ "height": "76.7px", "top": "69px", "transition": "0.2s" }).fadeIn(60);
                    // $("#sub-menu table.nextMenu tr.menuTr1 th a").on('click', function() {
                    //     $("i.dirArrow").fadeOut(50);
                    //     $(".nextMenu").empty();
                    //     $("#sub-menu").fadeOut(50);
                    // });
                    // $("#sub-menu table.nextMenu tr.menuTr2 th a").on('click', function() {
                    //     $("i.dirArrow").fadeOut(50);
                    //     $(".nextMenu").empty();
                    //     $("#sub-menu").fadeOut(50);
                    // });
                    // });

                    break;
                case 'opt2':
                    $("i.dirArrow").css({ "top": "93px", "transform": "rotate(0deg)", "transition": "0.3s" }).fadeIn(50);
                    $(".nextMenu").css({ "height": "100%" }).append(htmlDict['photo']);
                    $("#sub-menu").css({ "height": "25px", "top": "90px", "transition": "0.2s" }).fadeIn(60);
                    // $("i.dirArrow").mouseover(function() {
                    //     $(".nextMenu").empty();
                    //     $("i.dirArrow").css({ "top": "107px", "transform": "rotate(0deg)", "transition": "0.3s" }).fadeIn(50);
                    //     $(".nextMenu").css({ "height": "34px" }).append(htmlDict['photo']);
                    //     $("#sub-menu").css({ "height": "38.35px", "top": "107px", "transition": "0.2s" }).fadeIn(60);
                    // });
                    break;
                case 'opt3':
                    $("i.dirArrow").css({ "top": "117px", "transform": "rotate(0deg)", "transition": "0.3s" }).fadeIn(50);
                    $(".nextMenu").css({ "height": "100%" }).append(htmlDict['qrCode']);
                    $("#sub-menu").css({ "height": "50px", "top": "114px", "transition": "0.2s" }).fadeIn(60);
                    // $("i.dirArrow").mouseover(function() {
                    //     $(".nextMenu").empty();
                    //     $("i.dirArrow").css({ "top": "143px", "transform": "rotate(0deg)", "transition": "0.3s" }).fadeIn(50);
                    //     $(".nextMenu").css({ "height": "73px" }).append(htmlDict['qrCode']);
                    //     $("#sub-menu").css({ "height": "76.7px", "top": "143px", "transition": "0.2s" }).fadeIn(60);
                    // });
                    break;
                case 'opt4':
                    $("i.dirArrow").css({ "top": "142px", "transform": "rotate(0deg)", "transition": "0.3s" }).fadeIn(50);
                    $(".nextMenu").css({ "height": "100%" }).append(htmlDict['iot']);
                    $("#sub-menu").css({ "height": "25px", "top": "139px", "transition": "0.2s" }).fadeIn(60);
                    // $("i.dirArrow").mouseover(function() {
                    //     $(".nextMenu").empty();
                    //     $("i.dirArrow").css({ "top": "180px", "transform": "rotate(0deg)", "transition": "0.3s" }).fadeIn(50);
                    //     $(".nextMenu").css({ "height": "34px" }).append(htmlDict['iot']);
                    //     $("#sub-menu").css({ "height": "38.35px", "top": "180px", "transition": "0.2s" }).fadeIn(60);
                    // });
                    break;
                default:
                    alert('check your code !');
            }
        });
        $(".container-down, .content-skelton").click(function() {
            $(".master-menu").fadeOut(50);
            $("#sideNavID").css({ "left": "5px" });
            $("#hover-hide").css({ "border-color": "rgba(36,169,83,0)", "transition": "1s" });
            if ($(".div-sidebar").width() < 100) {
                $(".original").hide();
                $(".div-sidebar").css({ "top": "130px", "width": "57px", "left": "-260px", "border-color": "rgb(36,169,83,0)" });
                $(".toggle-button").css({ "font-size": "100%", "height": "45px", "border-color": "rgb(36,169,83)", "background-color": "rgb(36,169,83)", "width": "20%", "transform": "translate(3px,0)" }).text(">");
                $(".toggle-button").show();
            } else {
                $(".original").show();
            }

        });
        $(".toggle-button").click(function() {
            var jsLang = $(this).attr("id");
            status = jsLang;
            switch (jsLang) {
                case 'collapse-toggle':
                    status = jsLang;
                    $("table.sideTable").hide();
                    $(this).attr("id", "yes");
                    $("#none").css({ "left": "5px", "height": "98%", "top": "1%" });
                    $(".div-sidebar").attr("id", "hover-hide");
                    status = "hover";
                    $("table.sideTable,th.sideTable,td.sideTable").css({ "border": "1px solid rgba(255, 255, 255, 0)", "padding": "1px", "border-collapse": "separate", "border-spacing": "0 25px", "font-size": "20px" }).show();
                    $(".original").hide();
                    $(".iconic").show();
                    $(".photo-div").hide();
                    $(".div-sidebar").css({ "width": "57px", "left": "-165px", "border-color": "rgba(36,169,83,0)" });
                    $(".toggle-button").css({ "font-size": "100%", "height": "45px", "border-color": "rgb(36,169,83)", "background-color": "rgb(36,169,83)", "width": "20%", "transform": "translate(3px,0) rotate(180deg)", "transition": "0.5s" }).text("<");
                    break;
                case 'yes':
                    $(this).attr("id", "collapse-toggle");
                    $(".div-sidebar").attr("id", "hide");
                    st_ = "hide";
                    $("table.sideTable").show();
                    $(".sidebar-navigation").css({ "left": "10px", "height": "88%", "top": "10%" });
                    $(".sidebar-navigation").attr("id", "none");
                    $("table.sideTable,th.sideTable,td.sideTable").css({ "border": "3px solid rgba(255, 255, 255, 0)", "padding": "6px 4px 6px 4px", "border-collapse": "separate", "border-spacing": "0 10px", "font-size": "17px" }).show();
                    $(".original").show();
                    $(".iconic").hide();
                    status = jsLang;
                    $(".div-sidebar").css({ "width": "150px", "left": "-80px", "border-color": "rgb(36,169,83)", "transition": "1s" });
                    $(".toggle-button").css({ "border": "1px solid rgb(36, 169, 83)", "font-size": "10px", "width": "10%", "height": "45px", "transform": "rotate(0deg)" }).text("<<");
                    $(".sidebar-navigation").fadeIn(2000);
                    $(".photo-div").fadeIn(2000);
                    break;
                default:
                    alert("Default");
            }
        });
        $(".div-sidebar").swipe({
            swipe: function(event, direction) {
                if ('' + direction == "right") {
                    $(".toggle-button").attr("id", "collapse-toggle");
                    $(".div-sidebar").attr("id", "hide");
                    st_ = "hide";
                    $("table.sideTable").show();
                    $(".sidebar-navigation").css({ "left": "10px", "height": "88%", "top": "10%" });
                    $(".sidebar-navigation").attr("id", "none");
                    $("table.sideTable,th.sideTable,td.sideTable").css({ "border": "3px solid rgba(255, 255, 255, 0)", "padding": "6px 4px 6px 4px", "border-collapse": "separate", "border-spacing": "0 10px", "font-size": "17px" }).show();
                    $(".original").show();
                    $(".iconic").hide();
                    var jsLang = $(".toggle-button").attr("id");
                    status = jsLang;
                    $(".div-sidebar").css({ "width": "150px", "left": "-80px", "border-color": "rgb(36,169,83)", "transition": "1s" });
                    $(".toggle-button").css({ "border": "1px solid rgb(36, 169, 83)", "font-size": "10px", "width": "10%", "height": "45px", "transform": "rotate(0deg)" }).text("<<");
                    $(".sidebar-navigation").fadeIn(2000);
                    $(".photo-div").fadeIn(2000);
                }
                if ('' + direction == "left") {
                    $("table.sideTable").hide();
                    $(".toggle-button").attr("id", "yes");
                    $("#none").css({ "left": "5px", "height": "98%", "top": "1%" });
                    $(".div-sidebar").attr("id", "hover-hide");
                    status = "hover";
                    $("table.sideTable,th.sideTable,td.sideTable").css({ "border": "1px solid rgba(255, 255, 255, 0)", "padding": "1px", "border-collapse": "separate", "border-spacing": "0 25px", "font-size": "20px" }).show();
                    $(".original").hide();
                    $(".iconic").show();
                    $(".photo-div").hide();
                    $(".div-sidebar").css({ "width": "57px", "left": "-165px", "border-color": "rgba(36,169,83,0)" });
                    $(".toggle-button").css({ "font-size": "100%", "height": "45px", "border-color": "rgb(36,169,83)", "background-color": "rgb(36,169,83)", "width": "20%", "transform": "translate(3px,0) rotate(180deg)", "transition": "0.5s" }).text("<");
                }
            }
        });
    }

    $(".container-down").mouseover(function() {
        $("i.dirArrow").fadeOut(50);
        $(".nextMenu").empty()
        $("#sub-menu").fadeOut(50);
        if ($(".div-sidebar").width() >= 200) {
            $(".original").show();
            $("table.sideTable,th.sideTable,td.sideTable").css({ "border": "3px solid rgba(255, 255, 255, 0)", "padding": "6px 15px 6px 14px", "border-collapse": "separate", "border-spacing": "0 10px", "font-size": "17px" }).show();
        }
        // if ($(".div-sidebar").attr("id") == "hover-hide") {
        //     $(".original").hide();
        //     $("table.sideTable,th.sideTable,td.sideTable").css({ "border": "1px solid rgba(255, 255, 255, 0)", "padding": "1px", "border-collapse": "separate", "border-spacing": "0 22px", "font-size": "25px" }).show();
        // }

    });

    $("th.sideclick").click(function() {
        var jsLang = $(this).attr("id");
        $(".original").css({ "color": "#ffffff" });
        $(".sideclick").css({ "background-color": "rgba(229, 255, 0, 0)" });
        switch (jsLang) {
            case 's1':
                $("#s1").css({ "background-color": "rgb(36, 169, 83)" });
                $("#text1-1").css({ "color": "#000000" });
                break;
            case 's2':
                $("#s2").css({ "background-color": "rgb(36, 169, 83)" });
                $("#text2").css({ "color": "#000000" });
                break;
            case 's3':
                $("#s3").css({ "background-color": "rgb(36, 169, 83)" });
                $("#text3").css({ "color": "#000000" });
                break;
            case 's4':
                $("#s4").css({ "background-color": "rgb(36, 169, 83)" });
                $("#text4").css({ "color": "#000000" });
                break;
            case 's5':
                $("#s5").css({ "background-color": "rgb(36, 169, 83)" });
                $("#text5").css({ "color": "#000000" });
                break;
            case 's6':
                $("#s6").css({ "background-color": "rgb(36, 169, 83)" });
                $("#text6").css({ "color": "#000000" });
                break;
            default:
                alert('Nobody Wins!');
        }
    });
});

$('.btn').on('click', function() {
    $('#upload-file').trigger('click');
});

$('.submit-btn').on('click', function() {
    $('#submit').trigger('click');
});

$('.content-base64').mouseover(function() {
    file_name = $("#upload-file").val().replace(/C:\\fakepath\\/i, '');
    $(".textarea").attr("value", file_name);
});

// $("textarea").click(function() {
//     $("textarea").css({ "border": "3px solid rgba(0, 0, 0, 0.600)" });
// });

$(".div-box1").mouseover(function() {
    $(".textarea").css({ "background-color": "rgba(0, 0, 0, 0.400)" });
    $(".btn").css({ "background-color": "rgba(0, 0, 0, 0.400)" });
}).mouseleave(function() {
    $(".textarea").css({ "background-color": "rgba(0, 0, 0, 0.200)" });
    $(".btn").css({ "background-color": "rgba(0, 0, 0, 0.200)" });
});

$(window).on("load", function() {
    $(".se-pre-con").fadeOut("slow");
    $("table.sideTable,th.sideTable,td.sideTable").css({ "border": "1px solid rgba(255, 255, 255, 0)", "padding": "6px 2px", "border-collapse": "separate", "border-spacing": "0 26px", "font-size": "25px" }).show();
    $(".original").hide();
    $(".master-menu").hide();
    $(".progress").hide();
    $(".warning-box").fadeOut(5);
    if ($(window).width() > 1000) {
        $("div.top-right-mobile-navigaton").hide();
        $(".div-sidebar").css({ "top": "165px", "width": "60px", "border-color": "rgb(36,169,83,0)", "left": "-1323px" });
        $(".toggle-button").css({ "font-size": "150%", "height": "45px", "border-color": "rgb(36,169,83)", "background-color": "rgb(36,169,83)", "width": "30%", "transform": "translate(3px,0)" }).text(">");
        $(".toggle-button").show();
    }
    if ($(window).width() < 500) {
        $("div.top-right-mobile-navigaton").show();
        $(".div-sidebar").css({ "top": "130px", "width": "57px", "left": "-260px", "border-color": "rgb(36,169,83,0)" });
        $(".toggle-button").css({ "font-size": "100%", "height": "45px", "border-color": "rgb(36,169,83)", "background-color": "rgb(36,169,83)", "width": "20%", "transform": "translate(3px,0)" }).text(">");
        $(".toggle-button").show();

    }
    $(".iconic").show();
    $('#filename').attr("disabled", "true").fadeOut(5);
    $("i.dirArrow").fadeOut(1);
    $("#sub-menu").fadeOut(1);
    $(".photo-div").hide();
    $("#sideNavID").css({ "left": "5px", "height": "98%", "top": "1%" });
});

function ajaxReset() {
    $.ajax({
        url: "/reset_all/",
        type: "GET",
        cache: false,
        processData: false,
        contentType: false,
        beforeSend: function() {},
        success: function(response) {
            $('.output-text').text(response);
            $(".submit-btn").removeAttr("disabled");
            $(".message").text('</ > copy');
            $(".progress-bar").width("0%");
            $(".progress p").text("0%");
            $("#resetter").trigger("click");
            $(".progress").hide();
        },
        error: function() {
            alert("check your code !");
        }
    });
}