import Stars from 'react-icons/lib/md/stars'

export default {
    name: 'types',
    type: 'document',
    title: 'Project Types',
    icon: Stars,
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Type Title',
        description: 'e.g. Front-End Development'
      },
      {
        name: 'titleNavBar',
        type: 'string',
        title: 'Type Display Title - Nav Bar',
        description: 'e.g. Front-End Dev'
      },
      {
        title: 'Position',
        name: 'position',
        description: 'Sets an order on the projects navbar',
        type: 'number'
      },
      {
        name: 'typeID',
        type: 'string',
        title: 'Type ID',
        description: 'e.g. front-end-development'
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description'
      },
      {
        name: 'percentage',
        type: 'number',
        title: 'Percentage'
      }
    ]
  }
  