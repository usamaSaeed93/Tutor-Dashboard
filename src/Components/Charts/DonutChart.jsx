import React from "react";
import ReactApexChart from "react-apexcharts";
import { Box } from "@mui/system";
class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       options : {
            plotOptions: {
              bar: {
                distributed: true
              }
            }  
          }
    }}

  render() {
    return (
      <Box className="w-100 mt-4">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="100%"
        />
      </Box>
    );
  }
}
export default BarChart;
