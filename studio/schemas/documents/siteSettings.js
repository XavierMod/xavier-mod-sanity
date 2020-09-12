export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describing my site for search engines and social media.'
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Keywords that describe my site.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'aboutTitle',
      type: 'string',
      title: 'About Title',
      description: 'Main title displayed on the About page.'
    },
    {
      name: 'contentDescription',
      title: 'About Description',
      type: 'array',
      description: 'Description blocks displayed on the About page.',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      name: 'experience',
      title: 'About Experience',
      type: 'array',
      description: 'Experience blocks displayed on the About page.',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      name: 'education',
      title: 'About Education',
      type: 'array',
      description: 'Education blocks displayed on the About page.',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      title: 'Main Image',
      name: 'mainImage',
      type: 'image',
    }
  ]
}
