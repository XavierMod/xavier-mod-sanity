export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f49973ea0882916057b0859',
                  title: 'Sanity Studio',
                  name: 'xavier-mod-sanity-studio',
                  apiId: 'ee1f3c9e-d355-4c3e-b67e-ed58a7f25ab4'
                },
                {
                  buildHookId: '5f49973e15bbe42ec29c8b5d',
                  title: 'Blog Website',
                  name: 'xavier-mod-sanity',
                  apiId: 'bdc26f32-374f-41c3-971c-a618b70d60bf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/XavierMod/xavier-mod-sanity',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://xavier-mod-sanity.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
