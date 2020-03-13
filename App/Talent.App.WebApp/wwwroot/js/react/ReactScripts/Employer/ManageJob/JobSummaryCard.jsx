import React from 'react';
import Cookies from 'js-cookie';
import { Popup } from 'semantic-ui-react';
import moment from 'moment';

export class JobSummaryCard extends React.Component {
    constructor(props) {
        super(props);

        this.selectJob = this.selectJob.bind(this)
    }

    selectJob(id) {
        var cookies = Cookies.get('talentAuthToken');
        //url: 'http://localhost:51689/listing/listing/closeJob',
    }

    render() {
       

        var data = this.props.data

        return (
            <div className="card manage-job">
                <div className="content">
                    <div className="header">{data.title} </div>
                    <Popup trigger={
                        <a className="ui black right ribbon label">
                            <i className="user icon"></i>{data.noOfSuggestions}
                        </a>
                    }>
                        <span>Suggested Talents</span>
                    </Popup>

                    <div className="meta"> {data.location.city}, {data.location.country}</div>

                    <div className="description job-summary">
                        {data.summary}
                    </div>
                    <div className="extra content">
                    </div>
                </div>
               
            </div>
           
            )

    }

}
