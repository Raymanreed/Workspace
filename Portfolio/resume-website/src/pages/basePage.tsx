import { ResumeDocument } from "../components/resume";

function BasePage() {
    return (
        <>
            <h2>This is the base page</h2>
            <div className="resume-container">
                <ResumeDocument />
            </div>
        </>
    )
}

export default BasePage;