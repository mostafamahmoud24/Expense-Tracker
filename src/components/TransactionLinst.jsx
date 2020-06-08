import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

export default function TransactionLinst() {
  const { transaction } = useContext(GlobalContext);

  console.log(transaction);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transaction.map((item) => (
          <Transaction transaction={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
