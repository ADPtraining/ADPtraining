/// <reference path="../../typings/react/react-global.d.ts"/>
define(["require", "exports", "dojo/request/xhr"], function (require, exports, xhr) {
    class Friend extends React.Component {
        render() {
            return (React.createElement("div", {"className": "friend"}, React.createElement("div", {"className": "img-circle friend-initials"}, this.props.initials), React.createElement("div", {"className": "friend-name"}, this.props.name), React.createElement("div", {"className": "friend-details "}, React.createElement("div", null, this.props.courses, " courses taken"), React.createElement("div", null, this.props.articles, " article reviewed"))));
        }
    }
    exports.Friend = Friend;
    class Friends extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: this.props.initialData
            };
        }
        getData() {
            let options = {
                handleAs: "json",
                headers: {
                    "X-Requested-With": null
                }
            };
            let promise = xhr.get("http://learndevapi.azurewebsites.net/api/Friends/", options);
            promise.then((data) => {
                let data2 = data.map((value, index) => {
                    value.articles = value.articlesCount;
                    value.courses = value.coursesCount;
                    return value;
                });
                console.log("data!!!!!");
                this.setState({ data: data2 });
            }, (errorData) => {
                console.error(errorData);
            });
        }
        render() {
            let friendsList = [];
            this.state.data.forEach((friend) => {
                friendsList.push(React.createElement(Friend, {"key": friend.id, "initials": friend.initials, "name": friend.name, "courses": friend.courses, "articles": friend.articles}));
            });
            return (React.createElement("div", null, friendsList));
        }
    }
    exports.Friends = Friends;
});
//# sourceMappingURL=friends.js.map