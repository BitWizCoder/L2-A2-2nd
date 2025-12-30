import app from "./app";
import config from "./config";
import initDB from "./config/db";

const port = config.port;

async function main() {
  try {
    // 1. Initialize DB
    await initDB();

    // 2. Start Server only after DB connects
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
  }
}

main();
