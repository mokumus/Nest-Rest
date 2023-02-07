import { Controller, Get, UseGuards } from '@nestjs/common';
import { Req } from '@nestjs/common/decorators';
import { Request } from 'express';
import { GoogleAuthGuard } from './utils/Guards';

@Controller('auth')
export class AuthController {
    
    @Get('google/login')
    @UseGuards(GoogleAuthGuard)
    handleLogin() {
        return { msg: "Google authentication"};
    }

    @Get('google/redirect')
    @UseGuards(GoogleAuthGuard)
    handleRedirect(){
        return { msg: "OK"};
    }

    @Get('status')
    user(@Req() request: Request){
        console.log(request.user);
        if(request.user){
            return {msg: 'Authenticated'}
        }
        else{
            return {msg: 'Unauthenticated'}
        }

    }
}
