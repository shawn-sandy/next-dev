import * as nextra_dist_types_fa5ec8b0 from 'nextra/dist/types-fa5ec8b0';
import { PageMapItem, NextraThemeLayoutProps } from 'nextra';
import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

type optsTypes = {
    options: Pick<NextraThemeLayoutProps, "pageOpts">;
};
declare const usePageOpts: ({ options }: optsTypes) => {
    contentDirs: never[];
    postList: never[];
    posts: never[];
    pageList: never[];
    latestPosts: never[];
    pages: never[];
    dirList?: undefined;
} | {
    dirList: PageMapItem[];
    postList: PageMapItem[];
    pageList: PageMapItem[];
    latestPosts: nextra_dist_types_fa5ec8b0.b[];
    pages: nextra_dist_types_fa5ec8b0.b[];
    contentDirs?: undefined;
    posts?: undefined;
};

type themeConfig = {
    [key: string]: any;
};
type ThemeOptions = {
    config: themeConfig | {};
    children: React.ReactNode;
};
declare const useConfig: ({ config }: ThemeOptions) => {
    components: {
        h1: (children: React.ReactNode) => react_jsx_runtime.JSX.Element;
    };
};

export { useConfig, usePageOpts };
