import LogoutButton from "../components/LogoutButton";
import Profile from "../components/Profile";

const Dashboard = () => {
  return (
    <>
      <div>User dashboard</div>
      <Profile />

      <LogoutButton />
    </>
  );
};

export default Dashboard;
