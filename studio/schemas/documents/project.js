import StarHalf from 'react-icons/lib/md/star-half'

export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    icon: StarHalf,
    __experimental_actions: ['update', 'create', 'delete', 'publish'],
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Project Title',
        description: 'e.g. The Vegan Burger: Ultimate Edition'
      },
      {
        name: 'slug',
        type: 'string',
        title: 'Project Slug',
        description: 'e.g. the-vegan-burger-edition (Do not include any /)'
      },
      {
        title: 'Master Featured Project Mode',
        description: 'There can only be one Master Featured Project, will appear on All and New.',
        name: 'masterFeaturedProject',
        type: 'boolean'
      },
      {
        name: 'description',
        title: 'Project Description',
        type: 'array',
        of: [
          {
            type: 'block'
          }
        ]
      },
      {
        name: 'descriptionShort',
        type: 'string',
        title: 'Project Description Short',
        description: 'e.g. Short Description'
      },
      {
        title: 'Project Date',
        name: 'date',
        type: 'date'
      },
      {
        title: 'Project Featured Image',
        name: 'featuredImage',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        }
      },
      {
        name: 'typeTags',
        type: 'array',
        description: 'Note: If this project is a featured one, add the Featured tag first.',
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
        name: 'techStackTags',
        type: 'array',
        title: 'Project Tech Stack Tags',
        description: 'e.g. Gatsby, PHP, etc.',
        of: [{type: 'string'}],
        options: {
          layout: 'tags'
        }
      },
      {
        name: 'client',
        type: 'string',
        title: 'Project Client',
        description: 'e.g. Pinfluencer, Karmoon, Brunel University...'
      },
      {
        name: 'clientURL',
        type: 'string',
        title: 'Project Client URL',
      },
      {
        name: 'projectBody',
        title: 'projectBody',
        type: 'projectBody'
      },
      {
        name: 'links',
        title: 'links',
        type: 'links'
      },
      {
        name: 'projectAdditionalInfo',
        title: 'projectAdditionalInfo',
        type: 'projectAdditionalInfo'
      },
    ]
  }
  