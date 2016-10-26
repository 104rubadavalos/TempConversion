/**
 * Created by ruben.davalos470 on 10/19/16.
 */
"use strict";

function convert(degree) {
    var t;
    if (degree == "celsiusInput") {
        t = document.getElementById("celsiusInput").value * 9 / 5 + 32;
        document.getElementById("fahrenheitInput").value = Math.round(t); }

    else {
        t = (document.getElementById("fahrenheitInput").value - 32) * 5 / 9;
        document.getElementById("celsiusInput").value = Math.round(t);
    }
}

