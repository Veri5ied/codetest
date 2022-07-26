import Organizations from "./data/organizations.json";
import Projects from "./data/projects.json";
import Users from "./data/users.json";

// Fork this sandbox when begninning your work. After completion, send a link to your sandbox
// and not a zip file.
//
// The goal is to return an Object with a list of Organization
// with the key as the id of the organization
// like this:
//
// {
//   1: {
//     id: 1,
//     name: "Organization 1",
//     projects: [
//       {
//         id: 1,
//         name: 'project 1'
//       }
//     ],
//     users: [
//       {
//         id: 1,
//         name: "user 1"
//       }
//     ]
//   }
// }

export const formatOrganizations = () => {
  // Your code here
  const organizations = {};
  Organizations.forEach((organization) => {
    organizations[organization.id] = {
      id: organization.id,
      name: organization.name,
      projects: [],
      users: []
    };
  });
  Projects.forEach((project) => {
    organizations[project.organizationId].projects.push({
      id: project.id,
      name: project.name
    });
  });
  Users.forEach((user) => {
    organizations[user.id].users.push({
      id: user.id,
      name: user.name
    });
  });
  return organizations;
  // return [];
};

console.log(formatOrganizations());
