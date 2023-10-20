import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';
import { MdxFile, Folder, PageMapItem, FrontMatter, PageOpts, Page } from 'nextra';
export { FilterMdxPages, FilterPageType, MDXComponents, SortBy, SortOrder, paginateMdxPages, sortMdxPages } from './libs.cjs';
export { useConfig, usePageOpts } from './hooks.cjs';
import 'nextra/dist/types-fa5ec8b0';

type NavItemProps = {
    route: string;
    styles?: {};
    children?: React.ReactNode;
};
/**
 * NavItem component creates a navigation link element wrapped in a list item `li`
 * @param param0
 * @returns
 */
declare const NavItem: ({ route, styles, children, ...props }: NavItemProps) => react_jsx_runtime.JSX.Element;
type NavProps = {
    children?: React.ReactNode;
    styles?: {};
};
/**
 * Nav component creates a navigation element
 * @param param0
 * @returns
 */
declare const Nav: {
    ({ children, styles, ...props }: NavProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type Kind = "Meta" | "MdxPage" | "Folder";
interface Meta {
    index: string;
    another: string;
    advanced: string;
    about: {
        title: string;
        type: string;
    };
    contact: {
        title: string;
        type: string;
        href: string;
        newWindow: boolean;
    };
    kind: "Meta";
}
type Data = (Meta | MdxFile | Folder | PageMapItem) & {
    kind: Kind;
};
interface Brand {
    brand?: {
        url?: string;
        logo?: React.ReactNode;
    };
}
interface NavbarProps extends Brand {
    styles?: {};
    data: Data[];
}
declare const Navigation: React.FC<NavbarProps>;

type NavListTypes = {
    pages?: MdxFile[];
    styles?: {};
} & FrontMatter;
declare const NavList: {
    ({ pages, styles, ...props }: NavListTypes): react_jsx_runtime.JSX.Element | null;
    displayName: string;
};

interface BrandTypes {
    url: string;
    logo: React.ReactNode;
}
declare const NavBrand: ({ url, logo }: BrandTypes) => react_jsx_runtime.JSX.Element;

type MainProps = {
    children: React.ReactNode;
    sideBar?: React.ReactNode;
    styles?: {};
    classes?: string;
};
/**
 * The main content section of a page.
 * @param children - The content to be displayed in the main section.
 * @param sideBar - The content to be displayed in the sidebar section.
 * @param styles - Additional styles to be applied to the main section.
 * @param classes - Additional classes to be applied to the main section.
 * @example <PageMain>Content</PageMain>
 * @example <PageMain sideBar={<Sidebar/>}>Content</PageMain>
 * @returns The main content section of a page.
 */
declare const PageMain: {
    ({ children, sideBar, styles, classes }: MainProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

/** set types  */
interface HeaderProps {
    title?: React.ReactNode;
    link?: string;
    styles?: {};
    linkLabel?: React.ReactNode;
    description?: React.ReactNode;
    children?: React.ReactNode;
}
type BaseProps = {
    children: React.ReactNode;
};
declare const HeaderBase: ({ styles, children, ...props }: HeaderProps) => react_jsx_runtime.JSX.Element;
declare function DefaultHeader({ title, link, linkLabel, description, }: HeaderProps): react_jsx_runtime.JSX.Element;
declare const PageHeader: {
    ({ title, link, linkLabel, description, styles, children, }: HeaderProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

/**
 * Props for the PageFooter component
 */
type ThemeFooterProps = {
    children?: React.ReactNode;
    copyInfo?: string;
    orgName?: string;
    styles?: {};
};
/**
 * The PageFooter component
 * @param orgName The name of the organization
 * @param copyInfo The copy information to display
 * @param styles The styles to apply to the component
 * @param children The child components to render
 * @example <PageFooter copyInfo="All rights reserved" orgName="My Org" />
 * @example <PageFooter copyInfo="All rights reserved" orgName="My Org"><p>Thank you for visiting our website! If you have any questions or comments, please don't hesitate to contact us.</p></PageFooter>
 * @returns The rendered PageFooter component
 */
declare const PageFooter: {
    ({ orgName, copyInfo, styles, children, ...props }: ThemeFooterProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type PageProps = {
    children: React.ReactNode;
    styles?: {};
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    author?: string;
};
declare const PG: {
    ({ children }: Partial<PageProps>): react_jsx_runtime.JSX.Element;
    /**
     * Renders the header section of the page
     * @param {string} title - The title of the header
     * @param {object} styles - The styles to apply to the header
     * @param {React.ReactNode} children - The children to render inside the header
     * @param {PageProps} props - The page props object
     * @returns {JSX.Element} - The rendered header section component
     */
    Header: ({ title, styles, children, ...props }: Partial<PageProps>) => JSX.Element;
    /**
     * Renders the main section of the page
     * @param {React.ReactNode} children - The children to render inside the main section
     * @param {object} styles - The styles to apply to the main section
     * @param {PageProps} props - The page props object
     * @returns {JSX.Element} - The rendered main section component
     */
    Main: ({ children, styles, ...props }: Partial<PageProps>) => JSX.Element;
    /**
     * Renders the footer section of the page
     * @param {ThemeFooterProps} props - The props object containing the copyInfo, orgName, styles, and children
     * @example <Page.Footer copyInfo="© 2021" orgName="My Org" />
     * @returns {JSX.Element} - The rendered footer section component
     *
     */
    Footer: ({ copyInfo, orgName, styles, children, ...props }: ThemeFooterProps) => JSX.Element;
    /**
     * Renders the nav section of the page
     * @param {React.ReactNode} children - The children to render inside the nav section
     * @param {object} styles - The styles to apply to the nav section
     * @param {PageProps} props - The page props object
     * @returns {JSX.Element} - The rendered nav section component
     * @example
     * <Page.Nav>
     *  <Nav />
     * </Page.Nav>
     * @example
     * <Page.Nav styles={{ backgroundColor: "red" }}>
     * <Nav />
     * </Page.Nav>
     */
    Nav: ({ children, styles, ...props }: Partial<PageProps>) => JSX.Element;
};
/**
 * Renders the page header component
 * @param {string} title - The title of the header
 * @param {object} styles - The styles to apply to the header
 * @param {React.ReactNode} children - The children to render inside the header
 * @param {PageProps} props - The page props object
 * @returns {JSX.Element} - The rendered page header component
 */
declare const HeaderSection: ({ title, styles, children, ...props }: Partial<PageProps>) => JSX.Element;
/**
 * Renders the main section of the page
 * @param {React.ReactNode} children - The children to render inside the main section
 * @param {object} styles - The styles to apply to the main section
 * @param {PageProps} props - The page props object
 * @returns {JSX.Element} - The rendered main section component
 */
declare const MainSection: ({ children, styles, ...props }: Partial<PageProps>) => JSX.Element;
/**
 * Renders the footer section of the page
 * @param {ThemeFooterProps} props - The props object containing the copyInfo, orgName, styles, and children
 * @returns {JSX.Element} - The rendered footer section component
 */
declare const FooterSection: ({ copyInfo, orgName, styles, children, ...props }: ThemeFooterProps) => JSX.Element;
declare const NavSection: ({ children, styles, ...props }: Partial<PageProps>) => JSX.Element;

/**
 * Props for the Landmark components
 */
interface LandmarkProps {
    children: React.ReactNode;
    styles?: {};
}
/**
 * Header component
 * @param styles - styles for the header
 * @param children - children of the header
 * @param props - additional props for the header
 * @returns a header element with children wrapped in a section element
 */
declare const Header: ({ styles, children, ...props }: LandmarkProps) => react_jsx_runtime.JSX.Element;
/**
 * Main component
 * @param styles - styles for the main element
 * @param children - children of the main element
 * @param props - additional props for the main element
 * @returns a main element with children
 */
declare const Main: ({ children, styles, ...props }: LandmarkProps) => react_jsx_runtime.JSX.Element;
/**
 * Footer component
 * @param styles - styles for the footer element
 * @param children - children of the footer element
 * @param props - additional props for the footer element
 * @returns a footer element with children wrapped in a section element
 */
declare const Footer: ({ children, styles, ...props }: LandmarkProps) => react_jsx_runtime.JSX.Element;
/**
 * Aside component
 * @param styles - styles for the aside element
 * @param children - children of the aside element
 * @param props - additional props for the aside element
 * @returns an aside element with children wrapped in a section element
 */
declare const Aside: ({ children, styles, ...props }: LandmarkProps) => react_jsx_runtime.JSX.Element;
/**
 * Section component
 * @param styles - styles for the section element
 * @param children - children of the section element
 * @param props - additional props for the section element
 * @returns a section element with children
 */
declare const Section: ({ children, styles, ...props }: LandmarkProps) => react_jsx_runtime.JSX.Element;
/**
 * Article component
 * @param styles - styles for the article element
 * @param children - children of the article element
 * @param props - additional props for the article element
 * @returns an article element with children
 */
declare const Article: ({ children, styles, ...props }: LandmarkProps) => react_jsx_runtime.JSX.Element;

type listProps = Pick<PageOpts, "pageMap">;
type PostsListProps = {
    showDescription?: boolean;
    elm?: "h2" | "h3" | "h4" | "h5" | "h6";
    as?: "article" | "li";
    postList?: MdxFile[];
};
declare const PostsList: {
    ({ showDescription, elm, as, postList, ...props }: PostsListProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

/**
 * An object representing the data required to render a list of pages.
 */
type PageListTypes = {
    /**
     * The group of pages to render.
     */
    group?: string;
    /**
     * An array of pages to render.
     */
    data: Page[];
    /**
     * An optional object containing custom styles to apply to the component.
     */
    styles?: {};
};
declare const PageList: ({ data, styles, ...props }: PageListTypes) => react_jsx_runtime.JSX.Element | null;

/**
 * @typedef TocTypes
 * @property {Array<any>} items
 * @property {React.ReactNode | string} children
 * @property {string} className
 */
type TocTypes = {
    items: Array<any>;
    children?: React.ReactNode | string;
    styles?: {};
    dataStyles?: string;
};
/**
 * @typedef TocItemTypes
 * @property {number} depth
 * @property {string} value
 * @property {string} id
 */
type TocItemTypes = {
    depth: number;
    value: string;
    id: string;
};
declare const Toc: {
    ({ items, styles, children, dataStyles }: TocTypes): react_jsx_runtime.JSX.Element | null;
    displayName: string;
};
declare const TocItems: ({ depth, value, id }: TocItemTypes) => react_jsx_runtime.JSX.Element;

export { Article, Aside, BaseProps, Brand, BrandTypes, DefaultHeader, Footer, FooterSection, Header, HeaderBase, HeaderProps, HeaderSection, LandmarkProps, Main, MainProps, MainSection, Nav, NavBrand, NavItem, NavItemProps, NavList, NavListTypes, NavProps, NavSection, Navigation, PG, PageFooter, PageHeader, PageList, PageListTypes, PageMain, PageProps, PostsList, PostsListProps, Section, ThemeFooterProps, Toc, TocItemTypes, TocItems, TocTypes, listProps };
