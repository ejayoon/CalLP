var svg = d3.select('#yearlyCal');

var dateInfo = new Date();
svg.append('text')
    .attr('transform', 'translate(' + [padding.l, padding.t] + ')')
    .text(dateInfo.getFullYear())
    .style('font-size', '1.0em')
    .style('fill', 'white')
    .style('text-anchor', 'front')
    .style('alignment-baseline', 'hanging');