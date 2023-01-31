import React from "react";
import Blurb from "../../components/blurb";
import CalloutBox from "../../components/callout-box";
import Footer from "../../components/footer";
import NavBar from "../../components/nav/index";
import calloutImage from "../home/img/book-consult-callout.svg";
import "./index.scss";

function ConsultingPage() {
  return (
    <div className="consulting-page">
      <NavBar internal />
      <div className="content-wrapper">
        <Blurb
          heading="The Value Proposition"
          subtext="Energy Point offers a wide selection of technology implementation and land data management services tailored to the Energy industry's land acquisition and data management needs for scalability, forecasting and reporting."
        />
        <div className="boxes">
          <div className="box">
            <div className="icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="white"
                  d="M11.9964 5.355C11.9974 5.355 11.9984 5.356 11.9994 5.356C12.0004 5.356 12.0014 5.355 12.0024 5.355C13.1494 5.357 14.0824 6.29 14.0824 7.438C14.0824 8.586 13.1484 9.52 11.9994 9.52C11.7294 9.52 11.4714 9.464 11.2344 9.37C11.2324 9.369 11.2314 9.367 11.2294 9.366C11.2254 9.365 11.2204 9.366 11.2164 9.364C10.4554 9.054 9.91642 8.309 9.91642 7.438C9.91642 6.29 10.8494 5.357 11.9964 5.355ZM20.9034 11.824C20.4364 11.532 19.8194 11.673 19.5254 12.141C17.8904 14.753 15.0764 16.313 11.9994 16.313C11.2184 16.313 10.4544 16.21 9.72242 16.018L11.4874 11.468C11.6564 11.49 11.8244 11.52 11.9994 11.52C12.1974 11.52 12.3864 11.489 12.5774 11.461L13.5294 13.917C13.6824 14.314 14.0614 14.556 14.4614 14.556C14.5814 14.556 14.7034 14.534 14.8224 14.489C15.3374 14.289 15.5934 13.709 15.3944 13.195L14.4274 10.701C15.4264 9.956 16.0824 8.776 16.0824 7.438C16.0824 5.533 14.7664 3.942 12.9994 3.493V3C12.9994 2.448 12.5524 2 11.9994 2C11.4474 2 10.9994 2.448 10.9994 3V3.493C9.23342 3.942 7.91642 5.533 7.91642 7.438C7.91642 8.8 8.59442 10.001 9.62242 10.743L7.86142 15.285C6.50042 14.568 5.32542 13.501 4.47442 12.141C4.18242 11.674 3.56642 11.529 3.09642 11.824C2.62842 12.116 2.48642 12.734 2.77942 13.202C3.86342 14.936 5.38142 16.275 7.13742 17.153L5.78542 20.637C5.58642 21.152 5.84142 21.732 6.35742 21.931C6.47542 21.977 6.59842 21.999 6.71842 21.999C7.11842 21.999 7.49642 21.757 7.65142 21.36L8.99942 17.883C9.96142 18.157 10.9654 18.313 11.9994 18.313C13.0544 18.313 14.0794 18.148 15.0584 17.863L16.4144 21.361C16.5684 21.758 16.9474 22 17.3474 22C17.4674 22 17.5894 21.978 17.7084 21.932C18.2234 21.733 18.4794 21.153 18.2804 20.638L16.9184 17.126C18.6494 16.247 20.1464 14.918 21.2204 13.202C21.5134 12.734 21.3714 12.117 20.9034 11.824Z"
                ></path>
              </svg>
            </div>
            <span>Needs Assessment</span>
            Our team examines applicable solutions through software
          </div>
          <div className="box">
            <div className="icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="white"
                  d="M14.701 20.1281C14.076 20.1281 13.523 19.7301 13.326 19.1371L9.3 7.06107L7.754 11.6971C7.498 12.4751 6.772 13.0001 5.952 13.0001H3C2.448 13.0001 2 12.5531 2 12.0001C2 11.4481 2.448 11.0001 3 11.0001H5.878L7.925 4.86407C8.123 4.27107 8.675 3.87207 9.3 3.87207C9.925 3.87207 10.478 4.27007 10.676 4.86307L14.701 16.9391L16.248 12.3041C16.504 11.5261 17.229 11.0001 18.049 11.0001H21C21.553 11.0001 22 11.4481 22 12.0001C22 12.5531 21.553 13.0001 21 13.0001H18.124L16.076 19.1371C15.878 19.7301 15.326 20.1281 14.701 20.1281Z"
                ></path>
              </svg>
            </div>
            <span>People, Technology, and Process Recomendations</span>
            Our team examines applicable solutions through software
          </div>
          <div className="box">
            <div className="icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="white"
                  d="M4.98047 9.89521C4.98047 5.5349 8.96143 2.11562 13.468 3.02852C16.1446 3.57591 18.3063 5.72476 18.8656 8.40252C19.4218 11.0813 18.4291 13.6038 16.612 15.1894H12.244C11.8464 15.1894 11.524 15.5118 11.524 15.9094C11.524 16.307 11.8464 16.6294 12.244 16.6294H15.0585V18.067C15.0585 19.7471 13.6854 21.1203 12.0052 21.1203C10.3259 21.1203 8.95289 19.747 8.95289 18.067V16.203C6.6029 15.081 4.98047 12.68 4.98047 9.89521ZM12.6397 7.58075C12.8296 7.23141 12.7004 6.79422 12.3511 6.60428C12.0017 6.41434 11.5646 6.54357 11.3746 6.89291L10.0034 9.41479C9.88213 9.63793 9.88733 9.90836 10.0171 10.1267C10.1468 10.345 10.382 10.4787 10.636 10.4787H12.1532L11.3599 11.9353C11.1697 12.2845 11.2986 12.7217 11.6478 12.9119C11.997 13.1022 12.4343 12.9733 12.6245 12.624L13.9975 10.103C14.119 9.88004 14.1139 9.60941 13.9842 9.39099C13.8544 9.17258 13.6192 9.03871 13.3652 9.03871H11.847L12.6397 7.58075Z"
                ></path>
              </svg>
            </div>
            <span>Solution Implementation</span>
            Our team examines applicable solutions through software
          </div>
        </div>
        <p>
          Energy Point is ‘software agnostic’ and leverages our land and data
          management expertise to prescribe technology and process solutions
          that best fit our clients’ needs, goals, and budgets. All the while
          keeping in mind the bigger data structure, integrations, and our
          clients’ time and resources. We successfully implement solutions for
          the following:
        </p>
        <ul>
          <li>Payment Forecasting</li>
          <li>
            Contract Selection, Drafting and Authorization processes for land
            acquisition
          </li>
          <li>Key data term capture and organization</li>
          <li>Workflow automation</li>
          <li>Streamline processes for Land Acquisition</li>
        </ul>
        <p>
          This application of experience, skill and relationships with software
          vendors allows our clients to cut through the daunting task of
          interviewing multiple software solutions and trying to determine from
          an hour’s demonstration the best software solution for their company.
        </p>

        <Blurb
          blurbClass="approach-blurb"
          heading="The Approach"
          subtext="We take pride in simplifying the process, focusing on what is important to our clients and makingrecommendations in line with business needs."
        />
        <p>
          Our team examines applicable solutions through software, data risk
          assessment and process improvement. Once complete, we work with our
          client to prioritize and implement the selected solution(s).
        </p>
        <p>
          Our team adapts to best practices for solution implementation(s) to
          ensure team adoption, data integrity, and value.
        </p>
      </div>
      <CalloutBox
        header="Book a consult with us today"
        copy="We leverage our extensive experience and expertise in each field in order to positively impact the bottom line through efficient uses of technology, reporting, and process."
        ctaCopy="Click to Book"
        image={calloutImage}
      />
      <Footer />
    </div>
  );
}
export default ConsultingPage;
