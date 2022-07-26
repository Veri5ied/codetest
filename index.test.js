import { formatOrganizations } from "./index";

describe("test formatOrganizations", () => {
  const formattedOrg = formatOrganizations();

  it("check number of organization", () => {
    expect(Object.keys(formattedOrg).length).toEqual(3);
  });

  it("check first organization", () => {
    const org = Object.values(formattedOrg)[0];
    expect(org.name).toEqual("Organization 2");
    expect(org.projects.length).toEqual(3);
    expect(org.users.length).toEqual(3);
  });

  it("check second organization", () => {
    const org = Object.values(formattedOrg)[1];
    expect(org.name).toEqual("Organization 3");
    expect(org.projects.length).toEqual(1);
    expect(org.users.length).toEqual(1);
  });

  it("check third organization", () => {
    const org = Object.values(formattedOrg)[2];
    expect(org.name).toEqual("Organization 5");
    expect(org.projects.length).toEqual(1);
    expect(org.users.length).toEqual(2);
  });
});
