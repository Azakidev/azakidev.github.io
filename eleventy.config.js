// import { IdAttributePlugin } from "@11ty/eleventy"
import { minify } from "terser";

export default async function(eleventyConfig) {
    // Folders
    eleventyConfig.setInputDirectory("pages/");
    eleventyConfig.setLayoutsDirectory("../layouts/");
    eleventyConfig.setOutputDirectory("./_build");

    eleventyConfig.addPassthroughCopy("./media/")
    eleventyConfig.addPassthroughCopy("./sitemap.xml")
    eleventyConfig.addPassthroughCopy("./robots.txt")

    eleventyConfig.addWatchTarget("./src/*")
    eleventyConfig.addWatchTarget("./styles/*")

    // Plugins
    // eleventyConfig.addPlugin(IdAttributePlugin);

    eleventyConfig.addFilter("jsmin", async function(code) {
        try {
            const minified = await minify(code);
            return minified.code;
        } catch (err) {
            console.error("Terser error: ", err);
            // Fail gracefully.
            return code;
        }
    });
};
