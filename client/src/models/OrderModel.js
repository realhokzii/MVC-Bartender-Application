let orders = [];

export const OrderModel = {
  getAll() {
    return orders;
  },
  add(order) {
    orders.push(order);
  }
};
