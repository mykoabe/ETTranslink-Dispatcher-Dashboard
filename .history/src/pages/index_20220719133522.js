import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { LatestOrders } from "../components/dashboard/latest-orders";
import { DashboardLayout } from "../components/dashboard-layout";

import OverallStastics from "src/components/dashboard/over-all-stastics";
import ECXLoadStatus from "src/components/dashboard/stastics/ecx-load-status";
import ECXContainer from "src/components/dashboard/stastics/ecx-container-status";
import LoadStastics from "src/components/dashboard/stastics/load-stastics";
import TodayCompliants from "src/components/dashboard/stastics/today-compliants";
import LoadListProgressInfo from "src/components/dashboard/stastics/loadlist-progress-info";

const Dashboard = () => {
    return 
}
    const { logout } = useAuth()
 
);

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
