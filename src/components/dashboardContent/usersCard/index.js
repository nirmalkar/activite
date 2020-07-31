import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Avatar, Skeleton, Row, Col, Button } from "antd";

import { getUsers, userInfoModal } from "../../../appRedux/action/userAction";
import UserDetailsModal from "../../userDetailsModal";

const { Meta } = Card;

const UserCards = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.userData);
  const { userInfoModalVisible } = useSelector(
    (state) => state.visibleUserInfoModal
  );
  const [id, setId] = useState("");
  const showModal = (id) => {
    setId(id);
    dispatch(userInfoModal(!userInfoModalVisible));
  };
  const handleOk = (e) => {
    dispatch(userInfoModal(!userInfoModalVisible));
  };

  const handleCancel = (e) => {
    dispatch(userInfoModal(!userInfoModalVisible));
  };
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  useEffect(() => {}, [userInfoModalVisible]);
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      {users &&
        users.map((user, i) => {
          return (
            <Col
              className="gutter-row marginBottom-1"
              span={{ xs: 24, sm: 12, md: 6, lg: 6 }}
              key={i}
            >
              <Card style={{ width: 250, margin: "0 auto", cursor: "pointer" }}>
                <Skeleton loading={loading} avatar active></Skeleton>
                <Meta
                  avatar={<Avatar src={user.avatar} />}
                  title={user.real_name}
                  description={user.profession}
                />
              </Card>
              <Button block={true} onClick={() => showModal(user.id)}>
                Show User Details
              </Button>
            </Col>
          );
        })}
      <UserDetailsModal
        handleOk={handleOk}
        handleCancel={handleCancel}
        id={id}
      />
    </Row>
  );
};

export default UserCards;
