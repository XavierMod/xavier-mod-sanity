const {isFuture} = require('date-fns')


const {format} = require('date-fns')

async function createBlogPostPages (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    query {
      projects: allSanityProject(sort: { fields: [date], order: ASC }) {
        edges {
          node {
            title
            id
            slug
            masterFeaturedProject
            date
            typeTags {
              typeID
            }
            descriptionShort
            _rawLinks
            _rawDescription
            _rawProjectBody
            featuredImage {
                asset {
                    fluid {
                      src
                    }
                }
            }
            _rawProjectAdditionalInfo
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.projects || {}).edges || []

  postEdges
    .forEach((edge, index) => {
      const {id, slug = {}, publishedAt} = edge.node
      const path = `/projects/${slug}/`

      createPage({
        path,
        component: require.resolve('./src/templates/project-template.js'),
        context: {
          slug: slug
        }
      })
    })
}

exports.createPages = async ({graphql, actions}) => {
  await createBlogPostPages(graphql, actions)
}
