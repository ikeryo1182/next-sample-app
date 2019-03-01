import { mount } from "enzyme";
import * as React from "react";

import CustomHead from "../../src/components/head";

describe("CustomHead", () => {
  it("test", () => {
    mount(<CustomHead />);
    expect(1).toBe(1);
  });
});
