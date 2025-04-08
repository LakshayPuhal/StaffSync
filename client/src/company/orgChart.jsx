// src/company/OrgChart.jsx
import React, { useState } from "react";
import Tree from "react-d3-tree";

const orgData = {
  name: "CEO",
  attributes: { role: "Chief Executive Officer", department: "Executive" },
  children: [
    {
      name: "CTO",
      attributes: { role: "Chief Technology Officer", department: "Tech" },
      children: [
        {
          name: "Engineering Manager",
          attributes: { role: "Manager", department: "Engineering" },
          children: [
            {
              name: "Vacant Position",
              attributes: { role: "Frontend Dev", department: "Engineering" },
            },
            {
              name: "Lakshay Puhal",
              attributes: { role: "Backend Dev", department: "Engineering" },
            },
          ],
        },
      ],
    },
    {
      name: "HR Head",
      attributes: { role: "Head", department: "Human Resources" },
      children: [
        {
          name: "Recruiter",
          attributes: { role: "Executive", department: "HR" },
        },
      ],
    },
  ],
};

const containerStyles = {
  width: "100%",
  height: "100vh",
};

const OrgChart = () => {
  const [translate, setTranslate] = useState({ x: 300, y: 200 });

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Organizational Chart</h2>
      <div style={containerStyles} className="border rounded-lg shadow">
        <Tree
          data={orgData}
          translate={translate}
          orientation="vertical"
          collapsible={true}
          pathFunc="step"
          zoomable
          nodeSize={{ x: 200, y: 100 }}
          styles={{
            links: {
              stroke: "#888",
              strokeWidth: 2,
            },
            nodes: {
              node: {
                circle: {
                  stroke: "#0ea5e9",
                  strokeWidth: 2,
                },
                name: {
                  fontSize: "14px",
                  fill: "#000",
                },
                attributes: {
                  fontSize: "12px",
                  fill: "#555",
                },
              },
              leafNode: {
                circle: {
                  stroke: "#22c55e",
                  strokeWidth: 2,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default OrgChart;
