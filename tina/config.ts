import { defineConfig } from "tinacms";

// Netlify uses NETLIFY_BRANCH. Keep fallbacks for other providers/local.
const branch =
  process.env.NETLIFY_BRANCH ||
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

if (!process.env.TINA_CLIENT_ID) {
  throw new Error("Missing required env var: TINA_CLIENT_ID");
}

if (!process.env.TINA_TOKEN) {
  throw new Error("Missing required env var: TINA_TOKEN");
}

export default defineConfig({
  branch,

  // From https://tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // From https://tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },

  // See docs on content modeling: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        path: "src/content/blog",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Publication Date",
          },
          {
            type: "datetime",
            name: "updatedDate",
            label: "Updated Date",
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
