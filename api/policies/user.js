module.exports = async (req, res, next) => {
  try {
    // if (!req.headers.authorization) throw 'no auth'
    let auth = req.headers.authorization || `Bearer ${req.query.accesstoken}`;
    let token = auth.split(' ')[1];
    let { newToken, data } = await User.verifyUserToken(token);
    req.userId = data.userId;
    req.roleId = data.roleId;
    req.storeId = data.storeId
    req.gameProviderId = data.gameProviderId
    req.user = {
      id: data.userId,
      role: data.roleId,
      storeId: data.storeId,
      gameProviderId: data.gameProviderId
    }
    res.set('accesstoken', newToken)
    res.set('Access-Control-Expose-Headers', 'accesstoken')
    return next();
  } catch (error) {
    return res.status(401).json({
      code: 401,
      message: "Unauthorized"
    });
  }

}