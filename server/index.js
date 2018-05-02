const session = require('smartux-connect');
session.transform.changepassword = session.loadTransform('changepassword');
session.transform.cb = session.loadTransform('cb');
require('./client');
session.start();