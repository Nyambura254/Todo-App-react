# Todo-App-react
##### This to do app is created using react 
## Requirements
1. Create a root directory folder and name it Todo-App-react,you can also use terminal
or
- If you want your app on github, log in to your github and create a new repo
- clone it in your local machine and cd into your file app folder

## Installations
Ensure you have the latest node installed 
- If you haven't install from their node.js official site [Node.js](https://nodejs.org/) 
- make sure you are in file directory folder to start developement using your prefered editor....in my case vs code

1.initialize your project with either of the command depending on installation you installed
``` sh
 yarn init / npm init
```
2.we require babel-JavaScript compiler.[babel](https://babeljs.io/)
## JSX and React
Babel can convert JSX syntax! Check out our React preset to get started. Use it together with the babel-sublime package to bring syntax highlighting to a whole new level. version depends but my case i used this
``` sh
yarn add babel-cli@6.24.1 babel-preset-env@1.5.2 babel-preset-react@6.24.1
``` 
3.Install our live-server
``` sh
yarn add live-server@1.2.0
```
## Development
Inside your app development directory
- create a folder inside it "public" and add a file inside public 'index.html'
- edit the file with the following
``` sh
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo React app</title>
</head>

<body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
    <script src="./scripts/app.js"></script>
</body>

</html>
```
- create a folder in root directory "src" and create a file 'app.js'
- edit with the following
``` sh
<!--we have to things to render here,header and action-->
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <h2>Organizating data</h2>
            </div>
        );
    }
}
class Actions extends React.Component {
    render() {
        return (
            <div>
                <button>Add items</button>
            </div>
        );
    }
}
const jsx = (
    <div>
        <Header />
        <Actions />
    </div>
);
ReactDOM.render(jsx, document.getElementById("app"));
```
In 'package.json' edit the scripts part
``` sh
{
    "name": "Todo-App-react",
    "version": "1.0.0",
    "description": "todo in react,express,node",
    "main": "index.js",
    "scripts": {
        "serve": "live-server public",
        "babel": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch "
    },
    "repository": "https://github.com/Nyambura254/Todo-App-react.git",
    "author": "BonnieNyambura <nyamburabonnie@gmail.com>",
    "license": "MIT",
    "dependencies": {
        "babel-cli": "6.24.1",
        "babel-preset-env": "1.5.2",
        "babel-preset-react": "6.24.1",
        "live-server": "1.2.0"
    }
}
```
in the file above...you give youe env server a name 'serve' and directory to search your files 'public/' and read those files
In this part we want to see how our files in jsx is being converted to react file
- create a folder inside public folder and name it "script"
- inside scripts add a file "app.js" this where we will see our converted react files 





