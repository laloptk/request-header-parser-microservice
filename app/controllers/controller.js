"use strict";

function getCorrectStrings() {
    
    this.processStrings = function(rq) {
        var ipAdress = rq.headers["x-forwarded-for"];
        var language = rq.headers["accept-language"].substring(0, rq.headers["accept-language"].indexOf(","));
        var software = rq.headers["user-agent"].substring(rq.headers["user-agent"].indexOf("(") + 1, rq.headers["user-agent"].indexOf(")"));
        
        return { ipaddress: ipAdress, language: language, software: software };
    };
}

module.exports = getCorrectStrings;