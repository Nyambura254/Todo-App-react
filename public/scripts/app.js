"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToggleVisible = function (_React$Component) {
    _inherits(ToggleVisible, _React$Component);

    function ToggleVisible(props) {
        _classCallCheck(this, ToggleVisible);

        var _this = _possibleConstructorReturn(this, (ToggleVisible.__proto__ || Object.getPrototypeOf(ToggleVisible)).call(this, props));

        _this.showButton = _this.showButton.bind(_this);
        _this.hideButton = _this.hideButton.bind(_this);
        _this.state = {
            isActive: false
        };
        return _this;
    }

    _createClass(ToggleVisible, [{
        key: "showButton",
        value: function showButton() {
            this.setState({
                isActive: true
            });
        }
    }, {
        key: "hideButton",
        value: function hideButton() {
            this.setState({
                isActive: false
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Visibility Toggle"
                ),
                this.state.isActive && React.createElement(
                    "p",
                    null,
                    "Hi. here are your details you can now see"
                ),
                React.createElement(
                    "button",
                    { onClick: this.showButton },
                    "Can You See Me"
                ),
                React.createElement(
                    "button",
                    { onClick: this.hideButton },
                    "Noooo"
                )
            );
        }
    }]);

    return ToggleVisible;
}(React.Component);

ReactDOM.render(React.createElement(ToggleVisible, null), document.getElementById("app"));
