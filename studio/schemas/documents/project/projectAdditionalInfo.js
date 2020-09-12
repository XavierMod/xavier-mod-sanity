export default {
    name: 'projectAdditionalInfo',
    type: 'object',
    fields: [
        {
            title: 'Development Mode',
            description: 'Is this project still being developed?',
            name: 'inDevelopment',
            type: 'boolean'
        },
        {
            title: 'Age Warning',
            description: 'Adds an age warning indicator.',
            name: 'ageWarning',
            type: 'boolean'
        },
    ]
  }