import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const books = new Map();
books.set("1", {
	id: "1",
	title: "The Hound of the Baskervilles",
	author: "Conan Doyle, Arthur",
});

const router = new Router();
router
	.get("/", (context) => {
		context.response.body = "Hello world! K";
	})
	.get("/book", (context) => {
		context.response.body = Array.from(books.values());
	})
	.get("/book/:id", (context) => {
		if (context.params && context.params.id && books.has(context.params.id)) {
			context.response.body = books.get(context.params.id);
		}
	});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
// app.addEventListener("listen", ({ hostname, port, secure }) => {
// 	console.log(
// 		`Listening on: ${secure ? "https://" : "http://"}${
// 			hostname ?? "localhost"
// 		}:${port}`
// 	);
// });

// await app.listen({ port: 8000 });

addEventListener("fetch", app.fetchEventHandler());
