import RequestedLoad from "src/components/requested-load/requested-load";

const AppLoadRequest = () => {
  return <RequestedLoad />;
};
AppLoadRequest.getLayout = (page) => (
  return <DashboardLayout>{page}</DashboardLayout>;
)
export default AppLoadRequest;
