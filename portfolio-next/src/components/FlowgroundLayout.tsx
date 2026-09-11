"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import ProfileView from "./ProfileView";
import PortfolioView from "./PortfolioView";
import FlowgroundView from "./FlowgroundView";
import EducationView from "./EducationView";
import ContactView from "./ContactView";

export default function FlowgroundLayout() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "portfolio":
        return <PortfolioView />;
      case "flowground":
        return <FlowgroundView />;
      case "education":
        return <EducationView />;
      case "contact":
        return <ContactView />;
      default:
        return <ProfileView setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* Left Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Right Viewport Area */}
      <main className="flex-1 p-6 lg:p-12 bg-white overflow-y-auto min-h-screen">
        {renderActiveTab()}
      </main>
    </div>
  );
}
