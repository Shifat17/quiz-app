import { Form, Header } from 'semantic-ui-react';

const Layout = (props) => {
  return (
    <div className="auth-main">
      <div className="auth-content">
        <div className="auth-card">
          <Header as="h2" color="black" textAlign="center">
            Signup
          </Header>
          <Form.Group size="large" className="auth-form" autocomplete="off">
            {props.children}
          </Form.Group>
        </div>
      </div>
    </div>
  );
};

export default Layout;
