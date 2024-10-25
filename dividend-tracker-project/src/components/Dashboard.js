// src/components/Dashboard.js
import React from "react";

function Dashboard() {
  const dividends = [
    { id: 1, name: "Apple Inc.", amount: "$5.00" },
    { id: 2, name: "Microsoft Corp.", amount: "$4.50" },
    { id: 3, name: "Tesla Inc.", amount: "$2.00" },
  ];

  return (
    <div>
      <h1>Dividend Tracker</h1>
      <ul>
        {dividends.map((dividend) => (
          <li key={dividend.id}>
            {dividend.name} - {dividend.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
