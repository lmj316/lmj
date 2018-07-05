$(function () {
    $(".cloud-1").animate({"opacity":"1"}, 1000, function () {
        $(".paper").animate({"transform":"translateZ(0px) rotateZ(360deg)"}, 2000, function () {
            $(".youngPower").animate({"transform":"translateZ(0px) scale(.8)"}, 2000, function () {
                $(".emblem").animate({"transform":"translateX(0px)"}, 2000);
                $(".words").animate({"transform":"translateX(0px)"}, 2000 ,function () {
                    $(".machine").animate({"transform":"translateZ(0px) scale(1)"}, 1000, function () {
                        $(".people").animate({"transform":"translateZ(0px) translateY(0px)"}, 1000);
                    })
                })
            })
        })
    })
})