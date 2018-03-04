var svg = d3.select('#monthlyCal');
var marginLR = 0;
var marginTB = 0;
var width = 240;
var height = width * 4 / 3;
svg.attr('viewBox', marginLR + " " + marginTB + " " + width + " " + height);
//var width = +svg.attr('width');
//var height = +svg.attr('height');

var p = width / 50;
var padding = { l: p, r: p, t: p, b: p };

var dateInfo = new Date();
var dayDict = { 0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday' };
function Month(num, name, enddate) {
    this.num = num;
    this.name = name;
    this.enddate = enddate;
}

var monthDict = {
    1: 'January', 2: 'Feburary', 3: 'March', 4: 'April', 5: 'May', 6: 'June',
    7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'
}
var calInfo = {
    day: dayDict[dateInfo.getDay()],
    date: dateInfo.getDate(),
    month: dateInfo.getMonth() + 1,
    monthStr: monthDict[dateInfo.getMonth() + 1],
    year: dateInfo.getFullYear()
}

svg.append('rect')
    .attr('transform', 'translate(0, 0)')
    .style('width', width)
    .style('height', height)
    .style('fill', '#ECE2D0');

svg.append('rect')
    .attr('transform', 'translate(0, 0)')
    .style('width', width)
    .style('height', height/8)
    .style('fill', 'black');

svg.append('text')
    .attr('transform', 'translate(' + [padding.l, padding.t] + ')')
    .text(calInfo.monthStr)
    .style('font-size', '1.0em')
    .style('fill', 'white')
    .style('text-anchor', 'front')
    .style('alignment-baseline', 'hanging');

var days = Array.from(new Array(42), (x, i) => i);
var dayPadding = 0;
var dayWidth = width / 7 - dayPadding * 2;
var dayHeight = height * 7/8 / 6;
var dayBeginH = height/8;
svg.append('g')
    .attr('class', 'days-group')
    .selectAll('.monthly-day')
    .data(days)
    .enter()
    .append('rect')
    .attr('class', 'monthly-day')
    .attr('transform', function (i) {
        return 'translate(' + [dayWidth * (i % 7) + dayPadding * (1 + (i % 7) * 2), (dayHeight + dayPadding*2) * (Math.floor(i / 7)) + dayBeginH] + ')';
    })
    .attr('width', dayWidth)
    .attr('height', dayHeight);