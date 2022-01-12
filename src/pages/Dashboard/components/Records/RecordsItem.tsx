import React, { FC } from "react";
import currency from "currency.js";
import { IRecord } from "../../../../types";

import { Payment, PaymentTitle, PaymentTotal } from "../../Dashboard.styles";

interface RecordsItemProps {
  record: IRecord;
}

export const RecordsItem: FC<RecordsItemProps> = ({ record }) => {
  return (
    <Payment key={record.id}>
      <PaymentTitle>
        {record.type} from {record.category?.title}
      </PaymentTitle>
      <PaymentTotal color={record.type}>
        {record.type === "income"
          ? currency(record.amount, { pattern: `+!#` }).format()
          : currency(record.amount, { pattern: `-!#` }).format()}
      </PaymentTotal>
    </Payment>
  );
};
