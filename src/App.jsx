import React from "react";
import PriceCard from "./component/PriceCard.jsx";

const App = () => {
  let a = 100;
  let data = [
    {
      title: "Free",
      price: 0,
      user: "Single User",
      storageData: "50GB Storage",
      project: "Unlimited Public Projects",
      access: "Community Access",
      unlimitedPP: "Unlimited Private Project",
      dedicatedPS: "Dedicated Phone Support",
      domain: "Free Subdomain",
      statusReport: "Monthly Status Reports",
    },
    {
      title: "Plus",
      price: 9,
      user: "5 User",
      storageData: "50GB Storage",
      project: "Unlimited Public Projects",
      access: "Community Access",
      unlimitedPP: "Unlimited Private Project",
      dedicatedPS: "Dedicated Phone Support",
      domain: "Free Subdomain",
      statusReport: "Monthly Status Reports",
    },
    {
      title: "Pro",
      price: 49,
      user: "Unlimited User",
      storageData: "50GB Storage",
      project: "Unlimited Public Projects",
      access: "Community Access",
      unlimitedPP: "Unlimited Private Project",
      dedicatedPS: "Dedicated Phone Support",
      domain: "Free Subdomain",
      statusReport: "Monthly Status Reports",
    },
  ];
  return (
    <div>
      <PriceCard data={data} />
    </div>
  );
};

export default App;
