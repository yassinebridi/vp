import { useMeQuery } from "@adapters";
import {
  FullPageSpinner,
  FullPageErrorFallback,
  Sidebar,
  Header,
} from "@components";
import { useSidebarStore } from "@utils";
import React from "react";
import { useHistory } from "react-router";

export interface HomeLayoutProps {}
const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  const { setSidebarProps, sidebarProps } = useSidebarStore();
  const router = useHistory();

  React.useEffect(() => {
    setSidebarProps(false);
  }, [router]);

  const { data, status, error } = useMeQuery();

  if (status === "loading" || status === "idle") return <FullPageSpinner />;
  if (status === "error") return <FullPageErrorFallback error={error} />;

  return (
    <div
      className={`flex h-screen text-gray-900 dark:text-gray-50 bg-gray-50 dark:bg-gray-900 ${
        sidebarProps && "overflow-hidden"
      }`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header me={data.me} />
        <main className="h-full overflow-y-auto">
          <div className="container h-full px-6 mx-auto grid">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default HomeLayout;
