import { useMeQuery } from "@adapters";
import {
  FullPageErrorFallback,
  FullPageSpinner,
  Header,
  Sidebar,
} from "@components";
import { MeProvider, useSidebarStore } from "@utils";
import clsx from "clsx";
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
    <MeProvider me={data}>
      <div
        className={clsx(
          "flex h-screen text-gray-900 dark:text-gray-50",
          sidebarProps && "overflow-hidden"
        )}
      >
        <div className="dark:bg-gray-850 lg:block bg-gray-100 overflow-y-auto">
          <Sidebar />
        </div>

        <div className="flex flex-col flex-1 w-full bg-white dark:bg-gray-900">
          {/* <Header /> */}
          <main className="h-full overflow-y-auto">
            <div className="container h-full px-6 mx-auto grid">{children}</div>
          </main>
        </div>
      </div>
    </MeProvider>
  );
};

export default HomeLayout;
