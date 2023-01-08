import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

export class Travels extends Component{

    constructor(props){
        super(props);
        this.state={travels:[]}
    }

    refreshList(){
        fetch('http://localhost:5109/api/travel')
        .then(response=>response.json())
        .then(data=>{
            this.setState({travels:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }


    render(){
        const {travels}=this.state;

        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Travel ID</th>
                        <th>Traveler</th>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Cabin Class</th>
                        <th>Date</th>
                        <th>Nr of adults</th>
                        <th>Nr of students</th>
                        <th>Nr of seniors</th>
                        <th>Nr of youths</th>
                        <th>Nr of childrens</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {travels.map(travel=>
                            <tr key={travel.id}>
                                <td>{travel.id}</td>
                                <td>{travel.traveler}</td>
                                <td>{travel.source}</td>
                                <td>{travel.destination}</td>
                                <td>{travel.cabinClass}</td>
                                <td>{travel.date}</td>
                                <td>{travel.nrOfAdults}</td>
                                <td>{travel.nrOfStudents}</td>
                                <td>{travel.nrOfSeniors}</td>
                                <td>{travel.nrOfYouths}</td>
                                <td>{travel.nrOfChildrens}</td>
                            </tr>)}
                    </tbody>

                </Table>
            </div>
        )
    }
}