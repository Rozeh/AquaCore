const Joi = require('joi');
const User = require('db/models/User');
const token = require('lib/token');

exports.localRegister = async (ctx) => {
  const { body } = ctx.request;

  const schema = Joi.object({
    displayName: Joi.string().regex(/^[a-zA-Z0-9ㄱ-힣]{3,12}$/).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30)
  });

  const result = Joi.validate(body, schema);

  // Schema Error
  if(result.error) {
    ctx.status = 400;
    return;
  }

  const { displayName, email, password} = body;
  try{
    //이메일 디스플레이네임 중복 방지
    const exists = await User.findExistancy({
      displayName,
      email
    });
    if(exists){
      ctx.status = 409;
      const key = exists.email === email ?  'email': 'displayName';
      ctx.body = {
        key
      };
      return;
    }
    const user = await User.localRegister({
      displayName, email, password
    });
    ctx.body = user;
  }catch(e){
    ctx.throw(500);
  }

};