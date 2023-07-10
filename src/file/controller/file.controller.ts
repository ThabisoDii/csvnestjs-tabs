
import { Controller, Get, Param } from '@nestjs/common';
import { FileService } from '../service/file.service';

@Controller('users')
export class FileController {
  constructor(private readonly fileService:FileService) {}

  @Get('')
  createFile() {
    //return this.userService.getUserById(id);
    return this.fileService.generateCsv();
  }
}

