const fs = require("fs");
const config = {
	default: {
		override: {
			wrapper: "cloudflare-node",
			converter: "edge",
			proxyExternalRequest: "fetch",
			incrementalCache: "dummy",
			tagCache: "dummy",
			queue: "dummy",
		},
	},
	middleware: {
		external: true,
		override: {
			wrapper: "cloudflare-edge",
			converter: "edge",
			proxyExternalRequest: "fetch",
			incrementalCache: "dummy",
			tagCache: "dummy",
			queue: "dummy",
		},
	},
	edgeExternals: ["node:crypto"],
};

fs.writeFileSync(
	"open-next.config.ts",
	`export default ${JSON.stringify(config, null, 2)};`,
);
