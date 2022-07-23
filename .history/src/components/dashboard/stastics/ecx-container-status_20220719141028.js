import CardChart from "../card-charts";
const ECXContainer = () => {
  return (
    {(typeof window !== 'undefined') &&
  <Chart
    options={this.state.options}
    series={this.state.series}
    type="bar"
    width={500}
  />
  }
    {(typeof window !== "undefined") && 
      <CardChart
      chartType={"bar"}
      title={"ECX Container Order"}
      subtitle={"All ECX Container Order Status"}
      categories={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
    />
    }
    
  );
};

export default ECXContainer;
