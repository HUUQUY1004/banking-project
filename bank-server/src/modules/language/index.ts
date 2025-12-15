import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageService } from 'modules/language/services';
import { LanguageEntity } from './entities';

@Module({
    imports: [TypeOrmModule.forFeature([LanguageEntity])],
    controllers: [],
    exports: [LanguageService],
    providers: [LanguageService],
})
export class LanguageModule {}
