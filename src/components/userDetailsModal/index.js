import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Modal, Button, Calendar, Row, Col, Card } from "antd";
import propTypes from "prop-types";

const UserDetailsModal = ({ modalVisible, handleOk, handleCancel, id }) => {
  const [date, setDate] = useState("");
  const [userTime, setUserTime] = useState("");
  const { users } = useSelector((state) => state.userData);
  const { userInfoModalVisible } = useSelector(
    (state) => state.visibleUserInfoModal
  );
  const onPanelChange = (value) => {
    setDate(value.format("ll"));
  };
  useEffect(() => {
    setUserTime("");
  }, [userInfoModalVisible]);
  useEffect(() => {
    if (id) {
      users &&
        users.map((user) => {
          if (user.id === id) {
            user.activity_periods.map((time) => {
              if (time.start_time.split(" ", 3).join(" ") === date) {
                setUserTime(time);
              }
            });
            return user;
          }
        });
    }
  }, [date]);
  return (
    <div>
      <Modal
        title="User Details"
        visible={userInfoModalVisible}
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
              <Calendar fullscreen={false} onChange={onPanelChange} />
            </div>
          </Col>
          <Col xs={20} sm={20} md={12} lg={8} xl={10}>
            <Card style={{ minHeight: 323 }}>
              {userTime && userTime.start_time}
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
  id: propTypes.string.isRequired,
};

export default UserDetailsModal;
