import { intersection, sum } from "ramda";
import { sams } from "./sams";
import { citiData } from "./citi";
import { bkTrans } from "./bnk";

const oaGenius = 45;
const bankCredit = 20.88;

const totalPayments = sum(citiData) + sum(bkTrans) - oaGenius - bankCredit;
const totalSams = sum(sams);

console.log(
  "missingTransactions",
  intersection(intersection(sams, citiData), bkTrans)
);

console.log("totalPaid", totalPayments);
console.log("totalSams", totalSams);

console.log("missing", totalPayments - totalSams);

// total in sheet 7357.06
// difference between actual bank and sheet  $270.06
