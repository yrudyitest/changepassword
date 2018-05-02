exports.start = async (session, models, vars) => {
    await session.transform.changepassword.start();
    await session.transform.cb.start();
};