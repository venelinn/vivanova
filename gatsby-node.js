// const _ = require(`lodash`)
// const Promise = require(`bluebird`)
// const path = require(`path`)
// const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.


// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return new Promise((resolve, reject) => {
//     graphql(
//       `
//         {
//           allContentfulPage(limit: 1000) {
//             edges {
//               node {
//                 id
//                 slug
//                 node_locale
//                 contentful_id
//               }
//             }
//           }
//         }
//       `
//     ).then(result => {
//       if (result.errors) {
//         reject(result.errors)
//       }

//       const pageTemplate = path.resolve(`./src/templates/page.js`)
//       _.each(result.data.allContentfulPage.edges, edge => {
//           const slug = edge.node.slug
//           createPage({
//             path: `/${edge.node.node_locale.split('-')[0]}/${edge.node.slug}/`,
//             component: slash(pageTemplate),
//             context: {
//               id: edge.node.id,
//               contentful_id:  edge.node.contentful_id,
//             },
//           })
//       })
//       resolve()
//     })
//   })
// }
