var svg = svgs['svgW'];

svg.append('text')
    .attr('transform', 'translate(' + [padding.l, padding.t] + ')')
    .text(calInfo.monthStr + ' ' + calInfo.date)
    .style('font-size', '1.0em')
    .style('fill', 'white')
    .style('text-anchor', 'front')
    .style('alignment-baseline', 'hanging');

var dayWidth = width / 7;
for (i = 1; i < 7; i += 2) {
    svg.append('rect')
        .attr('class', 'weekly gridlines')
        .attr('transform', 'translate(' + [dayWidth * i + gridT / 2, barH - gridT] + ')')
        .attr('width', dayWidth + gridT)
        .attr('height', calH + padding.b);
}

var hourH = (calH) / 24;
for (i = 1; i < 24; i += 2) {
    svg.append('rect')
        .attr('class', 'weekly timelines')
        .attr('transform', 'translate(' + [- gridT / 2, barH + hourH * i - gridT / 2] + ')')
        .attr('width', width + gridT)
        .attr('height', hourH + gridT);
}



var days = [];
for (i = -1; i < 6; i++) {
    var cur = new Date();
    cur.setDate(cur.getDate() + i);

    days.push(cur);
}

var weekG = svg.selectAll('.monthly-day')
    .data(days)
    .enter()
    .append('g')
    .attr('class', 'weekG')
    .attr('transform', function (d, i) {
        return 'translate(' + [dayWidth * i, barH] + ')';
    });

weekG.append('text')
    .attr('class', 'weekly dayname')
    .attr('transform', function () {
        return 'translate(' + [dayWidth / 2, -padding.b] + ')';
    })
    .text(function (d) {
        console.log(d.toString());
        return dayDict[d.getDay()].substring(0, 3)
    });

weekG.append('text')
    .attr('class', 'weekly dayname date')
    .attr('transform', function () {
        return 'translate(' + [dayWidth / 2, -padding.b*4] + ')';
    })
    .text(function (d) {
        console.log(d.toString());
        return (d.getMonth() + 1) + '/' + d.getDate();
    });

//function updateWeekly() {
//    alert(calInfo.date);
//}

//$(document).ready(function (e) {
//    $('#submit').click(updateWeekly());
//});