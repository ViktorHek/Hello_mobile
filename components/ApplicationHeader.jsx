import React from "react";
import { StyleSheet} from "react-native";
import { Appbar } from "react-native-paper";
import { useSelector } from "react-redux";

const applicationHeader = () => {
  const { appTitle } = useSelector((state) => state);
  return (
    <Appbar.Header>
      <Appbar.Content title={appTitle} />
    </Appbar.Header>
  );
};

export default applicationHeader;

const styles = StyleSheet.create({});
