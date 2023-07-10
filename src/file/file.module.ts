import { Module } from '@nestjs/common';
import { User } from './entity/user.entity'; //==> must be an entity
import { FileController } from './controller/file.controller';
import { FileService } from './service/file.service';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [FileController],
  providers: [FileService]
})
export class FileModule {}