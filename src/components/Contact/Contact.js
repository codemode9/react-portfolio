import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./Contact.css"

const Contact = (props) => {



    return (
      <Form className="forman">
        <FormGroup>
          <Label for="exampleName">Name</Label>
          <Input type="name" name="name" id="exampleName" placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Message</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  };

export default Contact;