const nvt = require('node-virustotal');
const defaultTimedInstance = nvt.makeAPI();
const hashed = nvt.sha256('http://wikionemore.com/');
const theSameObject = defaultTimedInstance.urlLookup(hashed, function(err, res){
  if (err) {
    console.log('Well, crap.');
    console.log(err);
    return;
  }
  console.log(JSON.stringify(res));
  return;
});