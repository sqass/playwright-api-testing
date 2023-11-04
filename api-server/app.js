const express = require('express');
const app = express();
const port = 3000; // You can change the port as needed

app.use(express.json());

// Sample candy data
const candyData = [
  {
    Name: "Skittles",
    Company: "Wrigley Company",
    Quantity: 10,
    Store: "Walmart"
  },
  {
      Name : "Snickers",
      Company : "Mars, Incorporated",
      Quantity: 20,
      Store : "Walmart"
  },
  {
      Name : "Snickers",
      Company : "Mars, Incorporated",
      Quantity: 35,
      Store : "Target"
  },
  {
      Name : "M&M's",
      Company : "Mars, Incorporated",
      Quantity: 50,
      Store : "Walmart"
  }
  // Add other candy entries here
];

// Endpoint to get candies by store name
app.get('/api/candy', (req, res) => {
  const storeName = req.query.storeName;

  if (!storeName) {
    return res.status(400).json({ error: 'StoreName parameter is required.' });
  }

  const candiesInStore = candyData.filter(candy => candy.Store === storeName);

  if (candiesInStore.length === 0) {
    return res.status(404).json({ error: `No candies available at store '${storeName}'.` });
  }

  res.json(candiesInStore);
});


// Endpoint to add a new candy (POST request)
app.post('/api/candy', (req, res) => {
  const newCandy = req.body;

  if (!newCandy || !newCandy.Name || !newCandy.Company || !newCandy.Store || !newCandy.Quantity ) {
    return res.status(400).json({ error: 'Invalid candy data. Please provide Name, Company, Quantity and Store.' });
  }

  candyData.push(newCandy);

  res.status(201).json(newCandy);
});

app.patch('/update-product-quantity', (req, res) => {
  // Update the quantity with the value provided in the request body
  const newQuantity = req.body.Quantity;

  if (newQuantity !== undefined) {
    product.Quantity = newQuantity;
    res.json({ message: 'Quantity updated successfully', product });
  } else {
    res.status(400).json({ message: 'Invalid request. Quantity not provided in the request body.' });
  }
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
