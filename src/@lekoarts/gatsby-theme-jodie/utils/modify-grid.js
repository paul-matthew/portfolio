import { filterBySlug } from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";

const modifyGrid = (data) => filterBySlug(data, ["/about"]);

export default modifyGrid;
