import { Get } from "@nestjs/common";

export abstract class BaseModuleController{

    @Get('/status')
    async getStatus(){
        return `${this.getModule()} is up and running`
    }

    abstract getModule() : string

}