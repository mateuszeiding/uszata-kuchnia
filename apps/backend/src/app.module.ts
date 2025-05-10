import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { CqrsModule } from "@nestjs/cqrs";
import { AppController } from "./controllers/app.controller";
import { AppService, PrismaService } from "./services/!export";

@Module({
	imports: [ConfigModule.forRoot(), CqrsModule.forRoot()],
	controllers: [AppController],
	providers: [AppService, PrismaService],
})
export class AppModule {}
