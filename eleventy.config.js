// import { IdAttributePlugin } from "@11ty/eleventy"
import { minify } from "terser";
import YAML from "yaml";
import { format } from "date-fns"

export default async function(eleventyConfig) {
    // Folders
    eleventyConfig.setInputDirectory("./pages/");

    // Resources
    eleventyConfig.addPassthroughCopy("./media/")
    eleventyConfig.addPassthroughCopy("./robots.txt")
    eleventyConfig.addPassthroughCopy("./pages/_data/images.json")

    // Watch
    eleventyConfig.addWatchTarget("./_includes/**/*")

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

    eleventyConfig.addFilter("firstWord", (str) => {
        return str.split(" ")[0]
    })

    eleventyConfig.addDataExtension("yaml", (contents) => YAML.parse(contents));
};
