// import React from "react";
// import { Section } from "../components";
// import { Row, Col, Button, Form } from "react-bootstrap";
// import contact from "../data/contact.json";
// import { FC } from "react";
// import { useForm } from "../useForm";
// import "./Registration.scss";

// type Gender = "male" | "female" | "non-binary";

// interface User {
//   name: string;
//   age: number;
//   email: string;
//   gender: Gender;
//   password: string;
// }

// export class Contact extends React.Component {
//   const { handleSubmit, handleChange, data: user, errors } = useForm<User>({
//     validations: {
//       name: {
//         pattern: {
//           value: '^[A-Za-z]*$',
//           message:
//             "You're not allowed to use special characters or numbers in your name.",
//         },
//       },
//       age: {
//         custom: {
//           isValid: (value) => parseInt(value, 10) > 17,
//           message: 'You have to be at least 18 years old.',
//         },
//       },
//       password: {
//         custom: {
//           isValid: (value) => value.length > 6,
//           message: 'The password needs to be at least 6 characters long.',
//         },
//       },
//     },
//     onSubmit: () => alert('User submitted!'),
//   });
//   render() {
//     return (
//       <Section id="contact" title="Get In Touch">
//         <Row>
//           <Col md={4}>
//             <div className="contact-info">
//               <h3>{contact.title}</h3>
//               <div dangerouslySetInnerHTML={{ __html: contact.subTitle }} />
//             </div>
//           </Col>
//           <Col md={8}>
//             <Row>
//               <Col md={6}>
//                 <Form.Group controlId="inputName">
//                   <Form.Control
//                     type="text"
//                     placeholder="Your name"
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={6}>
//                 <Form.Group controlId="inputEmail">
//                   <Form.Control
//                     type="email"
//                     className="kd-form-control"
//                     placeholder="Email address"
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row>
//               <Col md={12}>
//                 <Form.Group controlId="inputSubject">
//                   <Form.Control
//                     type="text"
//                     className="kd-form-control"
//                     placeholder="Subject"
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row>
//               <Col md={12}>
//                 <Form.Group controlId="inputSubject">
//                   <Form.Control
//                     type="text"
//                     className="kd-form-control"
//                     placeholder="Company name"
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>

//             <Row>
//               <Col md={12}>
//                 <Form.Group controlId="inputSubject">
//                   <Form.Control
//                     type="text"
//                     className="kd-form-control"
//                     placeholder="Contact"
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row>
//               <Col md={12}>
//                 <Form.Group controlId="inputMessage">
//                   <Form.Control
//                     as="textarea"
//                     rows={5}
//                     className="kd-form-control"
//                     placeholder="Message"
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row>
//               <Col md={12}>
//                 <Button variant="kd">Send Message</Button>
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//       </Section>
//     );
//   }
// }

// export default Contact;
import React from "react";
import { Section } from "../components";
import { Row, Col, Button, Form } from "react-bootstrap";
import contact from "../data/contact.json";
import { FC } from "react";
import { useForm } from "./UseForm";

type Gender = "male" | "female" | "non-binary";

interface User {
  name: string;
  contact: number;
  email: string;
  companyName: string;
  message: string;
}

const Contact: FC = () => {
  const {
    handleChange,
    handleSubmit,
    data: user,
    errors,
  } = useForm<User>({
    validations: {
      name: {
        pattern: {
          value: "^[A-Za-z]*$",
          message:
            "You're not allowed to use special characters or numbers in your name.",
        },
      },
      companyName: {
        pattern: {
          value: "^[A-Za-z]*$",
          message:
            "You're not allowed to use special characters or numbers in company name.",
        },
      },
      contact: {
        pattern: {
          value: "^[0-9]*$",
          message: "Contact number should be numeric.",
        },
        custom: {
          isValid: (value) => value.length >= 10,
          message: "The contact number needs to be at least 10 number long.",
        },
      },
      message: {
        custom: {
          isValid: (value) => value.length > 10,
          message: "The message needs to be at least 10 characters long.",
        },
      },
    },

    onSubmit: () => {
      alert("User submitted!");
    },
  });

  const onSubmit = (data: User): void => {
    console.log(data);
  };
  return (
    <Section id="contact" title="Get In Touch">
      <form className="registration-wrapper" onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <input
              className="kd-form-control"
              placeholder="Name*"
              value={user.name || ""}
              onChange={handleChange("name")}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </Col>
          <Col md={6}>
            <input
              className="kd-form-control"
              placeholder="Contact*"
              value={user.contact || ""}
              onChange={handleChange<number>("contact")}
              required
            />
            {errors.contact && <p className="error">{errors.contact}</p>}
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <input
              className="kd-form-control"
              placeholder="Email*"
              type="email"
              value={user.email || ""}
              onChange={handleChange("email")}
              required
            />
          </Col>
          <Col md={6}>
            <input
              className="kd-form-control"
              placeholder="Company name"
              value={user.companyName || ""}
              onChange={handleChange("companyName")}
            />
            {errors.companyName && (
              <p className="error">{errors.companyName}</p>
            )}
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <input
              className="kd-form-control"
              placeholder="Message"
              value={user.message || ""}
              onChange={handleChange("message")}
              required
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <button className="btn btn-kd" type="submit">
              Send message
            </button>
          </Col>
        </Row>
      </form>
    </Section>
  );
};

export default Contact;
