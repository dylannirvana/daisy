# Express Wrapper for React App
This is a Single Page Application deploying to Heroku through GitHub

## Stand up Express
`npx express-generator daisy`

Follow instructions  
`cd daisy`   
`npm install`  
`npm audit fix --force`  
`DEBUG=daisy:* npm start`  

You will see Express welcome in a browser on port 3000  
Terminate the process

## Stand up React
`npx create-react-app@latest client`

In a second terminal follow instructions  
`cd client`  
`npm start`  

You will see React welcome on port 3000  
Terminate the process

## Push to GitHub
Make sure you do not create a submodule in GitHub (folder icon with an arrow)

###  In client   
`rm -rf .git`  

### In daisy  
`git init`  
`git add .`  
`git commit -m 'first commit'`

### In GitHub  
Create a new repo and follow instructions  
`add origin`
`git push origin master`

Again, make sure you did not create a subrepo out of client

## Push to Heroku
### daisy/package.json  
<code>
 "engines": {
    "node": "18.x"
  },
</code>  
  
Create a Heroku pipeline of daisy-stage and daisy-production  
Enable Review Apps on pull request (no CI)  
Associate pipeline with daisy repo  
Enable automatic deploys  
Deploy master  

### You may need a Procfile
client  
`cat > Procfile  
    `web: node bin/www`   

You should see Express welcome screen  

## Render React App in Express
By now you should have two terminals open, one on `daisy` the other on `client`.   

### daisy/bin/www  
Change port 3000 to 5000

### daisy/app.js  
Comment out  
Lines 7,8 routers   
Lines 13,14 views  

add  
<code>
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });

</code>  

Comment out  
Lines 33,34 routers

### client
`npm run build`
`npm start`

### daisy
`npm start` 

Open a browser on localhost:5000 and another on localhost:3000. You should see React welcome on both ports 

### Push these changes to GitHub and run on Heroku
You should see the React App welcome  

The app is now boostrapped. Additional changes should be branched and not run on `master` 

## Tidy up
### daisy  
`rm -R routes/ views/`  

### client
`cd src`  
`mkdir routes assets`  

`cd routes`  
Add routes  












