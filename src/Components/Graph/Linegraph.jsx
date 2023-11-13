import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import styles from "./Graphs.module.css";
// import Dropdown from "../Dropdowns/Dropdowns";
// import {manage, months} from "./Dropdown"
import Header from "./Header";

const Linegraph = (props) => {
  const title = props.title;
  const differ = props.differ;
  const svgRef = useRef(null);

  useEffect(() => {
    // Set up the SVG container
    const svg = d3.select(svgRef.current);

    svg.selectAll("*").remove();

    // Get the width and height of the container div
    const containerWidth = svgRef.current.clientWidth;
    const containerHeight = svgRef.current.clientHeight;

    // Set up the x-axis scale
    const xScale = d3.scaleLinear().domain([8, 19]).range([0, containerWidth]);

    // Set up the y-axis scale
    const yScale = d3.scaleLinear().domain([0, 3]).range([containerHeight, 0]);

    // Generate a sample data array for the curve
    const data = d3.range(8.5, 19.5, 1).map((d) => ({
      x: d,
      y: Math.sin(d - differ) + 1.6, // Adjust the formula for different wave shapes
    }));

    // Create a line generator
    const lineGenerator = d3
      .line()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y))
      .curve(d3.curveNatural);

    // Append the curve path to the SVG
    svg
      .append("path")
      .datum(data)
      .attr("d", lineGenerator)
      .attr("fill", "none")
      .attr("stroke", "var(--cambridge-blue)");

    // Add the x-axis without ticks and a line
    const xAxis = svg
      .append("g")
      .attr("transform", `translate(0, ${containerHeight})`)
      .call(
        d3
          .axisBottom(xScale)
          .tickValues(data.map((d) => d.x))
          .tickSize(0)
          .tickPadding(-30)
          .tickFormat((d) => Math.round(d))
      );

    // Customize the axis line color to white
    xAxis.select(".domain").attr("stroke", "white");

    // Customize the font size and color for the axis labels
    xAxis
      .selectAll(".tick text")
      .style("fill", "grey")
      .style("font-size", "12px");
  }, [differ]);

  return (
    <div className={styles.box}>
      <Header title={title} type="Dropdown" callback={props.callback} callbackDiff={props.callbackDiff}/>
      <svg ref={svgRef} width="100%" height="100%"></svg>
    </div>
  );
};

export default Linegraph;
