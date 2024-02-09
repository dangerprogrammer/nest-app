import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createUserDto: Prisma.UsersCreateInput) {
    return await this.databaseService.users.create({
      data: createUserDto
    });
  }

  async findAll() {
    // return this.databaseService;
    // console.log(this.databaseService.users);

    return await this.databaseService.users.findMany();
  }

  async findOne(id: number) {
    return await this.databaseService.users.findUnique({
      where: { id }
    });
  }

  async update(id: number, updateUserDto: Prisma.UsersUpdateInput) {
    return await this.databaseService.users.update({
      where: { id },
      data: updateUserDto
    });
  }

  async remove(id: number) {
    return await this.databaseService.users.delete({
      where: { id }
    });
  }
}
