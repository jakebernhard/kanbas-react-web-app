import { BsGripVertical } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { MdOutlineAssignment } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { GoPlus } from "react-icons/go";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center">
        <div className="input-group w-25 inline">
          <button className="input-group-text bg-white border-end-0">
            <FaMagnifyingGlass className="fs-5 mb-1 text-secondary" />
          </button>
          <input
            id="wd-search-assignment"
            className="form-control p-2"
            placeholder="Search..."
          />
        </div>
        <div>
          <button
            id="wd-add-assignment-group"
            className="btn btn-secondary btn-lg mt-0 me-1 float-end"
          >
            <GoPlus className="fs-3 me-1" />
            Group
          </button>
          <button
            id="wd-add-assignment"
            className="btn btn-danger btn-lg me-1 float-end"
          >
            <GoPlus className="fs-3 me-1" />
            Assignment
          </button>
        </div>
      </div>
      <ul className="mt-5 list-group rounded-0">
        <li className="list-group-item p-0 fs-5">
          <p id="wd-assignments-title" className="p-3 ps-2 bg-secondary mb-0">
            <BsGripVertical className="me-2 fs-3" />
            <FaCaretDown className="me-2 fs-3" />
            ASSIGNMENTS
            <IoEllipsisVertical className="fs-4 float-end" />
            <button className="border-0 bg-secondary float-end">
              <GoPlus className="fs-3 me-2" />
            </button>
            <span className="border border-black p-1 rounded-pill span float-end">
              40% of Total
            </span>
          </p>
        </li>
        <ul id="wd-assignment-list" className="list-group rounded-0">
          <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-between">
              <BsGripVertical className="me-2 fs-3" />
              <MdOutlineAssignment className="fs-3 mb-1 me-3 text-success" />
              <div>
                <a
                  className="wd-assignment-link text-decoration-none fs-5 text-black"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  A1 - ENV + HTML
                </a>
                <br />
                <span className="text-danger">Multiple Modules </span> |{" "}
                <span>
                  <strong>Not available until</strong> May 6 at 12:00am{" "}
                </span>
                |{" "}
                <span>
                  <strong>Due</strong> May 13 at 11:59pm{" "}
                </span>{" "}
                | <span>100 pts</span>
              </div>
            </div>
            <LessonControlButtons />
          </li>
          <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-between">
              <BsGripVertical className="me-2 fs-3" />
              <MdOutlineAssignment className="fs-3 mb-1 me-3 text-success" />
              <div>
                <a
                  className="wd-assignment-link text-decoration-none fs-5 text-black"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  A2 - CSS + BOOTSTRAP
                </a>
                <br />
                <span className="text-danger">Multiple Modules </span> |{" "}
                <span>
                  <strong>Not available until</strong> May 13 at 12:00am{" "}
                </span>
                |{" "}
                <span>
                  <strong>Due</strong> May 20 at 11:59pm{" "}
                </span>{" "}
                | <span>100 pts</span>
              </div>
            </div>
            <LessonControlButtons />
          </li>
          <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-between">
              <BsGripVertical className="me-2 fs-3" />
              <MdOutlineAssignment className="fs-3 mb-1 me-3 text-success" />
              <div>
                <a
                  className="wd-assignment-link text-decoration-none fs-5 text-black"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  A3 - JAVASCRIPT + REACT
                </a>
                <br />
                <span className="text-danger">Multiple Modules </span> |{" "}
                <span>
                  <strong>Not available until</strong> May 20 at 12:00am{" "}
                </span>
                |{" "}
                <span>
                  <strong>Due</strong> May 27 at 11:59pm{" "}
                </span>{" "}
                | <span>100 pts</span>
              </div>
            </div>
            <LessonControlButtons />
          </li>
        </ul>
      </ul>
    </div>
  );
}
