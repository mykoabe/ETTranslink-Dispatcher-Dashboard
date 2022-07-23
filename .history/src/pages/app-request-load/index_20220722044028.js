import RequestedLoad from "src/components/requested-load/requested-load";
import { DashboardLayout } from "src/components/dashboard-layout";

const AppLoadRequest = () => {
  return <RequestedLoad />;
};
AppLoadRequest.getLayout = (page) => (
  return <DashboardLayout>{page}</DashboardLayout>;
)
export default AppLoadRequest;
