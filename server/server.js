import express from "express";

const app = express();

app.use(express.json());   // reads JSON request bodies; we need it from Lab 3B on

// In memory: no database. Change the names and fields to your own resource later.
const quotes = [
  { id: 1, name: "Hello", category: "A" },
  { id: 2, name: "welcome", category: "B" },
  { id: 3, name: "Good bye", category: "A" },
  { id: 4, name: "thank you", category: "B" },
];

app.get("/api/quotes", (req, res) => {
   res.status(200).json(qoutes);
});

app.get("/api/quotes/:id", (req, res) => {
  const quote = quotes.find(i => i.id === Number(req.params.id));

  if (!quote) {
    return res.status(404).json({
      error: {
        code: "NOT_FOUND",
        message: `No item with id ${req.params.id}`,
      },
    });
  }

  res.status(200).json(quotes);
});

app.listen(3001, () => {
  console.log("API running at http://localhost:3001");
});
