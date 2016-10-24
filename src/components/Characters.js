import React from 'react';
import { Pagination } from 'react-bootstrap';

export default class Characters extends React.Component {

    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);

    }
    componentDidMount() {
        const offset = 0;
        const activePage = 1;
        this.props.fetchCharacters(offset, activePage);
    }

    handleSelect(activePage) {
        let offset = Math.ceil(activePage * 100);
        this.props.fetchCharacters(offset, activePage);
    }

    renderCharactersTable({id, thumbnail, name, description}) {
        let imagePath = `${thumbnail.path}.${thumbnail.extension}`;
        return (<tr key={id}>
            <td><img src={imagePath} className="img-circle" alt="{name}" width="150" height="100" /></td>
            <td>{name}</td>
            <td>{description}</td>
        </tr>);
    }

    render() {
        const { characters, pageNum, loading, error } = this.props.charactersList;
        const {activePage} = this.props.activePageList;
        if (loading) {
            return <div className="container"><h1>Marvel's characters</h1><h3>Loading...</h3></div>
        } else if (error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

        return (<div>
            <div id="page-content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Marvel characters</h1>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Summary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {characters.map(this.renderCharactersTable)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <ul className="pagination">
                    <Pagination
                        bsSize="small"
                        items={pageNum}
                        activePage={activePage}
                        onSelect={this.handleSelect} >
                    </Pagination>
                </ul>
            </div>
        </div>);
    }
}