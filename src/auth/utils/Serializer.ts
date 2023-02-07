import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport'
import { AuthService } from '../auth.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(@Inject('AUTH_SERVICE') private readonly authService: AuthService){
        super();
    }

    serializeUser(user: any, done: Function) {
        console.log("Serilize user")
        done(null, user);
    }

    async deserializeUser(payload: any, done: Function) {
        console.log("Deserilize user")
        const user = await this.authService.findUser(payload.id);
        return user ? done(null, user) : done(null, null);
    }

}