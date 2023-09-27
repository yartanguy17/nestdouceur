import { Controller, Get } from '@nestjs/common';
import { Menu } from './model/menu.entity';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
    constructor(
        private readonly productsService: MenuService
      ) {}
    
      @Get()
      findAll(): Promise<Menu[]> {
        return this.productsService.findAll()
      }
}
