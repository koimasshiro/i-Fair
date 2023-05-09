import React, { useState } from "react";
import "./Benefits.css";

const Benefits = () => {
  return (
    <>
      <h2 style={{ paddingBottom: "20px" }}>Benefits</h2>
      <div class="wrapper">
        <input className="radio" id="one" name="group" type="radio" checked />
        <input className="radio" id="two" name="group" type="radio" />
        <input className="radio" id="three" name="group" type="radio" />

        <div class="tabs">
          <label className="tab" id="one-tab" for="one">
            Benefits to participants
          </label>
          <label className="tab" id="two-tab" for="two">
            Benefits to Mentors
          </label>
          <label className="tab" id="three-tab" for="three">
            Benefits to Nigeria
          </label>
        </div>

        <div className="panels">
          <div className="panel" id="one-panel">
            <div>
              <h4 className="panel-title">
                {" "}
                Successful applicants are entitled to the following benefits:{" "}
              </h4>
            </div>
            <ul className="benefits-list">
              <li>
                A unique platform to transform ideas into inventions and develop
                working prototypes.
              </li>
              <li>
                Access to a special certificate course and mentoring by
                accomplished inventors, innovators, and researchers from Nigeria
                and the State of Israel.
              </li>
              <li>
                Free access and membership to a modern innovation center where
                they can work on and develop their ideas.
              </li>
              <li>The opportunity to enter “Mass Challenge Israel, 2022”.</li>
              <li>
                The opportunity to pitch inventions and prototypes to investors
                for possible adoption, patronage and partnership.
              </li>
            </ul>
          </div>
          <div class="panel" id="two-panel">
            <ul className="benefits-list">
              <li>Automatic adoption as a Fellow of the Innov8 Center.</li>
              <li>
                Enlistment into i-FAIR database of Mentors, for references and
                future engagements.
              </li>
              <li>
                Opportunity to network with fellow mentors from other parts of
                the world, especially Israel and Nigeria.
              </li>
              <li>
                Opportunity to network with renowned as well as aspiring
                Inventors, Innovators and Researchers in Mentor’s field of
                expertise.
              </li>
              <li>
                Access to New Innovations, Inventions and Researches in Mentor’s
                field of expertise.
              </li>
              <li>
                Access to an interactive platform where i-FAIR Organizers,
                Sponsors, Partners, Participants, Mentors and Investors will
                meet and interact.
              </li>
              <li>i-FAIR Mentorship Certificate Award to Mentors.</li>
            </ul>
          </div>
          <div class="panel" id="three-panel">
            <ul className="benefits-list">
              <li>
                Development of innovations with the potential to address
                challenges in the Nigerian society.
              </li>
              <li>
                Development of Made-In-Nigeria solutions to challenges in
                Nigeria.
              </li>
              <li>
                Economic advancement and wealth creation by way of venture
                creation.
              </li>
              <li>
                Job creation through innovation development, by the transition
                of innovations into start-ups.
              </li>
              <li>
                Introducing Nigerians to technologies, processes and procedures
                with the capability to solve critical challenges
              </li>
              <li>
                Creating self-sufficiency and productivity within the Nigerian
                innovation ecosystem.
              </li>
              <li>
                Nation-building through innovation, Research & Development, and
                entrepreneurship.
              </li>
              <li>
                Putting Nigeria on the path to becoming a start-up nation.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Benefits;
