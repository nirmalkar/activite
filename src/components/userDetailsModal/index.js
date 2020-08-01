import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Modal, Button, Calendar, Row, Col, Card } from "antd";
import propTypes from "prop-types";

const UserDetailsModal = ({ handleOk, handleCancel, id, name, profession }) => {
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
    if (id) {
      users &&
        users.map((user) => {
          if (user.id === id) {
            user.activity_periods.map((time) => {
              if (
                time.start_time.split(" ", 3).join(" ") ===
                moment().format("ll")
              ) {
                setUserTime(time);
              }
              return time;
            });
          }
          return user;
        });
    }
  }, []);
  useEffect(() => {
    setUserTime("");
  }, [userInfoModalVisible]);
  useEffect(() => {
    if (id) {
      const dateArr = userOne
        .filter((ele) => typeof ele === "object")[0]
        .activity_periods.map((time) => {
          return time.start_time.split(" ", 3).join(" ");
        });
      if (!dateArr.includes(date)) {
        setUserTime("");
      }
      users &&
        users.map((user) => {
          if (user.id === id) {
            user.activity_periods.map((time) => {
              if (time.start_time.split(" ", 3).join(" ") === date) {
                setUserTime(time);
              }
              return time;
            });
          }
          return user;
        });
    }
  }, [date]);
  const userOne =
    users &&
    users.map((user) => {
      if (id) {
        if (user.id === id) {
          user.activity_periods.map((time) => {
            return time.start_time.split(" ", 3).join(" ");
          });
        }
      }
      return user;
    });

  return (
    <div>
      <Modal
        title="User Details"
        visible={userInfoModalVisible}
        onOk={handleOk}
        width={800}
        onCancel={handleCancel}
        destroyOnClose={true}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Close
          </Button>,
        ]}
      >
        <Row>
          <Col xs={{ span: 22, offset: 1 }} sm={{ span: 12 }} md={{ span: 10 }}>
            <div className="site-calendar-demo-card marginBottom-1">
              <Calendar fullscreen={false} onChange={onPanelChange} />
            </div>
          </Col>
          <Col
            xs={{ span: 24, offset: 1 }}
            sm={{ span: 10, offset: 1 }}
            md={{ span: 12 }}
          >
            <Card style={{ minHeight: 322 }}>
              <p
                style={{ fontSize: 24, fontWeight: 800, letterSpacing: ".5px" }}
              >
                {name}
                <p style={{ fontSize: 14, fontWeight: 200 }}>{profession}</p>
              </p>
              {userTime ? (
                <span style={{ fontSize: 16, fontWeight: 600 }}>
                  Started at:&nbsp;
                  <span style={{ fontSize: 16, fontWeight: "lighter" }}>
                    {userTime && userTime.start_time}
                  </span>
                </span>
              ) : (
                <span>
                  No activity found! Please check&nbsp;
                  <span style={{ fontSize: 16, fontWeight: 600 }}>
                    another date
                  </span>
                </span>
              )}
              <br />
              {userTime ? (
                <span style={{ fontSize: 16, fontWeight: 600 }}>
                  End at: &nbsp;
                  <span style={{ fontSize: 16, fontWeight: "lighter" }}>
                    {userTime && userTime.end_time}
                  </span>
                </span>
              ) : (
                ""
              )}
            </Card>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

UserDetailsModal.propTypes = {
  modalVisible: propTypes.bool,
  handleOk: propTypes.func,
  handleCancel: propTypes.func,
  id: propTypes.string,
  name: propTypes.string,
  profession: propTypes.string,
};

export default UserDetailsModal;
