import React from "react";
import { Container, Row, Col, } from "react-bootstrap";
import { Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  ScatterChart,
  Scatter,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Dummy data
const data = [
  { name: "Jan", value1: 400, value2: 300, value3: 50, value4: 20 },
  { name: "Feb", value1: 300, value2: 400, value3: 60, value4: 30 },
  { name: "Mar", value1: 200, value2: 250, value3: 70, value4: 40 },
  { name: "Apr", value1: 278, value2: 190, value3: 80, value4: 50 },
  { name: "May", value1: 189, value2: 150, value3: 90, value4: 60 },
];

const ChartExample = () => {
  return (
    <div>
      <Container>
      <Col className="pt-5 d-flex justify-content-center">
            <Typography variant="h3">Bar Chart & Line Chart</Typography>
          </Col>
          <div className="pt-3 pb-3">
              <hr />
            </div>     
        <Row>
          <Col>
            <BarChart width={500} height={400} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="value1" fill="#8884d8" />
              <Bar dataKey="value2" fill="#82ca9d" />
            </BarChart>
          </Col>
          <Col>
            <LineChart width={500} height={400} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value3" stroke="#8884d8" />
              <Line type="monotone" dataKey="value4" stroke="#82ca9d" />
            </LineChart>
          </Col>
        </Row>
        <Col className="pt-5 d-flex justify-content-center">
            <Typography variant="h3">Scatter Plot and Pie Chart</Typography>
          </Col>
          <div className="pt-3 pb-3">
              <hr />
            </div>     
        <Row>
          <Col>
            <ScatterChart width={500} height={400} data={data}>
              <XAxis dataKey="value1" type="number" name="stature" unit="cm" />
              <YAxis dataKey="value2" type="number" name="weight" unit="kg" />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Legend />
              <Scatter name="A school" data={data} fill="#8884d8" />
            </ScatterChart>
          </Col>
          <Col>
            <PieChart width={500} height={400}>
              <Pie
                data={data}
                dataKey="value1"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
              />
              <Pie
                data={data}
                dataKey="value2"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={110}
                outerRadius={140}
                fill="#82ca9d"
              />
              <Tooltip />
            </PieChart>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChartExample;
