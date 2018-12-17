import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header title="Title" scroll>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/newapp">New Meeting</Link>
                        <Link to="/list">List of Meetings</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/newapp">New Meeting</Link>
                        <Link to="/list">List of Meetings</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
            </Layout>
        </div>
    );
  }
}

export default App;
