import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/cs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-couse-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
                  <p className="wd-dashboard-course-info">
                    <span>Section 01 </span>
                    <span>Fall </span>
                    <span>2024</span>
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/cs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-couse-title card-title">
                    CS2500
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Foundations of CS I
                  </p>
                  <p className="wd-dashboard-course-info">
                    <span>Section 02 </span>
                    <span>Fall </span>
                    <span>2022</span>
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/cs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-couse-title card-title">
                    CS2510
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Foundations of CS II
                  </p>
                  <p className="wd-dashboard-course-info">
                    <span>Section 03 </span>
                    <span>Spring </span>
                    <span>2023</span>
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/cs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-couse-title card-title">
                    CS3500
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Object Oriented Design
                  </p>
                  <p className="wd-dashboard-course-info">
                    <span>Section 04 </span>
                    <span>Fall </span>
                    <span>2023</span>
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/cs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-couse-title card-title">
                    CS3000
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Algorithms and Data
                  </p>
                  <p className="wd-dashboard-course-info">
                    <span>Section 05 </span>
                    <span>Fall </span>
                    <span>2024</span>
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/cs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-couse-title card-title">
                    CS3200
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Foundations of Databases
                  </p>
                  <p className="wd-dashboard-course-info">
                    <span>Section 06 </span>
                    <span>Fall </span>
                    <span>2024</span>
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/cs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-couse-title card-title">
                    CS2800
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Logic and Computation
                  </p>
                  <p className="wd-dashboard-course-info">
                    <span>Section 07 </span>
                    <span>Fall </span>
                    <span>2023</span>
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/cs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-couse-title card-title">
                    CY2550
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Foundations of Cybersecurity
                  </p>
                  <p className="wd-dashboard-course-info">
                    <span>Section 08 </span>
                    <span>Spring </span>
                    <span>2023</span>
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/cs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-couse-title card-title">DS300</h5>
                  <p className="wd-dashboard-course-title card-text">
                    Foundations of Data Science
                  </p>
                  <p className="wd-dashboard-course-info">
                    <span>Section 09 </span>
                    <span>Fall </span>
                    <span>2023</span>
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
