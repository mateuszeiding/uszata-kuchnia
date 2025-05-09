import axios from "axios";
import { describe, expect, test } from "vitest";

describe("GET /api", () => {
	test("should return a message", async () => {
		const res = await axios.get("api");

		expect(res.status).toBe(200);
		expect(res.data).toEqual({ message: "Hello API" });
	});
});
