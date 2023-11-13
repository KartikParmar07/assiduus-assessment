import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import styles from "./Graphs.module.css";
// import Dropdown from "../Dropdowns/Dropdowns";
// import { manage, months } from "./Dropdown";
import Header from "./Header";

const Bargraph = (props) => {
  const title = props.title;
  const barType = props.barType;
  const month = props.month;
  const differ = props.differ;
  const svgRef = useRef(null);

  useEffect(() => {
    // Set up the SVG container
    const svg = d3.select(svgRef.current);

    svg.selectAll("*").remove();

    // Get the width and height of the container div
    const containerWidth = svgRef.current.clientWidth;
    const containerHeight = svgRef.current.clientHeight;

    // Custom x-axis values
    const xValues = ["Older", `${month} 01-08`, `${month} 09-16`, `${month} 17-24`, `${month} 25-31`, "Future"];

    // Dummy data for demonstration
    const data = xValues.map((d, index) => ({
      x: d,
      y: Math.sin(index - differ) + 1.6, // Adjust the formula for different wave shapes
    }));

    // Set up the x-axis scale
    const xScale = d3.scaleBand().domain(xValues).range([0, containerWidth]).padding(0.1);

    // Set up the y-axis scale
    const yScale = d3.scaleLinear().domain([0, 3]).range([containerHeight, 0]);

    // Add the x-axis without ticks and a line
    const xAxis = svg
      .append("g")
      .attr("transform", `translate(0, ${containerHeight})`)
      .call(
        d3
          .axisBottom(xScale)
          .tickValues(xValues)
          .tickSize(0)
          .tickPadding(-30) // Adjust as needed
      );

    // Customize the axis line color to white
    xAxis.select(".domain").attr("stroke", "white");

    // Customize the font size and color for the axis labels
    xAxis.selectAll(".tick text").style("fill", "grey").style("font-size", "12px");

        // Add bars on top of each x-axis value
        svg
        .selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d) => xScale(d.x)+30)
        .attr("y", (d) => yScale(d.y)-20)
        .attr("width", xScale.bandwidth()-60)
        .attr("height", (d) => containerHeight - yScale(d.y)-20)
        .attr("padding-left", "30px")
        .attr("rx", 5) // Set border radius for x-axis
        .attr("ry", 5)
        .style("fill", "var(--dark-pastel-green)"); // Adjust the color as needed
    
    
  }, [month, differ]);

  return (
    <div className={styles.box}>
      <Header title={title} type={barType==="simple"?"Button":"Dual"} />
      <svg ref={svgRef} width="100%" height="100%"></svg>
    </div>
  );
};

export default Bargraph;
