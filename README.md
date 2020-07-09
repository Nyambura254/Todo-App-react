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
<!--we have two things to render here,header and action-->
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <h2>Organizing data</h2>
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
### How to run our todo-app
1. running our server
``` sh
yarn run serve
```
- our server show this

$ live-server public
Serving "public" at http://127.0.0.1:8080
Ready for changes

....you can copy/paste in your browser or wait to start automatically
2. run babel to see the compiler
``` sh
yarn run babel
```
- our babel show this
$ babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch 

Show our script path created in package.json
.Now after everything is well and running....if you open your scripts folder and navigate to app.js initialialy was empty but new files have been created wit react codes with rendered components in src/app.js
#### This how scripts/app.js looks like
``` sh
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Todo App"
                ),
                React.createElement(
                    "h2",
                    null,
                    "Organizating data"
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Actions = function (_React$Component2) {
    _inherits(Actions, _React$Component2);

    function Actions() {
        _classCallCheck(this, Actions);

        return _possibleConstructorReturn(this, (Actions.__proto__ || Object.getPrototypeOf(Actions)).apply(this, arguments));
    }

    _createClass(Actions, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    null,
                    "Add items"
                )
            );
        }
    }]);

    return Actions;
}(React.Component);

var jsx = React.createElement(
    "div",
    null,
    React.createElement(Header, null),
    React.createElement(Actions, null)
);
ReactDOM.render(jsx, document.getElementById("app"));
```











