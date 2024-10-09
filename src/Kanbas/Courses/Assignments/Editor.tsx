import { FaCaretDown } from "react-icons/fa6";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="mt-3 ps-4">
      <label htmlFor="wd-name">Assignment Name</label>
      <input
        id="wd-name"
        value="A1 - ENV + HTML"
        className="form-control mb-3"
      />
      <textarea id="wd-description" className="form-control mb-3">
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Link to the Kanbas application Links to all relevant source
        code repositiories The Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <div className="container float-end mb-4">
        <div className="row mb-2">
          <label htmlFor="wd-points" className="col-12 col-md-6 text-md-end ">
            Points
          </label>
          <input
            id="wd-points"
            value={100}
            className="form-control col-12 col-md-6 w-50"
          />
        </div>
        <div className="row mb-2">
          <label htmlFor="wd-group" className="col-12 col-md-6 text-md-end">
            Assignment Group
          </label>
          <select id="wd-group" className="form-control col-12 col-md-6 w-50">
            <option value="ASSIGNMENT"></option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>
        <div className="row mb-2">
          <label
            htmlFor="wd-display-grade-as"
            className="col-12 col-md-6 text-md-end"
          >
            Display Grade as
          </label>
          <select
            id="wd-display-grade-as"
            className="form-control col-12 col-md-6 w-50"
          >
            <option value="PERCENTAGE">Percentage</option>
          </select>
        </div>
        <div className="row">
          <label
            htmlFor="wd-submission-type"
            className="col-12 col-md-6 text-md-end"
          >
            Submission Type
          </label>
          <div className="col-12 col-md-6 w-50 border border-gray p-3 mb-2">
            <select id="wd-submission-type" className="form-control mb-4">
              <option value="ONLINE">Online</option>
            </select>

            <label className="fw-bold text-gray mb-3">
              Online Entry Options
            </label>
            <br />
            <input
              type="checkbox"
              name="submission-option"
              id="wd-text-entry"
            />
            <label htmlFor="wd-text-entry" className="ps-3 mb-3">
              Text Entry
            </label>
            <br />

            <input
              type="checkbox"
              name="submission-option"
              id="wd-website-url"
            />
            <label htmlFor="wd-website-url" className="ps-3 mb-3">
              Website URL
            </label>
            <br />

            <input
              type="checkbox"
              name="submission-option"
              id="wd-media-recordings"
            />

            <label htmlFor="wd-media-recordings" className="ps-3 mb-3">
              Media Recordings
            </label>
            <br />

            <input
              type="checkbox"
              name="submission-option"
              id="wd-student-annotation"
            />

            <label htmlFor="wd-student-annotation" className="ps-3 mb-3">
              Student Annotation
            </label>
            <br />

            <input
              type="checkbox"
              name="submission-option"
              id="wd-file-upload"
            />
            <label htmlFor="wd-file-upload" className="ps-3 mb-3">
              File Uploads
            </label>
          </div>
        </div>
        <div className="row">
          <label className="col-12 col-md-6 text-md-end">Assign</label>
          <div className="col-12 col-md-6 w-50 border border-gray p-3">
            <label htmlFor="wd-assign-to" className="fw-bold text-gray mb-1">
              Assign to
            </label>
            <br />
            <input
              id="wd-assign-to"
              value="Everyone"
              className="form-control mb-3"
            />
            <label htmlFor="wd-due-date" className="fw-bold text-gray mb-1">
              Due
            </label>
            <br />
            <input
              id="wd-due-date"
              type="date"
              value="2024-05-13"
              className="form-control mb-3"
            />
            <div className="row">
              <label
                htmlFor="wd-available-from"
                className="col-6 fw-bold text-gray"
              >
                Available from
              </label>
              <label
                htmlFor="wd-available-until"
                className="col-6 fw-bold text-gray"
              >
                Until
              </label>
              <br />
            </div>
            <div className="row">
              <input
                id="wd-available-from"
                type="date"
                value="2024-05-06"
                className="col-6 form-control w-50"
              />
              <input
                id="wd-available-until"
                type="date"
                value="2024-05-20"
                className="col-6 form-control w-50"
              />
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-danger float-end ms-1">Save</button>
      <button className="btn btn-secondary float-end">Cancel</button>
    </div>
  );
}
