export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6216250c7fc1984609039dc0",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-isnx2e8q",
                  apiId: "47d75769-3a16-4417-8b81-2b94a22119b4",
                },
                {
                  buildHookId: "6216250c13478a2ff79f400e",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-bgr8873n",
                  apiId: "62d7297f-22f8-4589-bd64-edee062eb2b2",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/frozenskys/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-bgr8873n.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
