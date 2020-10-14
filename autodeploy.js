const REPO = "YOUR_PROJECT_FOLDER";
const UPDATE_GIT_BRANCH_COMMAND = "git pull origin master"; 
const APP_RESTART_COMMAND = "pm2 restart app"; //We are using pm2 for managing the app, modify this to suit your needs
const UPDATE_NPM_COMMAND = "npm install";
const PORT_NUMBER = 888;
const exec = require('child_process').exec;
let http = require('http');


http.createServer(function (req, res) {
     console.log("start auto deployment ");
     exec('cd ' + REPO + ' && '+ UPDATE_GIT_BRANCH_COMMAND + ' && '+ UPDATE_NPM_COMMAND + ' && ' + APP_RESTART_COMMAND);
     console.info('complete deployment');
     res.end();
})
.listen(PORT_NUMBER, () => {
        console.info('HTTP server running on port' + PORT_NUMBER);
});