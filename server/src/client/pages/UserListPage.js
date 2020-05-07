import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';

class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers(){
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>;
        })
    }

    head(){
        return(
            // Helmet expects a string as a child of <title> , 
            // so we wrap the elements we want to display 
            // into one single string expression
            <Helmet>
                    <title>{`${this.props.users.length} Users Loaded`}</title>  
                    <meta property='og:title' content='Users App'/>
            </Helmet>
        );
    }

    render(){ 
        return(
            <div>
                {this.head()}
                Here's a big list of users:
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return { users: state.users };
}

function loadData(store) {
    return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
                                        // SAME AS mapDispatchToProp  
};