// pages/Settings.tsx
import Sidebar from "../components/Sidebar";
import ProfileSettings from "../components/ProfileSettings";
import Layout from "../components/Layout";

export default function Settings() {
  return (
    <Layout>
      <div className="ml[-2em] mr-8">
        <ProfileSettings />
      </div>
    </Layout>
  );
}
