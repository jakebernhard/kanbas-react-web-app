import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/cs.jpg" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/cs.jpg" width={200} />
            <div>
              <h5>CS2500</h5>
              <p className="wd-dashboard-course-title">
                Foundations of Computer Science I
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/cs.jpg" width={200} />
            <div>
              <h5>CS2510</h5>
              <p className="wd-dashboard-course-title">
                Foundations of Computer Science II
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/cs.jpg" width={200} />
            <div>
              <h5>CS3500</h5>
              <p className="wd-dashboard-course-title">
                Object Oriented Design
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/cs.jpg" width={200} />
            <div>
              <h5>CS300</h5>
              <p className="wd-dashboard-course-title">Algorithms & Data</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/cs.jpg" width={200} />
            <div>
              <h5>CS3200</h5>
              <p className="wd-dashboard-course-title">
                Foundations of Databases
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/cs.jpg" width={200} />
            <div>
              <h5>CS2800</h5>
              <p className="wd-dashboard-course-title">Logic and Computation</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/cs.jpg" width={200} />
            <div>
              <h5>CY2550</h5>
              <p className="wd-dashboard-course-title">
                Foundations of Cybersecurity
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/cs.jpg" width={200} />
            <div>
              <h5>DS3000</h5>
              <p className="wd-dashboard-course-title">
                Foundations of Data Science
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
