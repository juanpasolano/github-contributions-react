import React from "react";
import App from "./App";
import jest from 'jest-mock';
import { shallow } from "enzyme";

describe("App", () => {
  beforeEach(function() {
    global.fetch = jest.fn().mockImplementation(() => {
      var p = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          Id: "123",
          json: function() {
            return { Id: "123" };
          }
        });
      });
      return p;
    });
  });
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(global.fetch).toBeCalled();
  });
});
