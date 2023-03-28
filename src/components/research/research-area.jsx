import research_data from "@/data/research-data";
import Link from "next/link";
import React from "react";

const ResearchArea = () => {
  return (
    <>
      <section className="research-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            {/* {research_data.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div
                  className={`research-item ${item.color} mb-50 wow fadeInUp`}
                  data-wow-delay=".6s"
                >
                  <div className="research-item__thum fix mb-20">
                    <img src={item.img} alt="research-thumb" />
                  </div>
                  <div className="research-item__content">
                    <span>{item.category}</span>
                    <h4 className="research-item__title mb-20">
                      <Link href="/services-details">{item.title}</Link>
                    </h4>
                    <p>{item.des}</p>
                    <Link href="/services-3" className="research-item__btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))} */}

            <nav
              class="navbar navbar-toggleable-md navbar-light fixed-top"
              id="navbar-main"
            >
              <button
                class="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <a class="navbar-brand" href="#" title="Home">
                <i class="fa fa-cube"></i>
              </a>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#" title="Work">
                      Work
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" title="Jobs">
                      Jobs
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" title="Blog">
                      Blog
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" title="Contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <header class="masthead">
              <div class="container">
                <div class="row">
                  <div class="col-md-10 offset-md-1">
                    <h2>JOIN US AND ENRICH OUR TEAM</h2>
                    <p>
                       QnQ is one of the fast-growing
                      healthcare industries and pioneers in sale of generic
                      medicine through our pharma retail outlets in India. We’re
                      currently expanding and looking for fresh and experienced
                      talents to join the winning team. 
                      
                      </p>
                      <h4>WHY US? </h4>
                      <p>
                      Learning development and growth. Continuous Learning, developing
                      competencies and environment for growth –are the culture
                      of QnQ. It’s a fun at work place and work with get
                      motivated and take up challenges and move forward. This is
                      what happens at QnQ every day. Empowerment to take
                      decisions and participation in decision making process,
                      thereby, professionally you grow. As you grow and take up
                      higher responsibilities, the compensation also, gets
                      improved as per the Promotion and Compensation Policy.
                      </p>

                      <h4>WHAT YOU GET?</h4>
                       <p>
                       Excellent opportunity for growth, continuous
                      leaning and overall development, Compensation as per the
                      skill and competency. Training to sharpen your knowledge
                      and skill, yearly Appraisal, incentives and other HR
                      policies for motivation and recognition. We guarantee a
                      rewarding career and great professional experience Join
                      our Team for a rewarding career ahead.
                    </p>

                    <div class="site-heading">
                      <h1 class="heading">Open Positions</h1>
                      <span class="subheading">
                        Current listings for web design and front-end
                        development jobs.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <section>
              <div class="container">
                <div class="row">
                  <div class="col-md-10 offset-md-1">
                    <ul class="job-list">
                      <li class="job-preview">
                        <div class="content float-left setting">
                          <h4 class="job-title">Senior Web Designer</h4>
                          <h5 class="company">Villipuram, TamilNadu</h5>
                        </div>
                        <a
                          href="#"
                          class="btn btn-apply float-sm-right float-xs-left"
                        >
                          Apply
                        </a>
                      </li>
                      <li class="job-preview">
                        <div class="content float-left setting">
                          <h4 class="job-title">Senior Web Designer</h4>
                          <h5 class="company">Seattle, WA</h5>
                        </div>
                        <a
                          href="#"
                          class="btn btn-apply float-sm-right float-xs-left"
                        >
                          Apply
                        </a>
                      </li>
                      <li class="job-preview">
                        <div class="content float-left setting">
                          <h4 class="job-title">Senior Web Designer</h4>
                          <h5 class="company">Seattle, WA</h5>
                        </div>
                        <a
                          href="#"
                          class="btn btn-apply float-sm-right float-xs-left"
                        >
                          Apply
                        </a>
                      </li>
                      <li class="job-preview">
                        <div class="content float-left setting">
                          <h4 class="job-title">Senior Web Designer</h4>
                          <h5 class="company">Seattle, WA</h5>
                        </div>
                        <a
                          href="#"
                          class="btn btn-apply float-sm-right float-xs-left"
                        >
                          Apply
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* <div className="row">
            <div className="col-12">
              <div className="basic-pagination text-center mt-30">
                <nav>
                  <ul>
                    <li>
                      <Link href="/research">
                        <i className="fa-light fa-arrow-left-long"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/research">1</Link>
                    </li>
                    <li>
                      <span className="current">2</span>
                    </li>
                    <li>
                      <Link href="/research">3</Link>
                    </li>
                    <li>
                      <Link href="/research">...</Link>
                    </li>
                    <li>
                      <Link href="/research">
                        <i className="fa-light fa-arrow-right-long"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ResearchArea;
