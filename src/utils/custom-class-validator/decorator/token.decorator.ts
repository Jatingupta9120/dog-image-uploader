import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Token = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const authHeader = request.headers['authorization'];
        if (authHeader) {
            const token = authHeader.split(' ')[1]; // Extract token from 'Bearer <token>'
            return token;
        }
        return null; // Return null if no token is found
    },
);
