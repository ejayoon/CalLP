//var svg = d3.select('#monthlyCal');
//var marginLR = 0;
//var marginTB = 0;
//var width = 240;
//var height = width * 4 / 3;

var svg = svgs['svgM'];

svg.append('text')
    .attr('transform', 'translate(' + [padding.l, padding.t] + ')')
    .text(calInfo.monthStr)
    .style('font-size', '1.0em')
    .style('fill', 'white')
    .style('text-anchor', 'front')
    .style('alignment-baseline', 'hanging');

var dayPadding = 0;
var dayWidth = width / 7 - dayPadding * 2;
var dayHeight = (calH) / 6;

// day names in the bar
Object.keys(dayDict).forEach(function (d) {
    svg.append('text')
        .attr('class', 'monthly dayname')
        .attr('transform', function () {
            return 'translate(' + [dayWidth * (d) + dayWidth/2, barH - padding.b] + ')';
        })
        .text(dayDict[d].substring(0, 3));
});


var startDay = firstD[calInfo.month].getDay();
var days = Array.from(new Array(42), (x, i) => i);

var dayG = svg.append('g')
    .attr('class', 'days-group')
    .selectAll('.monthly-day')
    .data(days)
    .enter()
    .append('g')
    .attr('class', 'monthly day')
    .attr('transform', function (i) {
        return 'translate(' + [dayWidth * (i % 7) + dayPadding * (1 + (i % 7) * 2), (dayHeight + dayPadding * 2) * (Math.floor(i / 7)) + barH] + ')';
    });

dayG.each(function (i) {
    var curI = i - startDay;
    var txt = i - startDay + 1;
    var gClass = ''
    if (curI < 0) {
        txt = monthDayDict[calInfo.month - 1] + curI;
        gClass = ' notcur'
    } else if (curI >= monthDayDict[calInfo.month]) {
        txt = i - startDay - monthDayDict[calInfo.month] + 1;
        gClass = ' notcur'
    }

    var dayn = dayDict[i % 7];

    d3.select(this).append('text')
        .attr('class', 'monthly day date ' + dayn + gClass)
        .attr('transform', 'translate(' + [p, p] + ')')
        .text(txt);
});


//dayG.append('rect')
//    .attr('class', 'monthly day gridlines')
//    .attr('transform', 'translate(0, 0)')
//    .attr('width', dayWidth)
//    .attr('height', dayHeight);

for (i = 1; i < 7; i += 2) {
    svg.append('rect')
        .attr('class', 'monthly gridlines')
        .attr('transform', 'translate(' + [dayWidth * i + gridT / 2, barH - gridT] + ')')
        .attr('width', dayWidth + gridT)
        .attr('height', calH + padding.b);
}
