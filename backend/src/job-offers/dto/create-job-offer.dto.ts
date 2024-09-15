import { ApiProperty, ApiTags } from '@nestjs/swagger';

export class CreateJobOfferDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  type: string;
  

}
