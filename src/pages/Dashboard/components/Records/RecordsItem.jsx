import React from "react";
import currency from "currency.js";
import { Payment, PaymentTitle, PaymentTotal } from "../../Dashboard.styles";

export const RecordsItem = ({ record }) => {
  return (
    <Payment key={record.id}>
      <PaymentTitle>
        {record.type} from {record.category.title}
      </PaymentTitle>
      <PaymentTotal color={record.type}>
        {record.type === "income"
          ? currency(record.amount, { pattern: `+!#` }).format()
          : currency(record.amount, { pattern: `-!#` }).format()}
      </PaymentTotal>
    </Payment>
  );
};
