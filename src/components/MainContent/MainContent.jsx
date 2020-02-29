import React from "react";
import MainContentStyle from './MainContentStyle.module.sass';

import Navigation from "./Navigation/Navigation";
import TabsContent from './TabsContent/TabsContent';


const MainContent = () => {
    return (
        <main className={MainContentStyle.mainContent}>
            <Navigation />
            <TabsContent />


        </main>
    )
};

export default MainContent;