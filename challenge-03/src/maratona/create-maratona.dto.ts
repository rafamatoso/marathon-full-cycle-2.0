import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMaratonaDto {
  @IsString()
  @IsNotEmpty()
  aula: string;
}
