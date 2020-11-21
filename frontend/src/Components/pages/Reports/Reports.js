import React, {useState} from 'react';
import {ReportsPageContainer} from "../../../Styles/ReportsStyle";

const Reports = () => {

    return(
        <ReportsPageContainer>
        <div className="reports-inner-div">
            <h1 className="reports-h1"> OUR PROGRAMS </h1>
            <div className="reports-cards-container">
                <div className="reports-annual card"> <h2>Annual Reports</h2> </div>
                <div className="card"> <h2>Financial Reports</h2> </div>
                <div className="card"> <h2>Other Reports</h2> </div>
            </div>
        </div>
    </ReportsPageContainer>
    )
}

export default Reports;