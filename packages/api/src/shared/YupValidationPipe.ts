import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { serializeValidationErrors } from 'src/utils/serializeValidationErrors';
import { Schema } from 'yup';

@Injectable()
export class YupValidationPipe implements PipeTransform {
  constructor(private readonly schema: Schema<Record<string, never>>) {}

  async transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type === 'body') {
      try {
        await this.schema.validate(value, { abortEarly: false });
      } catch (err) {
        throw serializeValidationErrors(err);
      }
      return value;
    } else {
      return value;
    }
  }
}
