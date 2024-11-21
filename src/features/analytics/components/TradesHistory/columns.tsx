import { dateFormatter } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

type TradeDataEntry = {
  TXID: string;
  Pair: string;
  Type: string;
  Volume: string;
  Time: string;
};

const columns: ColumnDef<TradeDataEntry>[] = [
  {
    accessorKey: "postxid",
    header: "TXID",
  },
  {
    accessorKey: "pair",
    header: "Pair",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type: string = row.getValue("type");
      return (
        <div className={type === "buy" ? "text-green-600" : "text-red-600"}>
          {type}
        </div>
      );
    },
  },
  {
    accessorKey: "vol",
    header: "Volume",
  },
  {
    accessorKey: "time",
    header: "Time",
    cell: ({ row }) => {
      const time: number = row.getValue("time");
      const formatted = dateFormatter(time);
      return <div>{formatted}</div>;
    },
  },
];

export default columns;
