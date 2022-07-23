import RequestedLoad from "src/components/requested-load/requested-load";
import Das

const AppLoadRequest = () => {
  return <RequestedLoad />;
};
AppLoadRequest.getLayout = (page) => (
  return <DashboardLayout>{page}</DashboardLayout>;
)
export default AppLoadRequest;
