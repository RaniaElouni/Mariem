import { ApiProperty } from '@nestjs/swagger';
import {Status} from "@prisma/client"
export class CreateDemandeDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  age: number;
  @ApiProperty()
  phoneNumber: number;

  @ApiProperty()
  adress: string;

  @ApiProperty()
  email: string;
  @ApiProperty()
  cv: string;

  @ApiProperty()
  note: string;

  @ApiProperty()
  type: string;
  @ApiProperty()
  offerId: string;
  @ApiProperty()
  score: number;
  @ApiProperty()
  status: Status ;
}
export class UpdateScoreDto{
  @ApiProperty()
  score: number;
}