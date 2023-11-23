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

// Endpoint to update candy details (PUT request)
app.put('/api/candy/', (req, res) => {
  const updatedCandy = req.body;

  if (!updatedCandy || !updatedCandy.Name || !updatedCandy.Company || !updatedCandy.Store) {
    return res.status(400).json({ error: 'Invalid candy data. Please provide Name, Company, and Store.' });
  }

  const candyIndex = candyData.findIndex(candy => candy.Name === updatedCandy.Name && candy.Store === updatedCandy.Store);

  if (candyIndex === -1) {
    return res.status(404).json({ error: `Candy '${updatedCandy.Name}' not found.` });
  }

  // Update the candy details in the array
  candyData[candyIndex] = { ...candyData[candyIndex], ...updatedCandy };

  res.json(candyData[candyIndex]);
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
