import { PartialType } from '@nestjs/swagger';
import { CreateStagaireDto } from './create-stagaire.dto';

export class UpdateStagaireDto extends PartialType(CreateStagaireDto) {}
