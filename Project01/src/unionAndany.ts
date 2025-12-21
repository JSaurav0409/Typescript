let subs: number | string = "1M";

let apiRequestStatus: "pending" | "Success" = "pending";

apiRequestStatus = "pending";

let airlineSeat: "aisle" | "middle" | "window" = "aisle";

airlineSeat = "window";

const orders = ["12", "13", "18"];

let currentorder: string | undefined;

for (const order of orders) {
  if (order === "18") {
    currentorder = order;
    break;
  }
  currentorder = "11";
}

console.log(currentorder);
