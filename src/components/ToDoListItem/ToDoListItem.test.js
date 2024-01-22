import React from "react";
import { shallow } from "enzyme";
import ToDoListItem from "./ToDoListItem";

describe("ToDoListItem", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ToDoListItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
