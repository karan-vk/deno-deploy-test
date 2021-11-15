addEventListener("fetch", (e) => {
	const res = new Response("Hello World Karan", {
		headers: {
			"content-type": "text/plain",
		},
	});
	e.respondWith(res);
});
