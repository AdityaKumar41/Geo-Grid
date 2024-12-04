import initServer from "./src";
import "dotenv/config";
const main = async () => {
  const PORT = process.env.PORT || 3000;
  const app = await initServer();
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
};
main();
