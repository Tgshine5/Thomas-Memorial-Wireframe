export default function (eleventyConfig){
    eleventyConfig.addPassthroughCopy("Styles/");
    eleventyConfig.addPassthroughCopy("images/");
    eleventyConfig.addPassthroughCopy("Scripts/");}