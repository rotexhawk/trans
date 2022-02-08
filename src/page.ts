import jquery from "jquery";

const $ = jquery;

console.log($);

const elements = $(".sc-account-online-orders-history-cost").text();

const values = elements
  .split("$")
  .filter((elm) => !!elm)
  .map(parseFloat);

console.log("elements", values);

const total = values.reduce((acc, curr) => acc + curr);

console.log("total sams 2", total);
