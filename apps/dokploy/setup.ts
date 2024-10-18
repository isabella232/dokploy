import {
	createDefaultMiddlewares,
	createDefaultServerTraefikConfig,
	createDefaultTraefikConfig,
	initializeTraefik,
} from "@dokploy/server/dist/setup/traefik-setup";

import { setupDirectories } from "@dokploy/server/dist/setup/config-paths";
import { initializePostgres } from "@dokploy/server/dist/setup/postgres-setup";
import { initializeRedis } from "@dokploy/server/dist/setup/redis-setup";
import {
	initializeNetwork,
	initializeSwarm,
} from "@dokploy/server/dist/setup/setup";
(async () => {
	try {
		setupDirectories();
		createDefaultMiddlewares();
		await initializeSwarm();
		await initializeNetwork();
		createDefaultTraefikConfig();
		createDefaultServerTraefikConfig();
		await initializeTraefik();
		await initializeRedis();
		await initializePostgres();
	} catch (e) {
		console.error("Error to setup dokploy", e);
	}
})();
