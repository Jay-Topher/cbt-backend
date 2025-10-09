// path: src/server.ts
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = Number(process.env.PORT || 4000);
app.listen(PORT, () => {
  console.log(`CBT backend listening on http://localhost:${PORT}`);
});
