import React from "react";
import { Row, Col } from "react-bootstrap";
import { Section, Timeline } from "../components";
import history from "../data/history.json";

const career = history.career;

export class Experience extends React.Component {
  render() {
    return (
      <Section id="experience" title="Experience">
        <Row>
          <Col md={12}>
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {career.map((c) => (
                <Timeline
                  key={c.company}
                  time={c.period}
                  title={c.title}
                  icon={["fas", "briefcase"]}
                  left="-7px"
                >
                  <Col md={12}>
                    <b>{c.company}</b>
                    <div dangerouslySetInnerHTML={{ __html: c.description }} />
                    <div dangerouslySetInnerHTML={{ __html: c.role }} />
                  </Col>
                </Timeline>
              ))}

              <span className="line" />
            </div>
          </Col>
        </Row>
      </Section>
    );
  }
}

export default Experience;
