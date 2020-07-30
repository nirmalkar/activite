import React from "react";
import { Modal, Button, Calendar, Row, Col, Card } from "antd";
import propTypes from "prop-types";

const UserDetailsModal = ({ modalVisible, handleOk, handleCancel }) => {
  function onPanelChange(value, mode) {
    console.log(value);
    console.log(mode);
  }
  return (
    <div>
      <Modal
        title="User Details"
        visible={modalVisible}
        onOk={handleOk}
        width={800}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Close
          </Button>,
        ]}
      >
        <Row>
          <Col xs={20} sm={20} md={12} lg={16} xl={10}>
            <div className="site-calendar-demo-card">
              <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </div>
          </Col>
          <Col xs={20} sm={20} md={12} lg={8} xl={10}>
            <Card style={{ minHeight: 323 }}>
              <p>Start Time : Mar 16 2020 5:33PM</p>
              <p>Start Time : Mar 16 2020 5:33PM</p>
              <p>Start Time : Mar 16 2020 5:33PM</p>
            </Card>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

UserDetailsModal.propTypes = {
  modalVisible: propTypes.bool.isRequired,
  handleOk: propTypes.func.isRequired,
  handleCancel: propTypes.func.isRequired,
};

export default UserDetailsModal;
