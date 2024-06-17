import { Server } from './presentation/server';
import { envs } from './config/envs';

(async () => {
  main();
})();

function main() {
  const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
  });

  server.start();
}
