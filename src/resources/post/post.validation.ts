import Joi from 'joi';

const create = Joi.object({
    Username: Joi.string().required(),
    body : Joi.string().required()

});

export default {create, };