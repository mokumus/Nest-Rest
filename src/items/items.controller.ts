import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param() param): Promise<Item> {
    return this.itemsService.findOne(param.id);
  }


  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  @Delete(':id')
  delete(@Param() param): Promise<Item> {
    return this.itemsService.delete(param.id);
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param() param): Promise<Item> {
    return this.itemsService.update(param.id, updateItemDto);
  }
}
