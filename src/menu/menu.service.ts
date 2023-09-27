import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './model/menu.entity';

@Injectable()
export class MenuService {
    constructor(
        @InjectRepository(Menu)
        private readonly productsRespository: Repository<Menu>
      ) {}
    
      findAll(): Promise<Menu[]> {
        return this.productsRespository.find()
      }
}
