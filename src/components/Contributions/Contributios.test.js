import React from "react";
import Contributions from "./Contributions";
import { shallow } from "enzyme";

const data = [
  {
    date: "2018-12-31",
    count: 0,
    color: "#ebedf0",
    intensity: 0
  },
  {
    date: "2018-12-30",
    count: 0,
    color: "#ebedf0",
    intensity: 0
  },
  {
    date: "2018-12-29",
    count: 0,
    color: "#123123",
    intensity: 0
  }
];

describe("Contributions", () => {
  it("renders correclty", () => {
    const wrapper = shallow(<Contributions contributions={data} />);
    expect(wrapper.find('.square').length).toBe(data.length);
  });
});
