// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
define(["require", "exports"], function (require, exports) {
    class ProfileItem extends React.Component {
        render() {
            let inputHiddeClassName = this.props.isReadOnly ? "form-control hidden" : "form-control";
            let pHiddeClassName = this.props.isReadOnly ? "form-control-static" : "form-control-static hidden";
            return (React.createElement("div", {"className": "form-group"}, React.createElement("label", {"htmlFor": "courses"}, this.props.title), React.createElement("p", {"className": pHiddeClassName}, this.props.value), React.createElement("input", {"type": "text", "className": inputHiddeClassName, "id": this.props.id, "value": this.props.value.toString(), "onChange": this.props.valueOnChange})));
        }
    }
    class ProfileButtons extends React.Component {
        render() {
            let editHiddeClassName = this.props.isReadOnly ? "" : " hidden";
            let saveHiddeClassName = this.props.isReadOnly ? " hidden" : "";
            return (React.createElement("div", {"className": "row"}, React.createElement("div", {"className": "col-sm-6"}), React.createElement("div", {"className": "col-sm-6" + editHiddeClassName}, React.createElement("button", {"className": "btn btn-block btn-primary", "onClick": this.props.editOnClickHandler}, "Edit")), React.createElement("div", {"className": "col-sm-6" + saveHiddeClassName}, React.createElement("button", {"className": "btn btn-block btn-danger", "onClick": this.props.cancelOnClickHandler}, "Cancel")), React.createElement("div", {"className": "col-sm-6" + saveHiddeClassName}, React.createElement("button", {"className": "btn btn-block btn-primary", "onClick": this.props.saveOnClickHandler}, "Save"))));
        }
    }
    class Profile extends React.Component {
        constructor() {
            super();
            this.state = {
                coursesValue: 10,
                articlesValue: 20,
                isReadOnly: true
            };
        }
        editOnClickHandler() {
            this.oldCourses = this.state.coursesValue;
            this.oldArticles = this.state.articlesValue;
            this.setState({
                isReadOnly: false
            });
        }
        saveOnClickHandler() {
            this.setState({
                isReadOnly: true
            });
        }
        cancelOnClickHandler() {
            this.setState({
                coursesValue: this.oldCourses,
                articlesValue: this.oldArticles,
                isReadOnly: true
            });
        }
        coursesValueOnChangeHandler(e) {
            let newValue = parseInt(e.target.value);
            this.setState({
                coursesValue: newValue
            });
        }
        articlesValueOnChangeHandler(e) {
            let newValue = parseInt(e.target.value);
            this.setState({
                articlesValue: newValue
            });
        }
        render() {
            return (React.createElement("div", null, React.createElement(ProfileItem, {"title": "Courses", "value": this.state.coursesValue, "id": "courses", "isReadOnly": this.state.isReadOnly, "valueOnChange": this.coursesValueOnChangeHandler.bind(this)}), React.createElement(ProfileItem, {"title": "Articles", "value": this.state.articlesValue, "id": "articles", "isReadOnly": this.state.isReadOnly, "valueOnChange": this.articlesValueOnChangeHandler.bind(this)}), React.createElement(ProfileButtons, {"isReadOnly": this.state.isReadOnly, "editOnClickHandler": this.editOnClickHandler.bind(this), "saveOnClickHandler": this.saveOnClickHandler.bind(this), "cancelOnClickHandler": this.cancelOnClickHandler.bind(this)})));
        }
    }
    return Profile;
});
//# sourceMappingURL=profile.js.map