import joi from 'joi';

export const NewItemSchema = joi.object({
    name: joi.string().required(),
    photo: joi.string().required(),
    description: joi.string().required(),
})