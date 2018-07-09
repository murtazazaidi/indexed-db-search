import React from 'react';
import { Row, Col, Table } from 'antd';

const renderDate = (datetime) => {
  const date = new Date(datetime);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return (
    <span>
      {date.toDateString()}
      {' '}
      {hours > 9 ? hours : `0${hours}`}
      :
      {minutes > 9 ? minutes : `0${minutes}`}
    </span>);
};

const columns = [{
  title: 'User ID',
  dataIndex: 'userId',
  key: 'userId',
}, {
  title: 'Departure ID',
  dataIndex: 'depPositionId',
  key: 'depPositionId',
}, {
  title: 'Arrival ID',
  dataIndex: 'arrPositionId',
  key: 'arrPositionId',
}, {
  title: 'Departure Time',
  dataIndex: 'departureTime',
  key: 'departureTime',
  render: renderDate,
}, {
  title: 'Created At',
  dataIndex: 'createdAt',
  key: 'createdAt',
  render: renderDate,
}];

const RecordTable = (props) => {
  const { records, isLoading } = props;

  return (
    <Row type="flex" align="middle" style={{ margin: 10 }}>
      <Col span={24}>
        <Table
          rowKey={record => record.depPositionId}
          columns={columns}
          dataSource={records}
          loading={isLoading}
          pagination={false}
        />
      </Col>
    </Row>);
};

export default RecordTable;
