import { Controller, Get } from '@nestjs/common';
import { TagEntity } from '@app/tag/tag.entity';
import { TagService } from '@app/tag/tag.service';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}
  @Get()
  async findAll(): Promise<TagEntity[]> {
    return this.tagService.findAll();
  }
}
