import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import moment from 'moment';
import EditTrainingForm from './EditTrainingForm';

class TrainingTable extends Component {
    render() {
        return (
            <div>
                <ReactTable
                    columns={[
                        {
                            Header: "Activity",
                            accessor: "activity"
                        },
                        {
                            Header: "Customer Name",
                            accessor: "customer"
                        },
                        {
                            Header: "Date",
                            accessor: "date",
                            Cell: ({value}) => (moment(value).format('DD/MM/YYYY')),
                        },
                        {
                            Header: "Time",
                            accessor: "date",
                            Cell: ({ value }) => (moment(value).format('HH:mm'))
                        },
                        {
                            Header: "Duration (mins)",
                            accessor: "duration"
                        },
                        {
                            Header: "",
                            accessor: "links[0].href",
                            flterable: false,
                            Cell: ({ value }) => (
                                <button className="btn btn-sm btn-danger"
                                    onClick={() => { this.props.deleteTraining(value) }}
                                >
                                    Delete
                                </button>
                            )
                        },
                        {
                            Header: "",
                            accessor: "links[0].href",
                            flterable: false,
                            Cell: ({ row, value }) => (<EditTrainingForm link={value} training={row} editTraining={this.props.editTraining} />)
                        }
                    ]}
                    defaultPageSize={10}
                    filterable
                    data={this.props.data}
                    className="-striped"
                />
            </div>
        );
    }
}

export default TrainingTable;