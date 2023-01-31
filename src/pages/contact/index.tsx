import React from "react";
import { useForm } from "@formcarry/react";
import Blurb from "../../components/blurb";
import Footer from "../../components/footer";
import NavBar from "../../components/nav/index";
import "./index.scss";

function ContactPage() {
  const { state, submit } = useForm({
    id: "uuQ6kNVORd",
  });

  // Success message
  if (state.submitted) {
    return <div>Thank you! We received your submission.</div>;
  }
  return (
    <div className="contact-page">
      <NavBar internal />
      <div className="content-wrapper">
        <Blurb
          heading="Get in Touch"
          subtext="Energy Point offers a wide selection of technology implementation and land data management services tailored to the Energy industry's land acquisition and data management needs for scalability, forecasting and reporting."
        />
        <div className="contact-blocks">
          <div className="general-info">
            <div className="blocks">
              <a className="email" href="mailto:support@energypointllc.com">
                <svg
                  width="134"
                  height="101"
                  viewBox="0 0 134 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.1816 9.20367H119.737L66.9594 54.8401L14.1816 9.20367ZM122.533 92.6662C123.149 92.6643 123.739 92.4173 124.173 91.9805C124.608 91.5427 124.85 90.9514 124.848 90.3344V15.7198L69.6633 63.4315C68.9155 64.0858 67.9552 64.4472 66.9615 64.4472C65.9678 64.4472 65.0074 64.0858 64.2597 63.4315L9.07462 15.7198V90.3344C9.07366 90.9514 9.31877 91.5437 9.75558 91.9805C10.1914 92.4163 10.7837 92.6614 11.4007 92.6605L122.533 92.6662ZM11.4008 100.938H122.523C125.334 100.936 128.029 99.8181 130.016 97.8297C132.003 95.8412 133.119 93.146 133.119 90.3346V11.5353C133.114 8.7266 131.996 6.03339 130.01 4.04772C128.024 2.06115 125.332 0.94336 122.523 0.937744H11.4008C8.59208 0.942513 5.89887 2.06122 3.9132 4.04674C1.92758 6.03332 0.809815 8.72563 0.805176 11.5353V90.3346C0.805176 93.1462 1.92101 95.8414 3.90758 97.8297C5.89511 99.8182 8.59037 100.936 11.4008 100.938Z"
                  />
                </svg>
                support@energypointllc.com
              </a>
              <a className="phone" href="tel:405-534-4743">
                <svg
                  width="101"
                  height="101"
                  viewBox="0 0 101 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M62.8697 92.693C51.9412 89.34 40.2324 81.8041 29.9013 71.4712C19.5692 61.1383 12.0304 49.4275 8.67949 38.5009C6.22537 30.5013 4.98852 19.2374 12.7902 10.6009L23.83 35.1232L22.7432 36.1555H22.7439C22.0018 36.8601 21.652 37.8835 21.8081 38.8944C22.8249 45.515 28.7549 54.7907 37.6698 63.7031C46.5854 72.6158 55.8507 78.5488 62.471 79.5655C63.4827 79.7209 64.5054 79.3719 65.2114 78.6312L66.2437 77.5445L90.766 88.5827C82.1287 96.3814 70.8673 95.1443 62.866 92.6934L62.8697 92.693ZM23.5568 7.07996C21.8391 7.23531 20.1412 7.56296 18.489 8.05774L28.6179 30.5594L32.6955 26.683C32.7264 26.6638 32.7478 26.6329 32.7544 26.5976C32.761 26.5622 32.7529 26.5262 32.7308 26.4974L23.7194 7.17177C23.6782 7.0871 23.6517 7.06943 23.5574 7.07974L23.5568 7.07996ZM74.6804 68.6684L70.804 72.7437L93.3056 82.8749C93.8012 81.2227 94.1288 79.5249 94.2834 77.807C94.2915 77.7106 94.2753 77.6848 94.1899 77.645L74.868 68.6323C74.8386 68.6109 74.8025 68.6036 74.7672 68.6102C74.7318 68.6168 74.7009 68.6382 74.6817 68.6684L74.6804 68.6684ZM96.8315 71.9816L77.5077 62.9696C76.2929 62.3887 74.9241 62.2098 73.6009 62.4601C72.2778 62.7112 71.0688 63.3775 70.1507 64.3635L61.8932 73.0486C56.6708 71.5466 49.1254 66.3352 42.0775 59.2875C35.029 52.2405 29.8176 44.6855 28.3135 39.4699L36.9987 31.2088C37.9838 30.2914 38.6501 29.0825 38.9013 27.7593C39.1516 26.4362 38.9727 25.0683 38.391 23.8533L29.3811 4.52951C28.8311 3.32937 27.9211 2.33098 26.7777 1.67128C25.6335 1.0123 24.3134 0.725896 22.9991 0.851788C18.2043 1.29357 13.5666 2.78888 9.41685 5.23187C9.16283 5.37839 8.93018 5.56099 8.72844 5.77377C4.46823 10.1951 1.72347 15.8549 0.889981 21.9374C0.121308 28.1265 0.739044 34.4092 2.69607 40.3311C6.34294 52.2198 14.4325 64.844 25.4729 75.8856C36.5134 86.9261 49.1395 95.019 61.0274 98.6625L61.0267 98.6618C65.3634 100.044 69.8813 100.773 74.4321 100.823C76.1027 100.826 77.7712 100.707 79.424 100.469C85.5058 99.6337 91.1648 96.8896 95.5861 92.6309C95.7989 92.4277 95.9815 92.195 96.1295 91.941C98.571 87.792 100.066 83.1543 100.506 78.3603C100.633 77.0467 100.348 75.7258 99.6887 74.5816C99.0298 73.4382 98.0306 72.5281 96.8305 71.9788L96.8315 71.9816Z"
                  />
                </svg>
                405-534-4743
              </a>
            </div>

            <h2>
              <a href="mailto:donnaking@energypointllc.com">
                Donna King, Founder: <br />
                donnaking@energypointllc.com
              </a>
            </h2>
            <div className="addresses">
              <span>
                <h3>Office:</h3> 4801 Gaillardia Parkway Suite 200 Oklahoma
                City, OK 73142
              </span>
              <span>
                <h3>Mailing:</h3>P.O. Box 18633 Oklahoma City, OK 73154
              </span>
            </div>
          </div>
          <div>
            <section className="formcarry-container">
              <form
                action="#"
                method="POST"
                encType="multipart/form-data"
                onSubmit={submit}
              >
                <div className="formcarry-block">
                  <label htmlFor="fc-generated-1-name">Full Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    id="fc-generated-1-name"
                    placeholder="Your first and last name"
                  />
                </div>

                <div className="formcarry-block">
                  <label htmlFor="fc-generated-1-email">
                    Your Email Address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="fc-generated-1-email"
                    placeholder="john@doe.com"
                  />
                </div>

                <div className="formcarry-block">
                  <label htmlFor="fc-generated-1-email">Company</label>
                  <input
                    type="text"
                    name="company"
                    id="fc-generated-1-email"
                    placeholder="ABC Corp."
                  />
                </div>

                <div className="formcarry-block">
                  <label htmlFor="fc-generated-1-message">Your message</label>
                  <textarea
                    name="message"
                    id="fc-generated-1-message"
                    placeholder="Enter your message..."
                  ></textarea>
                </div>

                <div className="formcarry-block">
                  <button type="submit">Send</button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ContactPage;
