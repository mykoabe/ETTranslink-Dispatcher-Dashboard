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
      
    />
    }
    
  );
};

export default ECXContainer;
