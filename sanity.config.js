import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import schemas from "./sanity-studio/schemas"

const config = defineConfig({
  projectId: "qlaxvdwa",
  dataset: "production",
  title: "Hana Portfolio",
  apiVersion: "2023-08-30",
  basePath: "/sanity-studio",
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config
