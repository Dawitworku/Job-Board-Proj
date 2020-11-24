import React from 'react';
import WelcomeMain from './welcome-auth/WelcomeMain';
import ProfileMain from './profile/ProfileMain';
import DeptBoardMain from './dept-board/DeptBoardMain';
import KanbanBoardMain from './kanban-board/KanbanBoardMain';
import CompanyMain from './company-info/CompanyMain';
import { Router } from "@reach/router";

const Main = () => {

    return (
        <Router>
            <WelcomeMain path="/" />
            <ProfileMain path="/profile" />
            <CompanyMain path="/company" />
            <DeptBoardMain path="/dept" />
            <KanbanBoardMain path="kanban" />
        </Router>
    );
}

export default Main;