const session = require('smartux-connect');
session.transform.changepassword = session.loadTransform('changepassword');
require('./client');
require('./transform/changepassword');
session.start();