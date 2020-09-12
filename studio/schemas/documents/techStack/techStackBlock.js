import Computer from 'react-icons/lib/md/computer'

export default {
    name: 'techStackBlock',
    type: 'document',
    title: 'Tech Stack Block',
    icon: Computer,
    fields: [
        {
            title: 'Tech Stack Title',
            description: 'e.g. Gatsby, etc.',
            name: 'title',
            type: 'string'
        },
        {
          title: 'Icon',
          name: 'icon',
          type: 'image',
          options: {
            hotspot: true // <-- Defaults to false
          }
        },
        {
            name: 'typeTags',
            type: 'array',
            description: 'Add a Tech Stack category to this type.',
            of: [
              {
                title: 'Select a type tag',
                name: 'category',
                type: 'reference',
                to: [{type: 'types'}]
              }
            ]
        },
        {
            name: 'percentage',
            type: 'number',
            title: 'Percentage'
        },
        {
          name: 'url',
          type: 'url',
          title: 'URL'
        },
        {
          name: 'focusing',
          type: 'boolean',
          title: 'Current Focus',
          description: 'Am I currently focusing on this technology?'
        },
        {
          name: 'pending',
          type: 'boolean',
          title: 'Pending Technology',
          description: 'Do I plan on learning this technology in a short term future?'
        },
        {
          name: 'favourite',
          type: 'boolean',
          title: 'Favourite Technology',
          description: 'Is this technology one of my favourites?'
        }
    ]
  }