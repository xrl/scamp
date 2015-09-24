'use strict';

var scamp = require(process.cwd() + "/../scamp"),
    requester = scamp.requester({ cached: true, ident: 'logsink_dispatcher' });

var cmd = { action: 'Logger.info', version: 1, envelope: 'json' };
for(var i=0; i<1000; i++) {
  requester.makeJsonRequest(cmd, {}, function (err_code, err, ret) {
      scamp.info("logging_dispatcher err_code: ", err_code, " err: ", JSON.stringify(err));
  });
}
