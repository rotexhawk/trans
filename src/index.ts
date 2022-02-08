import { records } from "./data";
import { citiData } from "./citi";
import { bkTrans } from "./bnk";

// Sams Club order calculation

const expenses = records.reduce((acc, curr) => {
  return acc + curr.total;
}, 0);

console.log("Total Orders", records.length);

console.log("samsClubPurchases", expenses);

console.log("difference", 7604 - 7357.06);

const citiTotal = citiData.reduce((acc, curr) => acc + curr);

console.log("citiData", citiTotal);

const bnkTotal = bkTrans.reduce((acc, curr) => acc + curr) - 20.88;
console.log("bankTotal", bnkTotal);

const allBankTrans = bnkTotal + citiTotal;

console.log("allBnkTrans", allBankTrans);

console.log("samsDifference", allBankTrans - expenses);

// SamsClub Januany Purchases - 515.02
