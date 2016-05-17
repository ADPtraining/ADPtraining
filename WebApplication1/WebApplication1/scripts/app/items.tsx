// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

export interface IItemProps {
    id?: number;
    key?: number;
    title: string;
    description: string;
    rating: number;
    href: string;
}

export class Item extends React.Component<IItemProps, {}> {
    formatRatring() {
        if (this.props.rating > 0)
            return this.props.rating.toFixed(1).toString();

        return "NA"
    }

    render() {
        return (
            <div className="record">
                    <div className="record-details">
                        <div className="record-title">
                            <a href={this.props.href}>{this.props.title}</a>
                        </div>

                        <div className="record-description">
                            {this.props.description}
                        </div>
                    </div>
                <div className="record-rating">{this.formatRatring()}</div>
            </div>
        );
    }
}

export interface IItemsState {
    data: IItemProps[];
}

export class Items extends React.Component<{}, IItemsState> {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    updateData(newData: IItemProps[]) {
        this.setState({
            data: newData
        });
    }

    render() {
        let itemsList: any[] = [];

        this.state.data.forEach((item: IItemProps) => {
            itemsList.push(
                <Item
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    rating={item.rating}
                    href={item.href}

                    />);
        });

        return (
            <div>
                {itemsList}
                </div>
        );
    }
}

