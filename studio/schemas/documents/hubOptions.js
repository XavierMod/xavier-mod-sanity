import NowWidgets from 'react-icons/lib/md/now-widgets'

export default {
    name: 'hubOption',
    type: 'document',
    title: 'Hub Option',
    icon: NowWidgets,
    __experimental_actions: ['update', 'create', 'delete', 'publish'],
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Hub Option Title',
        description: 'e.g. My Projects'
      },
      {
        title: 'Hub Option Image',
        name: 'image',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        }
      },
      {
        name: 'slug',
        type: 'string',
        title: 'Hub Option Slug',
        description: 'e.g. projects (Do not include any /)'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Hub Option Description',
      },
      {
        name: 'tags',
        type: 'array',
        title: 'Hub Option Tags',
        description: 'e.g. New Posts, etc.',
        of: [{type: 'string'}],
        options: {
          layout: 'tags'
        }
      },
      {
        title: 'Coming Soon',
        description: 'This hub option will be displayed but will also be unavailable.',
        name: 'comingSoon',
        type: 'boolean'
      }
    ]
  }
  