import { ApiProperty } from "@nestjs/swagger";

export class CreateStagaireDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    lastName: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    tel: string;
}
