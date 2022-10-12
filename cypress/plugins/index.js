////index.js inside plugin folder/////
const { beforeRunHook, afterRunHook} = require('cypress-mochawesome-reporter/lib');
const exec = require('child_process').execSync;
module.export = (on) => {
    on('before:run', async (datails) => {
        console.log('override before:run');
        await beforeRunHook(details);

///if you are using other than windows remove below two lines
     await exec("IF EXIST cypress\\screenshots rmdir /Q /S cypress\\screenshots")
     await exec("IF EXIST cypress\\reports rmdir /Q /S cypress\\reports")
    })

    on('after:run', async () => {
        console.log('override before:run');

        ///if you are using other than windows remove below lines ( having await exec)
        await exec("npx jrm ./cypress/reports/junitreport.xml./cypress/reports/junit/*.xml");

        await afterRunHook();

    });
};

module.exports = (on, config) => {
    on('before:browser:launch', (browser = {}, args) => {
      if (browser.name === 'electron') {
        args['disable-gpu']
        args['disable-d3d11']
  
        return args
      }
    })
  }


import './commands'
import addContext from 'mochawesome/addContext'

Cypress.on("test:after:run", (test, runnable) => {
    
    let videoName = Cypress.spec.name
    videoName = videoName.replace('/.js.*', '.js')
    const videoUrl = 'videos/' + videoName + '.mp4'

    addContext({ test }, videoUrl)
});