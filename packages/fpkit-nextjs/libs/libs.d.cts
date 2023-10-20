import * as react_jsx_runtime from 'react/jsx-runtime';
import { PageMapItem, MdxFile } from 'nextra';

type ComponentTypes = {
    [key: string]: any;
    children: React.ReactNode | string;
};
declare const MDXComponents: {
    h1: ({ children }: ComponentTypes) => react_jsx_runtime.JSX.Element;
    p: ({ children }: ComponentTypes) => react_jsx_runtime.JSX.Element;
    table: ({ children }: ComponentTypes) => react_jsx_runtime.JSX.Element;
};

type SortBy = "date" | "name";
type SortOrder = "ascending" | "descending";
/**
 * Filters an array of pages and returns only the MDX pages.
 * @param pages An array of pages.
 * @param sortBy The field to sort by.
 * @param sortOrder The sort order.
 * @returns An array of MDX pages.
 */
declare function FilterMdxPages(pages: PageMapItem[], sortBy?: SortBy, sortOrder?: SortOrder): MdxFile[];
/**
 * Filter a list of pages and return only the pages with the specified frontMatter type
 * @param pages array of pages
 * @param type the type defined in the frontmatter
 * @returns
 */
declare function FilterPageType(pages: PageMapItem[], type?: string): MdxFile[];
declare function sortMdxPages(mdxPages: MdxFile[], sortBy: SortBy, sortOrder: SortOrder): void;
declare function paginateMdxPages(mdxPages: MdxFile[], limit: number, currentPage: number): {
    totalPages: number;
    currentPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    pages: MdxFile[];
};

export { FilterMdxPages, FilterPageType, MDXComponents, SortBy, SortOrder, paginateMdxPages, sortMdxPages };
