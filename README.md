This is the source for a draft of a website for NHS Ideas Lab

## Initial Set-up
1. Clone repo using git
2. Ensure you have both Node.js and npm installed with reasonably up-to-date versions
3. In root directory of repo run `npm install` to install all the dependencies and node modules.
4. If you get strange errors during `npm install` relating to "strict mode" then due to upstream bugs you may need to run `npm install node-sass request@2.81.0`
4. Run `gulp watch` if this doesn't work you may have to run `npm i -g gulp-cli`

## Building
### For Development and Testing
From the project root, typing `gulp watch` will build the app into `app/tmp` and serve at localhost:3000

### For Production
For production build run `gulp production-min` this will build in to `app/dist` this can be uploaded manually to some webserver as this project is so small.
