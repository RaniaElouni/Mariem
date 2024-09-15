import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';


@Module({
  imports: [
      MailerModule.forRoot({
        transport:{
          service:'Gmail',
          auth:{
            user: 'raniaelouni421@gmail.com',
            pass: 'mcxs extm ynra ceyd'
          }
        } ,
        defaults: {
          from: 'raniaelouni421@gmail.com',
        },
        template: {
          dir: __dirname + '/templates',
          options: {
            strict: true,
          },
        },
      }),
  ],
  providers: [MailService],
  exports: [MailService]
})
export class MailModule {}