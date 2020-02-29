import React from 'react';
import Cookies from 'js-cookie';
import { Popup } from 'semantic-ui-react';
import moment from 'moment';

export class JobSummaryCard extends React.Component {
    constructor(props) {
        super(props);

        const details = props.details ?
            Object.assign({}, props.details)
            : {
                Title: "",
                Summary: "",
                JobDetails: "",
                Status: ""
            }
        this.state = {
            newContact: details
        }
        this.selectJob = this.selectJob.bind(this)
    }

    selectJob(id) {
        var cookies = Cookies.get('talentAuthToken');
        //url: 'http://localhost:51689/listing/listing/closeJob',
    }

    render() {
       

        let Title = this.props.details ? `${this.props.details.Title}` : ""
        let Summary = this.props.details ? `${this.props.details.Summary}` : ""
        let JobDetails = this.props.details ? this.props.details.JobDetails : ""
        let Status = this.props.details ? this.props.details.Status : ""

        return (
            <div className="ui raised link job card">
                <div className="content">
                    <div className="header">{Title}</div>
                    <div className="meta">
                        <span className="category">{Summary}</span>
                    </div>
                    <div className="description">
                        <p>{JobDetails}</p>
                        <p>{Status}</p>

                    </div>
                </div>
                <div className="extra content">
                    <div className="left floated">
                        <button className="ui blue basic button">Apply now</button>
                    </div>
                    <div className="right floated author">
                        <img className="ui avatar image" src="https://semantic-ui.com/images/avatar/small/matt.jpg" /> Company Z
                    </div>
                </div>
            </div>
            )

    }

}