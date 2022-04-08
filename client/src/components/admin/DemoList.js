import React from "react";
import { useQuery } from "@apollo/client";
import { Button } from "antd";
import { SERVER_PEGINATION } from "../../queries/queries";

export const DemoList = () => {
  const { loading, data, fetchMore } = useQuery(SERVER_PEGINATION, {
    variables: {
      offset: 0,
      limit: 1,
    },
  });
  return (
    <Button
      onClick={() =>
        fetchMore({
          variables: {
            offset: data.peginationUser.length,
          },
        })
      }
    >
      More
    </Button>
  );
};
