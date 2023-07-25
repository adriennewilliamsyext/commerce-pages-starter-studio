import { HexColor } from "@yext/studio";
import HeaderSimple from "./HeaderSimple";
import Footer from "./Footer";
import * as React from "react";
import logo from "../assets/images/logo.svg";

import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
} from "@yext/pages/components";
import { TemplateProps } from "@yext/pages";

export interface PageLayoutProps {
  children?: React.ReactNode;
  backgroundColor?: HexColor;
  templateData: TemplateProps;
}

export const initialProps = {
  backgroundColor: "#FFFFFF",
};

const PageLayout = ({
  children,
  backgroundColor,
  templateData,
}: PageLayoutProps) => {
  return (
    <AnalyticsProvider
      templateData={templateData}
      requireOptIn={false}
      enableDebugging={true}
    >
      <div className="min-h-screen" style={{ backgroundColor }}>
        <HeaderSimple backgroundColor="#d8b4fe" logo={logo} />
        <main>{children}</main>
        <Footer logo={logo} />
      </div>
    </AnalyticsProvider>
  );
};

export default PageLayout;
