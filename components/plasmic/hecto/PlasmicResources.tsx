// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jLAmXkGdPPYDvKpL9j3cJd
// Component: C5n9cmwHg6f

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import HectoNav from "../../HectoNav"; // plasmic-import: 1Xqtr1aGys/component
import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: 8N9-WfZSaq/codeComponent
import { CmsRowField } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: w6HdOz-Pcn/codeComponent
import Button from "../../Button"; // plasmic-import: 16yj8MRmRBT/component
import Footer from "../../Footer"; // plasmic-import: Iw1cdeIou4/component

import { useScreenVariants as useScreenVariantskILw5UiAaS1UF } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: kILw5uiAaS1uF/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_hecto.module.css"; // plasmic-import: jLAmXkGdPPYDvKpL9j3cJd/projectcss
import sty from "./PlasmicResources.module.css"; // plasmic-import: C5n9cmwHg6f/css

import ArrowRightsvgIcon from "./icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: g1j_XxrLjbNK/icon

export type PlasmicResources__VariantMembers = {};
export type PlasmicResources__VariantsArgs = {};
type VariantPropType = keyof PlasmicResources__VariantsArgs;
export const PlasmicResources__VariantProps = new Array<VariantPropType>();

export type PlasmicResources__ArgsType = {};
type ArgPropType = keyof PlasmicResources__ArgsType;
export const PlasmicResources__ArgProps = new Array<ArgPropType>();

export type PlasmicResources__OverridesType = {
  root?: p.Flex<"div">;
  hectoNav?: p.Flex<typeof HectoNav>;
  heroHorizontal?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  features?: p.Flex<"section">;
  blogColumn?: p.Flex<"div">;
  cmsDataFetcher?: p.Flex<typeof CmsQueryRepeater>;
  img?: p.Flex<typeof p.PlasmicImg>;
  cmsEntryField?: p.Flex<typeof CmsRowField>;
  outer?: p.Flex<"div">;
  container?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultResourcesProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicResources__RenderFunc(props: {
  variants: PlasmicResources__VariantsArgs;
  args: PlasmicResources__ArgsType;
  overrides: PlasmicResources__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantskILw5UiAaS1UF()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicResources.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicResources.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicResources.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        {true ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"root"}
            data-plasmic-override={overrides.root}
            data-plasmic-root={true}
            data-plasmic-for-node={forNode}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_mixins,
              projectcss.plasmic_tokens,
              sty.root
            )}
          >
            <div className={classNames(projectcss.all, sty.freeBox__uXfUn)}>
              <div className={classNames(projectcss.all, sty.freeBox__jNgxc)}>
                <HectoNav
                  data-plasmic-name={"hectoNav"}
                  data-plasmic-override={overrides.hectoNav}
                  className={classNames("__wab_instance", sty.hectoNav)}
                />

                <div
                  data-plasmic-name={"heroHorizontal"}
                  data-plasmic-override={overrides.heroHorizontal}
                  className={classNames(projectcss.all, sty.heroHorizontal)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___7DL75)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__pwmsv)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___2Bsss
                        )}
                      >
                        <h1
                          className={classNames(
                            projectcss.all,
                            projectcss.h1,
                            projectcss.__wab_text,
                            sty.h1__rZvMn
                          )}
                        >
                          <React.Fragment>
                            <React.Fragment>{""}</React.Fragment>
                            {
                              <h1
                                className={classNames(
                                  projectcss.all,
                                  projectcss.h1,
                                  projectcss.__wab_text,
                                  sty.h1__haaBt
                                )}
                              >
                                <React.Fragment>
                                  <span
                                    className={
                                      "plasmic_default__all plasmic_default__span"
                                    }
                                    style={{
                                      color: "#0506CF",
                                      fontWeight: 700
                                    }}
                                  >
                                    {"Hecto Resources"}
                                  </span>
                                  <React.Fragment>{""}</React.Fragment>
                                  <span
                                    className={
                                      "plasmic_default__all plasmic_default__span"
                                    }
                                    style={{
                                      color: "#FF7C08",
                                      fontWeight: 700
                                    }}
                                  >
                                    {"."}
                                  </span>
                                </React.Fragment>
                              </h1>
                            }
                            <React.Fragment>{""}</React.Fragment>
                          </React.Fragment>
                        </h1>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__xSvDh
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "#0D08FF" }}
                            >
                              {"Hi, I'm "}
                            </span>
                            <React.Fragment>{""}</React.Fragment>
                            {
                              <p.PlasmicLink
                                data-plasmic-name={"link"}
                                data-plasmic-override={overrides.link}
                                className={classNames(
                                  projectcss.all,
                                  projectcss.a,
                                  projectcss.__wab_text,
                                  projectcss.plasmic_default__inline,
                                  sty.link
                                )}
                                component={Link}
                                href={"https://twitter.com/thedudlian" as const}
                                platform={"nextjs"}
                              >
                                <React.Fragment>
                                  <span
                                    className={
                                      "plasmic_default__all plasmic_default__span"
                                    }
                                    style={{ color: "#FF7C08" }}
                                  >
                                    {"Simon"}
                                  </span>
                                </React.Fragment>
                              </p.PlasmicLink>
                            }
                            <React.Fragment>{""}</React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "#0D08FF" }}
                            >
                              {
                                " and I'm building Hecto, the sponsorship platform to support the newsletter creator economy. "
                              }
                            </span>
                            <React.Fragment>{"\n"}</React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "#0D08FF" }}
                            >
                              {""}
                            </span>
                            <React.Fragment>{"\n"}</React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "#0D08FF" }}
                            >
                              {"Read all about the journey here."}
                            </span>
                          </React.Fragment>
                        </div>
                      </p.Stack>
                    </p.Stack>
                  </p.Stack>
                </div>
              </div>
            </div>
            {true ? (
              <section
                data-plasmic-name={"features"}
                data-plasmic-override={overrides.features}
                className={classNames(projectcss.all, sty.features)}
              >
                <div
                  data-plasmic-name={"blogColumn"}
                  data-plasmic-override={overrides.blogColumn}
                  className={classNames(projectcss.all, sty.blogColumn)}
                >
                  <CmsQueryRepeater
                    data-plasmic-name={"cmsDataFetcher"}
                    data-plasmic-override={overrides.cmsDataFetcher}
                    className={classNames("__wab_instance", sty.cmsDataFetcher)}
                    desc={false}
                    emptyMessage={
                      <ph.DataCtxReader>
                        {$ctx => (
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__cYyfa
                            )}
                          >
                            {"No matching published entries found."}
                          </div>
                        )}
                      </ph.DataCtxReader>
                    }
                    filterField={"live" as const}
                    filterValue={"1" as const}
                    forceEmptyState={false}
                    forceLoadingState={false}
                    limit={0 as const}
                    loadingMessage={
                      <ph.DataCtxReader>
                        {$ctx => (
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__lNBhf
                            )}
                          >
                            {"Loading..."}
                          </div>
                        )}
                      </ph.DataCtxReader>
                    }
                    noAutoRepeat={false}
                    noLayout={false}
                    table={"blogArticles" as const}
                    useDraft={false}
                  >
                    <ph.DataCtxReader>
                      {$ctx => (
                        <p.PlasmicLink
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            sty.columns__jWvcx
                          )}
                          component={Link}
                          href={`/resources/${(() => {
                            try {
                              return $ctx.plasmicCmsBlogArticlesItem.data.slug;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return "why-sponsor-a-newsletter";
                              }
                              throw e;
                            }
                          })()}`}
                          platform={"nextjs"}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__mlqV0
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.columns__uy6Cr
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.column__bj2Xg
                                )}
                              >
                                <p.PlasmicImg
                                  data-plasmic-name={"img"}
                                  data-plasmic-override={overrides.img}
                                  alt={""}
                                  className={classNames(sty.img)}
                                  displayHeight={"auto" as const}
                                  displayMaxHeight={"none" as const}
                                  displayMaxWidth={"100%" as const}
                                  displayMinHeight={"0" as const}
                                  displayMinWidth={"0" as const}
                                  displayWidth={"auto" as const}
                                  loading={"lazy" as const}
                                  src={{
                                    src: "/plasmic/hecto/images/component11Png.png",
                                    fullWidth: 500,
                                    fullHeight: 500,
                                    aspectRatio: undefined
                                  }}
                                />
                              </div>
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.column__rkVnd
                                )}
                              >
                                <CmsRowField
                                  data-plasmic-name={"cmsEntryField"}
                                  data-plasmic-override={
                                    overrides.cmsEntryField
                                  }
                                  className={classNames(
                                    "__wab_instance",
                                    sty.cmsEntryField
                                  )}
                                />
                              </div>
                            </div>
                          </div>
                        </p.PlasmicLink>
                      )}
                    </ph.DataCtxReader>
                  </CmsQueryRepeater>
                </div>
              </section>
            ) : null}
            {true ? (
              <section
                className={classNames(projectcss.all, sty.columns___65Mi9)}
              >
                <div
                  data-plasmic-name={"outer"}
                  data-plasmic-override={overrides.outer}
                  className={classNames(projectcss.all, sty.outer)}
                >
                  <div
                    data-plasmic-name={"container"}
                    data-plasmic-override={overrides.container}
                    className={classNames(projectcss.all, sty.container)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__fUvPn)}
                    >
                      <h2
                        className={classNames(
                          projectcss.all,
                          projectcss.h2,
                          projectcss.__wab_text,
                          sty.h2__nc1Lp
                        )}
                      >
                        {"To Make Requests For The\nFurther Information"}
                      </h2>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__r4Jdi
                        )}
                      >
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        }
                      </div>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__xrUue)}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__zdf22
                        )}
                        color={"blue" as const}
                        link={"#" as const}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__m73Sy
                          )}
                        >
                          {"Join With Now"}
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            ) : null}
            <div className={classNames(projectcss.all, sty.freeBox__g0Lc8)}>
              <div className={classNames(projectcss.all, sty.columns___8Y8Fy)}>
                <div className={classNames(projectcss.all, sty.column__kzkPi)}>
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__uXj9O
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#000000" }}
                      >
                        {"Ready to start your campaign?"}
                      </span>
                    </React.Fragment>
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hpJPx
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#000000" }}
                      >
                        {"Find the perfect newsletter for your brand"}
                      </span>
                    </React.Fragment>
                  </div>
                  <Button
                    className={classNames("__wab_instance", sty.button__qI4JW)}
                    color={"blue" as const}
                    endIcon={
                      <ArrowRightsvgIcon
                        data-plasmic-name={"svg"}
                        data-plasmic-override={overrides.svg}
                        className={classNames(projectcss.all, sty.svg)}
                        role={"img"}
                      />
                    }
                    shape={"rounded" as const}
                    showEndIcon={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__r5SkQ
                      )}
                    >
                      {"Search Newsletters"}
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__sok7B)}>
              <Footer
                data-plasmic-name={"footer"}
                data-plasmic-override={overrides.footer}
                className={classNames("__wab_instance", sty.footer)}
              />
            </div>
          </p.Stack>
        ) : null}
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "hectoNav",
    "heroHorizontal",
    "link",
    "features",
    "blogColumn",
    "cmsDataFetcher",
    "img",
    "cmsEntryField",
    "outer",
    "container",
    "svg",
    "footer"
  ],
  hectoNav: ["hectoNav"],
  heroHorizontal: ["heroHorizontal", "link"],
  link: ["link"],
  features: [
    "features",
    "blogColumn",
    "cmsDataFetcher",
    "img",
    "cmsEntryField"
  ],
  blogColumn: ["blogColumn", "cmsDataFetcher", "img", "cmsEntryField"],
  cmsDataFetcher: ["cmsDataFetcher", "img", "cmsEntryField"],
  img: ["img"],
  cmsEntryField: ["cmsEntryField"],
  outer: ["outer", "container"],
  container: ["container"],
  svg: ["svg"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  hectoNav: typeof HectoNav;
  heroHorizontal: "div";
  link: "a";
  features: "section";
  blogColumn: "div";
  cmsDataFetcher: typeof CmsQueryRepeater;
  img: typeof p.PlasmicImg;
  cmsEntryField: typeof CmsRowField;
  outer: "div";
  container: "div";
  svg: "svg";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicResources__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicResources__VariantsArgs;
    args?: PlasmicResources__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicResources__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicResources__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicResources__ArgProps,
          internalVariantPropNames: PlasmicResources__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicResources__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicResources";
  } else {
    func.displayName = `PlasmicResources.${nodeName}`;
  }
  return func;
}

export const PlasmicResources = Object.assign(
  // Top-level PlasmicResources renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    hectoNav: makeNodeComponent("hectoNav"),
    heroHorizontal: makeNodeComponent("heroHorizontal"),
    link: makeNodeComponent("link"),
    features: makeNodeComponent("features"),
    blogColumn: makeNodeComponent("blogColumn"),
    cmsDataFetcher: makeNodeComponent("cmsDataFetcher"),
    img: makeNodeComponent("img"),
    cmsEntryField: makeNodeComponent("cmsEntryField"),
    outer: makeNodeComponent("outer"),
    container: makeNodeComponent("container"),
    svg: makeNodeComponent("svg"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicResources
    internalVariantProps: PlasmicResources__VariantProps,
    internalArgProps: PlasmicResources__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Hecto | Newsletter advertising, simplified",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicResources;
/* prettier-ignore-end */
