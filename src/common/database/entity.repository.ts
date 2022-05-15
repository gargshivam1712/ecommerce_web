import { Model , Document, FilterQuery } from "mongoose";


export abstract class EntityRepository<T extends Document>{

    constructor(protected readonly entityModel : Model<T>)
    {}

    async findOne(entityFileterQuery : FilterQuery<T>) : Promise<T | null>
    {
        return this.entityModel.findOne(entityFileterQuery).exec()
    }

    async find(entityFileterQuery : FilterQuery<T>) : Promise<T[] | null >
    {
        return this.entityModel.find(entityFileterQuery).exec()
    }

    async create(entityModel : unknown) : Promise<T>
    {
        const new_entity  = new this.entityModel(entityModel)
        return new_entity.save()  
    }

    async findByIdAndUpdate(id : any , updateField : any)
    {
        return this.entityModel.findByIdAndUpdate(id , updateField)
    }

    async deleteById(id : string)
    {
        return this.entityModel.deleteOne({_id : id})
    }
}