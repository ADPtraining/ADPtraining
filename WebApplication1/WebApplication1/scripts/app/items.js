// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
define(["require", "exports"], function (require, exports) {
    class Item extends React.Component {
        formatRatring() {
            if (this.props.rating > 0)
                return this.props.rating.toFixed(1).toString();
            return "NA";
        }
        render() {
            return (React.createElement("div", {"className": "record"}, React.createElement("div", {"className": "record-details"}, React.createElement("div", {"className": "record-title"}, React.createElement("a", {"href": this.props.href}, this.props.title)), React.createElement("div", {"className": "record-description"}, this.props.description)), React.createElement("div", {"className": "record-rating"}, this.formatRatring())));
        }
    }
    exports.Item = Item;
    class Items extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: []
            };
        }
        updateData(newData) {
            this.setState({
                data: newData
            });
        }
        render() {
            let itemsList = [];
            this.state.data.forEach((item) => {
                itemsList.push(React.createElement(Item, {"key": item.id, "title": item.title, "description": item.description, "rating": item.rating, "href": item.href}));
            });
            return (React.createElement("div", null, itemsList));
        }
    }
    exports.Items = Items;
});
//# sourceMappingURL=items.js.map