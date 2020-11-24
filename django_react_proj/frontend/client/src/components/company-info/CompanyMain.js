import React from 'react';
import CompanyList from './CompanyList';
import {Link} from '@reach/router';

const CompanyMain = (props) => {

    return (
        <div>
            <h1>Please Select Your Company!</h1>
            <h3>(Still working on this feature, for now the link will take you to tesla...)</h3>
            <h5>But for now, this is just a test to see if the front end is communicating with the back end! You should see a list of the companies below...</h5>
            <h2>Note-these companies need an ID in the server created. (dawit/mike)</h2>
            <CompanyList />
            <h3>This link will take you to the company board that displays all the companies and their roles (which still need to be created).</h3>
            <Link to="/dept">See Departments</Link>
        </div>
    )
}

export default CompanyMain;