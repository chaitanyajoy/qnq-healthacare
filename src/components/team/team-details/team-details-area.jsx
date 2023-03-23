import Link from "next/link";
import React from "react";


// team_info data 
const team_info = [
  {
    id: 1,
    img: "/assets/img/team/team-details-01.jpg",
    name: "Cameron Williamson",
    title: "Genetic Specialist",
    des: (
      <>
        Providing insight-driven transformation to <br /> investment banks,
        wealth and asset mana, <br /> exchanges, Finance
      </>
    ),
    expertise: "Genetic Specialist",
    expertise_year: "15 Years",
    email: "webmail.info@gmail.com",
    social_links: [
      {
        link: "http://facebook.com",
        target: "_blank",
        icon: "fab fa-facebook-f",
        color: "tp-f-fb",
      },

      {
        link: "http://instagram.com",
        target: "_blank",
        icon: "fa-brands fa-instagram",
        color: "tp-f-instagram",
      },

      {
        link: "http://twitter.com",
        target: "_blank",
        icon: "fab fa-twitter",
        color: "tp-f-twitter",
      },

      {
        link: "https://www.pinterest.com/en/",
        target: "_blank",
        icon: "fa-brands fa-pinterest-p",
        color: "tp-f-pinterest",
      },
    ],
    personal_experience: {
      title: "Personal Experience",
      des_1: (
        <>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet.
        </>
      ),
      des_2: (
        <>
          Must explain to you how all this mistaken idea of denouncing works
          pleasure and praising uts pain was born and I will gives you a itself
          completed account of the system, and sed expounds the ut actual
          teachings of that greater sed explores truth. Denouncing works
          pleasures and praising pains was us born and I will gives you a
          completed ut workers accounts of the system. sit aspernatur aut odit
          aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt.
        </>
      ),
      personal_info: [
        {
          id: 1,
          title: "Skills",
          des: (
            <>
              Must explain to you how all praising uts pain <br />
              was born and I will gives you a itself completed <br />
              account of the system, and sed expounds the <br /> ut actual
              teachings of that greater
            </>
          ),
          title_list: [
            "Extramural Funding",
            "Bacteria Markers",
            "Nam nec mi euismod euismod",
            "In aliquet dui nec ectus",
            "Extramural Funding",
            "Bacteria Markers",
            "Nam nec mi euismod euismod",
            "In aliquet dui nec ectus",
            "Extramural Funding",
          ],
        },
        {
          id: 2,
          title: "Education",
          des: (
            <>
              Must explain to you how all praising uts pain <br />
              was born and I will gives you a itself completed <br />
              account of the system, and sed expounds the <br /> ut actual
              teachings of that greater
            </>
          ),
          title_list: [
            "Extramural Funding",
            "Bacteria Markers",
            "Nam nec mi euismod euismod",
            "In aliquet dui nec ectus",
            "Extramural Funding",
            "Bacteria Markers",
            "Nam nec mi euismod euismod",
            "In aliquet dui nec ectus",
            "Extramural Funding",
          ],
        },
        {
          id: 3,
          title: "Awards",
          des: (
            <>
              Must explain to you how all praising uts pain <br />
              was born and I will gives you a itself completed <br />
              account of the system, and sed expounds the <br /> ut actual
              teachings of that greater
            </>
          ),
          title_list: [
            "Extramural Funding",
            "Bacteria Markers",
            "Nam nec mi euismod euismod",
            "In aliquet dui nec ectus",
            "Extramural Funding",
            "Bacteria Markers",
            "Nam nec mi euismod euismod",
            "In aliquet dui nec ectus",
            "Extramural Funding",
          ],
        },
      ],
    },
  },
];
const TeamDetailsArea = () => {
  return (
    <>
      <section className="team-details-area pt-130 pb-70 ml-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 mr-50">
              <div className="tp-team-dtls__thumb mb-50">
                <img className="pr-5"
                  src="https://mf.b37mrtl.ru/files/2022.03/m/62355a2f85f5403839560fd3.jpg"
                  alt="team-thumb"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="tp-team-dtls__content mt-50 mb-50 mt-0">
                <h4 className="tp-team-dtls__title mb-10">
                  <Link href="/team-1">Bulk Orders</Link>
                </h4>
                <span className="mb-35">at a special discount for pharma companies</span>
                <p>
                  PFor many business owners, our franchising strategy is an appealing one. As a franchisee, you gain access to the substantial company's resources, expertise, and support. By offering you a tested business concept, operational support, training, marketing tools, and access to current clients, this lowers the risk involved with beginning a business.
                  <br /> exchanges, Finance
                </p>
                {/* <div className="tp-team-dtls__info">
                  <ul>
                    <li>
                      Expertise: <span>Genetic Specialist</span>
                    </li>
                    <li>
                      Experience: <span>15 Years</span>
                    </li>
                    <li>
                      E-mail:{" "}
                      <span>
                        <a href="mailto:webmail.info@gmail.com">
                          {" "}
                          webmail.info@gmail.com
                        </a>
                      </span>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <div className="tp-team-dtls__social mt-45 mb-50">
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                {/* <a className="tp-dtls-insta" href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a> */}
                <a className="tp-dtls-tweet" href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a className="tp-dtls-pinter" href="#">
                  <i className="fa-brands fa-pinterest-p"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 pr-150">
              <div className="tp-team-dtls-text mt-40">
                <h4 className="tp-team-dtls-text__title mb-30">
                  Bulk Orders - Benefits are Beyond!
                </h4>
                <p>
                A novel retail unit for quality-assured generic drugs, QnQ Pharmacy is a division of QnQ Healthcare Pvt Ltd. Our mission is to offer people cheap access to quality assured generic medications.
We do additional drug quality testing (Active Pharmaceutical Ingredient assay & amount, disintegration, sterility, etc.) on all batches of medicines in a reputable NABL accredited third party drug testing facility.
A novel retail unit for quality-assured generic drugs, QnQ Pharmacy is a division of QnQ Healthcare Pvt Ltd. Our mission is to offer people cheap access to quality assured generic medications.
We do additional drug quality testing (Active Pharmaceutical Ingredient assay & amount, disintegration, sterility, etc.) on all batches of medicines in a reputable NABL accredited third party drug testing facility.
                </p>
                <p>
                A novel retail unit for quality-assured generic drugs, QnQ Pharmacy is a division of QnQ Healthcare Pvt Ltd. Our mission is to offer people cheap access to quality assured generic medications.
We do additional drug quality testing (Active Pharmaceutical Ingredient assay & amount, disintegration, sterility, etc.) on all batches of medicines in a reputable NABL accredited third party drug testing facility.
A novel retail unit for quality-assured generic drugs, QnQ Pharmacy is a division of QnQ Healthcare Pvt Ltd. Our mission is to offer people cheap access to quality assured generic medications.
We do additional drug quality testing (Active Pharmaceutical Ingredient assay & amount, disintegration, sterility, etc.) on all batches of medicines in a reputable NABL accredited third party drug testing facility.
                </p>
              </div>
            </div>
          </div>
          <div className="row pr-150">
            <div className="col-lg-4 col-md-6 ">
              <div
                className="tp-team-dtls-item mb-50 mt-35 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <h4 className="tp-team-dtls-item__title mb-25">Skills</h4>
                <p>
                A novel retail unit for quality-assured generic drugs, QnQ Pharmacy is a division of QnQ Healthcare Pvt Ltd. Our mission is to offer people cheap access to quality assured generic medications.
We do additional drug quality testing (Active Pharmaceutical Ingredient assay & amount, disintegration, sterility, etc.) on all batches of medicines in a reputable NABL accredited third party drug testing facility.
                </p>
                <div className="tp-team-dtls-item__list">
                  <ul>
                    <li>
                      <i className="fa-solid fa-check"></i>Extramural Funding
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Bacteria Markers
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Nam nec mi euismod
                      euismod
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>In aliquet dui nec
                      lectus
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Extramural Funding
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Bacteria Markers
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Nam nec mi euismod
                      euismod
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Nam nec mi euismod
                      euismod
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="tp-team-dtls-item mb-50 mt-35 ml-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <h4 className="tp-team-dtls-item__title mb-25">Education</h4>
                <p>
                A novel retail unit for quality-assured generic drugs, QnQ Pharmacy is a division of QnQ Healthcare Pvt Ltd. Our mission is to offer people cheap access to quality assured generic medications.
We do additional drug quality testing (Active Pharmaceutical Ingredient assay & amount, disintegration, sterility, etc.) on all batches of medicines in a reputable NABL
                </p>
                <div className="tp-team-dtls-item__list">
                  <ul>
                    <li>
                      <i className="fa-solid fa-check"></i>Extramural Funding
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Bacteria Markers
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Nam nec mi euismod
                      euismod
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>In aliquet dui nec
                      lectus
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Extramural Funding
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Bacteria Markers
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Nam nec mi euismod
                      euismod
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Nam nec mi euismod
                      euismod
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="tp-team-dtls-item mb-50 mt-35 ml-75 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <h4 className="tp-team-dtls-item__title mb-25">Awards</h4>
                <p>
                A novel retail unit for quality-assured generic drugs, QnQ Pharmacy is a division of QnQ Healthcare Pvt Ltd. Our mission is to offer people cheap access to quality assured generic medications.
We do additional drug quality testing (Active Pharmaceutical Ingredient assay & amount, disintegration, sterility, etc.) on all
                </p>
                <div className="tp-team-dtls-item__list">
                  <ul>
                    <li>
                      <i className="fa-solid fa-check"></i>Extramural Funding
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Bacteria Markers
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Nam nec mi euismod
                      euismod
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>In aliquet dui nec
                      lectus
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Extramural Funding
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Bacteria Markers
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Nam nec mi euismod
                      euismod
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Nam nec mi euismod
                      euismod
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetailsArea;
