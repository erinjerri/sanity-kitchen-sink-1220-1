export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5fc68c6f7462ce258668fec8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-1220-1-studio',
                  apiId: 'e1b05a85-b5b9-408c-80b2-3a442512f2b2'
                },
                {
                  buildHookId: '5fc68c6f10d925271969edce',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-1220-1',
                  apiId: '8145562b-5747-47e7-9058-f4f233954fd7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erinjerri/sanity-kitchen-sink-1220-1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-1220-1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
