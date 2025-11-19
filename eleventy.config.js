// import { IdAttributePlugin } from "@11ty/eleventy"
import { minify } from "terser";
import YAML from "yaml";
import { format } from "date-fns"

export default async function(eleventyConfig) {
    // Folders
    eleventyConfig.setInputDirectory("./pages/");
    eleventyConfig.setDataDirectory("../data/");
    eleventyConfig.setLayoutsDirectory("../layouts/");

    // Resources
    eleventyConfig.addPassthroughCopy("./media/")
    eleventyConfig.addPassthroughCopy("./robots.txt")
    eleventyConfig.addPassthroughCopy("./data/images.json")

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

    eleventyConfig.addFilter("head", (arr, num) => {
        return num ? arr.slice(0, num) : arr;
    });

    eleventyConfig.addFilter("headafter", (arr, num) => {
        return num ? arr.slice(num) : arr;
    });

    eleventyConfig.addFilter('date', function(date, dateFormat) {
        return format(date, dateFormat)
    })

    eleventyConfig.addDataExtension("yaml", (contents) => YAML.parse(contents));
};
