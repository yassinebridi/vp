import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Response } from 'express';

export const GqlRes = createParamDecorator(
  (data: unknown, context: ExecutionContext): Response =>
    GqlExecutionContext.create(context).getContext().res,
);
