const session = require('smartux-connect');
session.transform.changepassword = session.loadTransform('changepassword');
session.transform.dfbndg = session.loadTransform('dfbndg');
require('./client');
session.start();