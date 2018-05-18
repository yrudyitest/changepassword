const session = require('smartux-connect');
session.transform.dfbndg = session.loadTransform('dfbndg');
require('./client');
session.start();