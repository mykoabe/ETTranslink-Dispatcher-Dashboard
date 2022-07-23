import CardChart from "../card-charts";
const ECXContainer = () => {
  return (
    {(typeof window !== 'undefined') &&
  <Chart
  chartType={"bar"}
  title={"ECX Container Order"}
  subtitle={"All ECX Container Order Status"}
  categories={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
  />
  }
  );
};

export default ECXContainer;
