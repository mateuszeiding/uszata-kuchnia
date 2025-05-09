import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "../services/app.service";
import { beforeAll, describe, expect, test } from "vitest";

describe("AppController", () => {
	let app: TestingModule;

	beforeAll(async () => {
		app = await Test.createTestingModule({
			controllers: [AppController],
			providers: [AppService],
		}).compile();
	});

	describe("getData", () => {
		test('should return "Hello API"', () => {
			const appController = app.get<AppController>(AppController);
			expect(appController.getData()).toEqual({ message: "Hello API" });
		});
	});
});
