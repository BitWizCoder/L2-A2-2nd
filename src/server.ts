import app from "./app";
import config from "./config";
import initDB from "./config/db";
import { authRoute } from "./modules/auth/auth.route";
import { vehicleRoute } from "./modules/vehicles/vehicles.route";

const port = config.port;

initDB();

app.use("/api/v1/auth", authRoute);

app.use("/api/v1/", vehicleRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
