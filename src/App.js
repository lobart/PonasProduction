import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Avatar, Image } from 'antd';
import TagsContainer from "./components/tags/tags-conteiner";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
function App() {
  return (
      <Layout >
          <Header style={{color:"white", justifyContent: 'center'}}>
              <Row style={{ display: 'inline-flex', justifyContent: 'center'}}>
                  <Col>
                      <Avatar size={40}>USER</Avatar>
                  </Col>
                  <Col>
                      Tobi pizda
                  </Col>
              </Row>
          </Header>
          <Layout>
              <TagsContainer/>
          </Layout>
          <Layout style={{background: "#141414"}}>
              <Row style={{ display: 'inline-flex', justifyContent: 'center'}}>
                  <Col>
                      <Button>Up</Button>
                  </Col>
                  <Col>
                      <Button>Down</Button>
                  </Col>
              </Row>

          </Layout>
          <Footer style={{color:"white",background: "#141414", display: 'inline-flex', justifyContent: 'center'}}>
              Tobi Pizda
          </Footer>
      </Layout>
  );
}

export default App;
