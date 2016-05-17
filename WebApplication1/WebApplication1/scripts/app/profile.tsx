// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

interface IProfileItemProps {
    id: string;
    title: string;
    value: number;
    isReadOnly: boolean;
    valueOnChange(e: React.FormEvent);
}

class ProfileItem extends React.Component<IProfileItemProps, {}> {
    render() {

        let inputHiddeClassName = this.props.isReadOnly ? "form-control hidden" : "form-control";
        let pHiddeClassName = this.props.isReadOnly ? "form-control-static" : "form-control-static hidden";

        return (
            <div className="form-group">
                <label htmlFor="courses" >{this.props.title}</label>
                <p className={pHiddeClassName}>{this.props.value}</p>
                <input type="text"
                    className={inputHiddeClassName}
                    id={this.props.id}
                    value={this.props.value.toString() }
                    onChange={this.props.valueOnChange}
                />
            </div>
        );
    }
}


interface IProfileButtonsProps {
    editOnClickHandler(): void;
    saveOnClickHandler?(): void;
    cancelOnClickHandler?(): void;
    isReadOnly: boolean;
}

class ProfileButtons extends React.Component<IProfileButtonsProps, {}> {
    
    render() {

        let editHiddeClassName = this.props.isReadOnly ? "" : " hidden";
        let saveHiddeClassName = this.props.isReadOnly ? " hidden" : "";


        return (
            <div className="row">
                        <div className="col-sm-6">
                        </div>
                        <div className={"col-sm-6" + editHiddeClassName}>
                            <button className="btn btn-block btn-primary" onClick={this.props.editOnClickHandler}>Edit</button>
                        </div>
                        <div className={"col-sm-6" + saveHiddeClassName}>
                            <button className="btn btn-block btn-danger" onClick={this.props.cancelOnClickHandler}>Cancel</button>
                            </div>
                                <div className={"col-sm-6" + saveHiddeClassName}>
                            <button className="btn btn-block btn-primary" onClick={this.props.saveOnClickHandler}>Save</button>
                            </div>
                </div>
            );
    }
}


interface IProfileState {
    coursesValue?: number;
    articlesValue?: number;
    isReadOnly?: boolean;
}

class Profile extends React.Component<{}, IProfileState> {

    private oldCourses: number;
    private oldArticles: number;

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

    coursesValueOnChangeHandler(e: React.FormEvent) {
        let newValue: number = parseInt((e.target as HTMLInputElement).value);
        this.setState({
            coursesValue: newValue
        });

    }

    articlesValueOnChangeHandler(e: React.FormEvent) {
        let newValue: number = parseInt((e.target as HTMLInputElement).value);
        this.setState({
            articlesValue: newValue
        });

    }

    render() {
       return (
           <div>
           <ProfileItem
               title="Courses"
               value={this.state.coursesValue}
               id="courses"
               isReadOnly={this.state.isReadOnly}
               valueOnChange={this.coursesValueOnChangeHandler.bind(this)}
           />

           <ProfileItem
                   title= "Articles"
                   value= {this.state.articlesValue}
                   id="articles"
                   isReadOnly={this.state.isReadOnly}
                   valueOnChange={this.articlesValueOnChangeHandler.bind(this)}
               />

               <ProfileButtons
                   isReadOnly={this.state.isReadOnly}
                   editOnClickHandler={this.editOnClickHandler.bind(this) }
                   saveOnClickHandler={this.saveOnClickHandler.bind(this) }
                   cancelOnClickHandler={this.cancelOnClickHandler.bind(this) }
               />
               </div>
           );
   } 
}

export = Profile;
