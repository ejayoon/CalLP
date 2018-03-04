// Your code here!

// default layout
var svgs = { svgY: d3.select('#yearlyCal'), svgM: d3.select('#monthlyCal'), svgW: d3.select('#weeklyCal'), svgD: d3.select('#dailyCal') }

var marginLR = 0;
var marginTB = 0;
var width = 240;
var height = width * 4 / 3;

Object.keys(svgs).forEach(function (key) {
    svgs[key] = svgs[key].attr('viewBox', marginLR + " " + marginTB + " " + width + " " + height);

    svgs[key].append('rect')
        .attr('transform', 'translate(0, 0)')
        .style('width', width)
        .style('height', height)
        .style('fill', '#ECE2D0');

    svgs[key].append('rect')
        .attr('transform', 'translate(0, 0)')
        .style('width', width)
        .style('height', height / 8)
        .style('fill', 'black');
});


