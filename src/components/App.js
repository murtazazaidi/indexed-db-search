import React, { Component } from 'react';
import {
  Layout, BackTop, Input,
} from 'antd';

import RecordTable from 'components/RecordTable';

import AppHeader from 'components/AppHeader';
import AppFooter from 'components/AppFooter';

import './App.css';

const { Content } = Layout;

const { Search } = Input;

class App extends Component {
  componentDidMount() {
    const { loadData, records, isLoading } = this.props;
    if (!isLoading && (!records || !records.length)) loadData();
  }

  onSearch = () => {
    // this.setState({ searchTerm });
  }

  render() {
    const { records, isLoading } = this.props;
    return (
      <Layout className="layout">
        <BackTop />
        <AppHeader />
        <Content className="container">
          <div className="content">
            <Search
              onSearch={this.onSearch}
              enterButton
            />
            <RecordTable records={records} isLoading={isLoading} />
          </div>
        </Content>
        <AppFooter />
      </Layout>);
  }
}

export default App;
