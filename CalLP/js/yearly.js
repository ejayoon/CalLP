//var svg = d3.select('#yearlyCal');
var svg = svgs['svgY'];

svg.append('text')
    .attr('transform', 'translate(' + [padding.l, padding.t] + ')')
    .text(dateInfo.getFullYear())
    .style('font-size', '1.0em')
    .style('fill', 'white')
    .style('text-anchor', 'start')
    .style('alignment-baseline', 'hanging');

var dayCellH = calH / 31;
var dayCellW = width / 12;
Object.keys(monthDict).forEach(function (m) {
    var days = Array.from(new Array(monthDayDict[m]), (x, i) => i+1);
    var monthG = svg.append('g')
        .attr('class', 'yearly month-column')
        .attr('transform', function () {
            return 'translate(' + [dayCellW * (m - 0.5), barH] + ')';
        });

    monthG.append('text')
        .attr('class', 'yearly month')
        .attr('transform', function () {
            return 'translate(' + [0, -padding.b] + ')';
        })
        .text(m);

    monthG.selectAll('.monthly-day')
        .data(days)
        .enter()
        .append('text')
        .attr('class', function (i) {
            if (dateGen(calInfo.year, m, i).getDay() != 0) {
                return 'yearly date';
            } else {
                return 'yearly date Sunday';
            }
                
        })
        .attr('transform', function (i) {
            return 'translate(' + [0, dayCellH * (i - 1)] + ')';
        })
        .text(function (i) { return oneDigitPrint(i); });
    
});
