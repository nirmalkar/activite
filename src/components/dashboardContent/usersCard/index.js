import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Avatar, Skeleton, Row, Col, Button } from "antd";

import { getUsers } from "../../../appRedux/action/userAction";
import UserDetailsModal from "../../userDetailsModal";
import useToggleState from "../../../hooks/useToggleState";

const { Meta } = Card;

const UserCards = () => {
  const [userActModalVisible, setUserActModalVisible] = useToggleState(false);
  const [userData, setUserData] = useState("");
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.userData);
  const { searchUser } = useSelector((state) => state.userSearch);
  const showModal = (id, name, profession) => {
    setUserData({ id, name, profession });
    setUserActModalVisible(!userActModalVisible);
  };
  const handleOk = (e) => {
    setUserActModalVisible(!userActModalVisible);
  };

  const handleCancel = (e) => {
    setUserActModalVisible(!userActModalVisible);
  };
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <Row gutter={[16, 16]} justify="space-around">
      {users &&
        users
          .filter((user) =>
            user.real_name.toLowerCase().includes(searchUser.toLowerCase())
          )
          .map((user, i) => {
            return (
              <Col
                className="gutter-row marginBottom-1"
                span={{ sm: 24, md: 12, lg: 6, xl: 4 }}
                key={i}
              >
                <Card
                  style={{
                    width: 220,
                    height: 130,
                    margin: "auto",
                    cursor: "pointer",
                  }}
                >
                  <Skeleton loading={loading} avatar active></Skeleton>
                  <Meta
                    avatar={<Avatar src={user.avatar} />}
                    title={user.real_name}
                    description={user.profession}
                  />
                </Card>
                <Button
                  block={true}
                  onClick={() =>
                    showModal(user.id, user.real_name, user.profession)
                  }
                >
                  See User Activity
                </Button>
              </Col>
            );
          })}
      <UserDetailsModal
        modalVisible={userActModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        id={userData.id}
        name={userData.name}
        profession={userData.profession}
      />
    </Row>
  );
};

export default UserCards;
