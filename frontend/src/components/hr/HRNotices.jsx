import React, {useState, useEffect} from "react";
import HRPTONotices from "./HRPTONotices";
import DashBRemainingOffset from "../universal/DashBRemainingOffset";
import DashBremainingPTO from "../universal/DashBRemainingPTO";
import DashBBirthdays from "../universal/DashBBirthdays";
import DashBAnniversaries from "../universal/DashBAnniversaries";

const HRNotices = () => {

    const [ptos, setPtos] = useState([])

    return (
        <>
            <div className="grow p-2 flex flex-col">
                <div className="flex flex-row justify-center items-center">
                    <DashBremainingPTO></DashBremainingPTO>
                    <DashBRemainingOffset></DashBRemainingOffset>
                </div>

                <HRPTONotices></HRPTONotices>

                <div className="flex flex-row">
                    <DashBBirthdays></DashBBirthdays>

                    <DashBAnniversaries></DashBAnniversaries>
                </div>
            </div>
        </>
    );
}

export default HRNotices;