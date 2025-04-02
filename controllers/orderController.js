let orders = []; 

exports.getOrders = (req, res) => {
    res.json(orders);
};

exports.createOrder = (req, res) => {
    const { product_name, quantity, total_price } = req.body;
    const newOrder = { id: orders.length + 1, product_name, quantity, total_price };
    orders.push(newOrder);
    res.status(201).json({ message: "Order created", order: newOrder });
};

exports.deleteOrder = (req, res) => {
    const orderId = parseInt(req.params.id);
    orders = orders.filter(order => order.id !== orderId);
    res.json({ message: "Order deleted successfully" });
};
