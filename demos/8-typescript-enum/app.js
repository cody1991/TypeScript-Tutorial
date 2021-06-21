var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
function isItSummber(month) {
    var isSummber;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummber = true;
            break;
        default:
            isSummber = false;
            break;
    }
    return isSummber;
}
console.log(isItSummber(Month.Jun));
console.log(isItSummber(6));
