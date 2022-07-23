import CardChart from "../card-charts";
const ECXLoadStatus = () => {
  return (
    <>
      {typeof window !== "undefined" && (
    <CardChart
      chartType={"line"}
      title={"ECX Loads"}
      subtitle={"All ECX loads Status"}
      categories={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
    />
    
    </>
  );
};

export default ECXLoadStatus;
