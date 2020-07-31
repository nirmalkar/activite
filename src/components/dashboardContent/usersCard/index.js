import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Avatar, Skeleton, Row, Col, Button } from "antd";

import { getUsers, userInfoModal } from "../../../appRedux/action/userAction";
import UserDetailsModal from "../../userDetailsModal";

const { Meta } = Card;

const UserCards = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.userData);
  const { searchUser } = useSelector((state) => state.userSearch);
  const { userInfoModalVisible } = useSelector(
    (state) => state.visibleUserInfoModal
  );
  const [userData, setUserData] = useState("");
  const showModal = (id, name, profession) => {
    setUserData({ id, name, profession });
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
