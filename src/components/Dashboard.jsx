  import React from "react";

const Dashboard = ({ dark, transactions }) => {


  const balance = transactions.reduce((p, c) => p + c.amount, 0);

  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((p, c) => p + c.amount, 0);

  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((p, c) => p + c.amount, 0);

  return (
    <div className="row g-3 my-3">
      <div className="col-md-4 col-sm-12">
        <div
          className={
            dark
              ? "card p-3 bg-dark text-light"
              : "card p-3 bg-success text-light"
          }
        >
          <h3>Total Income : </h3>
          <h1>{income}</h1>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div
          className={
            dark
              ? "card p-3 bg-dark text-light"
              : "card p-3 bg-danger text-light"
          }
        >
          <h3>Total Expense : </h3>
          <h1>{expense}</h1>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div
          className={
            dark
              ? "card p-3 bg-dark text-light"
              : "card p-3 bg-warning text-light"
          }
        >
          <h3>Total Balance : </h3>
          <h1>{balance}</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
