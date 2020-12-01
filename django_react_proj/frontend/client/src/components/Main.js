import React from 'react';
import WelcomeMain from './welcome-auth/WelcomeMain';
import ProfileMain from './profile/ProfileMain';
import DeptBoardMain from './dept-board/DeptBoardMain';
import KanbanBoardMarketing from './kanban-board/KanbanBoardMarketing';
import KanbanBoardSales from './kanban-board/KanbanBoardSales';
import KanbanBoardIt from './kanban-board/KanbanBoardIt';
import CompanyMain from './company-info/CompanyMain';
import { Router } from "@reach/router";

const Main = () => {

    return (
        <Router>
            <WelcomeMain path="/" />
            <ProfileMain path="/profile" />
            <CompanyMain path="/company" />
            <DeptBoardMain path="/dept" />
            <KanbanBoardMarketing path="/kanban/marketing" />
            <KanbanBoardSales path="/kanban/sales" />
            <KanbanBoardIt path="/kanban/it" />
        </Router>
    );
}

export default Main;