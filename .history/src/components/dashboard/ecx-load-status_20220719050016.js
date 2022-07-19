import CardChart from "./card-charts";
const ECXLoadStatus = () => {
  return (
    <CardChart
      chartType={"line"}
      title={"ECX Loads"}
      subtitle={"All ECX loads Status"}
      categories={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
    />
  );
};
