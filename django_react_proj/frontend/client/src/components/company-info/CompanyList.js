import { useEffect, useState } from 'react';
import axios from 'axios';

const CompanyList = (props) => {

    const [company, setCompany] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/companies/1")
            .then((res) => {
                setCompany(res.data);
                console.log("company data - " + res.data);
            })
            .catch((err) => console.log(err));
    }, [])

    // return (
    //         company.map(data => (
    //             <ul key={data.name}>
    //                 <li>{data.name}</li>
    //             </ul>
    //         ))
    // )}

    return (
        <div>
            <h3>Company: {company.name}</h3>
            <h4>City: {company.city}</h4>
            <h4>Phone Number: {company.phone}</h4>
        </div>
    )}

export default CompanyList;