import React from 'react';
import { Row, Col, Table } from 'antd';

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
}, {
  title: 'Created At',
  dataIndex: 'createdAt',
  key: 'createdAt',
}];

const RecordTable = (props) => {
  const { records, isLoading } = props;

  return (
    <Row type="flex" align="middle" style={{ margin: 10 }}>
      <Col span={24}>
        <Table
          columns={columns}
          dataSource={records}
          loading={isLoading}
        />
      </Col>
    </Row>);
};

export default RecordTable;
