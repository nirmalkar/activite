import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Avatar, Skeleton, Row, Col } from "antd";

import { getUsers } from "../../../appRedux/action/userAction";

const { Meta } = Card;

const UserCards = (props) => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.userData);
  console.log(users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
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
            </Col>
          );
        })}
    </Row>
  );
};

export default UserCards;
