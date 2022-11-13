export default {
  widgets: [
    { name: `structure-menu` },
    {
      name: `project-info`,
      options: {
        __experimental_before: [
          // {
          //   name: "netlify",
          //   options: {
          //     description:
          //       "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
          //     sites: [
          //       {
          //         buildHookId:
          //           "6370742fe98b38757247ffa6",
          //         title: "Sanity Studio",
          //         name: "sanity-minecraft-blog-studio-wkpotw24",
          //         apiId: "01c1911c-2f23-4e16-bb12-8a651d8faa7e",
          //       },
          //       {
          //         buildHookId: "",
          //         title: "Blog Website",
          //         name: "",
          //         apiId: "",
          //       },
          //     ],
          //   },
          // },
        ],
        data: [
          {
            title: `GitHub repo`,
            value:
              `https://github.com/Chihr-max/sanity-minecraft-blog`,
            category: `Code`,
          },
          {
            title: `Frontend`,
            value: ``,
            category: `apps`,
          },
        ],
      },
    },
    { name: `project-users`, layout: { height: `auto` } },
    {
      name: `document-list`,
      options: {
        title: `Recently-added blocks`,
        order: `_createdAt desc`,
        types: [`minecraftBlock`],
      },
      layout: { width: `medium` },
    },
  ],
}
