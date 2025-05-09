import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { CqrsModule } from "@nestjs/cqrs";
import { AppController } from "./controllers/app.controller";
import { AppService } from "./services/app.service";

@Module({
	imports: [ConfigModule.forRoot(), CqrsModule.forRoot()],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
