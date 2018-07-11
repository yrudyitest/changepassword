const session = require('smartux-connect');
session.transform.changepassword = session.loadTransform('changepassword');
require('./client');
require('./transform/changepassword');
require('./client/sdfsdg');
require('./client/menu');
session.start();