// import { IdAttributePlugin } from "@11ty/eleventy"
import { minify } from "terser";
import YAML from "yaml";

export default async function(eleventyConfig) {
    // Folders
    eleventyConfig.setInputDirectory("./pages/");
    eleventyConfig.setDataDirectory("../_data/");
    eleventyConfig.setLayoutsDirectory("../layouts/");

    // Resources
    eleventyConfig.addPassthroughCopy("./media/")
    eleventyConfig.addPassthroughCopy("./sitemap.xml")
    eleventyConfig.addPassthroughCopy("./robots.txt")
    
    // Watch
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

    eleventyConfig.addDataExtension("yaml", (contents) => YAML.parse(contents));
};
