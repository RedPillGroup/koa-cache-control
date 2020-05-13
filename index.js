module.exports = (defaultOptions) => {
  return async (ctx, next) => {
    let options = ctx.cacheControl || defaultOptions || [];

    if (options.length !== 0) {
      ctx.set('Cache-Control', options.join(','));
    }
    await next();
  };
};
