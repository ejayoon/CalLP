var svg = svgs['svgD'];

svg.append('text')
    .attr('transform', 'translate(' + [padding.l, padding.t] + ')')
    .text(calInfo.monthStr + ' ' + calInfo.date)
    .style('font-size', '1.0em')
    .style('fill', 'white')
    .style('text-anchor', 'front')
    .style('alignment-baseline', 'hanging');

svg.append('rect')
    .attr('class', 'weekly gridlines')
    .attr('transform', 'translate(' + [-gridT/2, barH - gridT/2] +')')
    .attr('width', width/2 + gridT)
    .attr('height', height - barH + gridT);

var hourH = (height - barH) / 24;
for (i = 1; i < 24; i += 2) {
    svg.append('rect')
        .attr('class', 'weekly timelines')
        .attr('transform', 'translate(' + [- gridT / 2, barH + hourH * i - gridT / 2] + ')')
        .attr('width', width/2 + gridT)
        .attr('height', hourH + gridT);
}