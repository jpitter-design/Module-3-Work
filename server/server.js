import express from "express";

const app = express();
app.use(express.json()); 

const quotes = [
  { id: 1, name: "Hello", category: "A" },
  { id: 2, name: "welcome", category: "B" },
  { id: 3, name: "Good bye", category: "A" },
  { id: 4, name: "thank you", category: "B" },
];

app.get("/api/quotes", (req, res) => {
  return res.status(200).json(quotes);
});

app.get("/api/quotes/:id", (req, res) => {
  const quote = quotes.find(i => i.id === Number(req.params.id));

  if (!quote) {
    return res.status(404).json({
      error: {
        code: "NOT_FOUND",
        message: `No quote with id ${req.params.id}`,
      },
    });
  }

  res.status(200).json(quotes);
});

app.listen(3001, () => {
  console.log("API running at http://localhost:3001");
});
