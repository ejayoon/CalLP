// Your code here!

// date info
var dateInfo = new Date();
var dayDict = { 0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday' };
var monthDict = {
    1: 'January', 2: 'Feburary', 3: 'March', 4: 'April', 5: 'May', 6: 'June',
    7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'
};
var calInfo = {
    day: dateInfo.getDay(),
    dayStr: dayDict[dateInfo.getDay()],
    date: dateInfo.getDate(),
    month: dateInfo.getMonth() + 1,
    monthStr: monthDict[dateInfo.getMonth() + 1],
    year: dateInfo.getFullYear()
};

var oneDayms = 24 * 60 * 60 * 1000;
function dateBtw(d1, d2) {
    return Math.round(Math.abs((d1.getTime() - d2.getTime()) / (oneDayms)));
}
function dateGen(yyyy, mm, dd) {
    return new Date(mm + '/' + dd + '/' + yyyy);
}

var feb1 = new Date('02/01/' + calInfo.year);
var mar1 = new Date('03/01/' + calInfo.year);

// firstD: a dictionary storing Date object of the 1st day of each month of current year
var firstD = {};
Object.keys(monthDict).forEach(function (m) {
    firstD[m] = dateGen(calInfo.year, m, 1);
});

var monthDayDict = {
    1: 31, 2: dateBtw(firstD[3], firstD[2]), 3: 31, 4: 30, 5: 31, 6: 30,
    7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
};

//var jan1 = new Date('01/01' + calInfo.year);
//var sunofY = jan1.getDate() - ((6 - jan1.getDay()) % 6);
//var yearSundayList = [];
//while (sunofY < new Date('12/31' + calInfo.year)) {
//    yearSundayList.append(sunofY.toString());
//    sunofY += 7;
//};

function oneDigitPrint(num) {
    if (num < 10) {
        return '0' + num;
    };
    return num;
};


var gridT = 1;

// default layout
var svgs = { svgY: d3.select('#yearlyCal'), svgM: d3.select('#monthlyCal'), svgW: d3.select('#weeklyCal'), svgD: d3.select('#dailyCal') }

var marginLR = 0;
var marginTB = 0;
var width = 240;
var height = width * 4 / 3;
var barH = height / 8;

var p = width / 80;
var padding = { l: p, r: p, t: p, b: p };

Object.keys(svgs).forEach(function (key) {
    svgs[key] = svgs[key].attr('viewBox', marginLR + " " + marginTB + " " + width + " " + height);

    svgs[key].append('rect')
        .attr('transform', 'translate(0, 0)')
        .style('width', width)
        .style('height', height)
        .style('fill', 'white');

    svgs[key].append('rect')
        .attr('transform', 'translate(0, 0)')
        .style('width', width)
        .style('height', barH)
        .style('fill', 'black');
});
