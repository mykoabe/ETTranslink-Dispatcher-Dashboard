import CardChart from "../card-charts";
const LoadStastics = () => {
  return (
    <>
      {typeof window !== "undefined" && (
    <CardChart
      chartType={"area"}
      title={"Load Stastics"}
      subtitle={"This Week Performance"}
      categories={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
    />
      )
    </>
  );
};
export default LoadStastics;
