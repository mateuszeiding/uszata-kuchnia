import { Test } from "@nestjs/testing";
import { AppService } from "./app.service";
import { beforeAll, describe, expect, it } from "vitest";

describe("AppService", () => {
	let service: AppService;

	beforeAll(async () => {
		const app = await Test.createTestingModule({
			providers: [AppService],
		}).compile();

		service = app.get<AppService>(AppService);
	});

	describe("getData", () => {
		it('should return "Hello API"', () => {
			expect(service.getData()).toEqual({ message: "Hello API" });
		});
	});
});
