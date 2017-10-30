const {decodeToken, generateToken} = require('../token');

module.exports = async (ctx, next) => {
    const token = ctx.cookies.get('access_token');
    if(!token) {
        ctx.request.user = null;
        return next(); 
    //토큰이 아니면 스킵~~
    }
    try{
        const decoded = await decodeToken(token);
            //새로운 이슈가 생긴 토큰이 남은 시간이 3일보다 클때
        const { user } = decoded;
            if(Date.now() / 1000 - decoded.iat > 60 * 60 * 24 * 3 ) {
            
            const freshToken = await generateToken({user}, 'user');
            ctx.cookies.set('access_token', freshToken, {
                maxAge: 1000 * 60 * 60 * 24 * 7
            });
        }
        ctx.request.user = user;
    }catch (e){
        ctx.request.user = null;
    }
    return next();
}