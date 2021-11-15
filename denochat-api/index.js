addEventListener("fetch", (e) => {
	const res = new Response("Hello World", {
		headers: {
			"content-type": "text/plain",
		},
	});
	e.respondWith(res);
});
