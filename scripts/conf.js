// An example configuration file.
exports.config = {
//  directConnect: true,
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
	//count: 1
  },	
  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['gettext.js'], //To Run a individual file
  // specs: ['C:\\Users\\80099666\\Documents\\7.0\\testing\\new scripts\\scripts\\*.js'],  //Running multiple files
   baseUrl : 'http://localhost:8181/cdashang6/#/infusionsToday/smithjj', // Your url to launch
  // baseUrl : 'http://cdashlogndemo3.hospira-cf.viawest.altoros.com', // Your url to launch
  
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
