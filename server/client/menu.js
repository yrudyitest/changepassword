const trigger = require('smartux-connect').trigger;
trigger({
    id: 'transform.changepassword.undefined.dialog_confirm1',
    events: ['transform.changepassword.undefined.dialog_confirm']
}, async (session, models, vars) => {
    await session.alert();
});