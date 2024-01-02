import React from "react";
import BuildingComponent from "../../components/universal/BuildingComponent";
import HRSideBar from "../../components/hr/HRSideBar";
import Headings from "../../components/universal/Headings";

const HRTraining = () => {

    return (
        <>
            <HRSideBar/>
            <div className="p-4 sm:ml-64">
                <Headings text={"Training"} />
                <BuildingComponent image={"./svgs/hr_building.svg"}/>
            </div>
        </>
    )
}

export default HRTraining