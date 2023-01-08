import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

export class Users extends Component{

    constructor(props){
        super(props);
        this.state={users:[]}
    }

    refreshList(){
        fetch('http://localhost:5109/api/user')
        .then(response=>response.json())
        .then(data=>{
            this.setState({users:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }


    render(){
        const {users}=this.state;

        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>User ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Contact Number</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user=>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.contactNumber}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                            </tr>)}
                    </tbody>

                </Table>
            </div>
        )
    }
}