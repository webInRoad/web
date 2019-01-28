const querystring = require('querystring');
console.info(querystring.parse('a=23&b=92'));
console.info(querystring.stringify({"a":22,"b":92}));//a=22&b=92