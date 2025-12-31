import app from "./app";
import config from "./config";
import initDB from "./config/db";
import { authRoute } from "./modules/auth/auth.route";

const port = config.port;

initDB();

app.use("/api/v1/auth", authRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
