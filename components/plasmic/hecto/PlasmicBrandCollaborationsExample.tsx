// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jLAmXkGdPPYDvKpL9j3cJd
// Component: cUZC9S1-0sL

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
import { PlasmicHead } from "@plasmicapp/react-web"; // plasmic-import: Lo3ARtUvly/codeComponent
import Button from "../../Button"; // plasmic-import: 16yj8MRmRBT/component
import Footer from "../../Footer"; // plasmic-import: Iw1cdeIou4/component

import { useScreenVariants as useScreenVariantskILw5UiAaS1UF } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: kILw5uiAaS1uF/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_hecto.module.css"; // plasmic-import: jLAmXkGdPPYDvKpL9j3cJd/projectcss
import sty from "./PlasmicBrandCollaborationsExample.module.css"; // plasmic-import: cUZC9S1-0sL/css

import ArrowRightsvgIcon from "./icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: g1j_XxrLjbNK/icon

export type PlasmicBrandCollaborationsExample__VariantMembers = {};
export type PlasmicBrandCollaborationsExample__VariantsArgs = {};
type VariantPropType = keyof PlasmicBrandCollaborationsExample__VariantsArgs;
export const PlasmicBrandCollaborationsExample__VariantProps =
  new Array<VariantPropType>();

export type PlasmicBrandCollaborationsExample__ArgsType = {
  test?: string;
};
type ArgPropType = keyof PlasmicBrandCollaborationsExample__ArgsType;
export const PlasmicBrandCollaborationsExample__ArgProps =
  new Array<ArgPropType>("test");

export type PlasmicBrandCollaborationsExample__OverridesType = {
  root?: p.Flex<"div">;
  hectoNav?: p.Flex<typeof HectoNav>;
  cmsDataFetcher?: p.Flex<typeof CmsQueryRepeater>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  leadTitle?: p.Flex<"h1">;
  blogBody?: p.Flex<"div">;
  head?: p.Flex<typeof PlasmicHead>;
  button?: p.Flex<typeof Button>;
  svg?: p.Flex<"svg">;
  footerBottom?: p.Flex<"div">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultBrandCollaborationsExampleProps {}

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

function PlasmicBrandCollaborationsExample__RenderFunc(props: {
  variants: PlasmicBrandCollaborationsExample__VariantsArgs;
  args: PlasmicBrandCollaborationsExample__ArgsType;
  overrides: PlasmicBrandCollaborationsExample__OverridesType;
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
        <title key="title">
          {PlasmicBrandCollaborationsExample.pageMetadata.title}
        </title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicBrandCollaborationsExample.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicBrandCollaborationsExample.pageMetadata.title}
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
            <HectoNav
              data-plasmic-name={"hectoNav"}
              data-plasmic-override={overrides.hectoNav}
              className={classNames("__wab_instance", sty.hectoNav)}
            />

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
                        sty.text__ogDz0
                      )}
                    >
                      {"No matching published entries found."}
                    </div>
                  )}
                </ph.DataCtxReader>
              }
              filterField={"slug" as const}
              filterValue={(() => {
                try {
                  return $ctx.params.slug;
                } catch (e) {
                  if (e instanceof TypeError) {
                    return undefined;
                  }
                  throw e;
                }
              })()}
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
                        sty.text__j1Aem
                      )}
                    >
                      {"Loading..."}
                    </div>
                  )}
                </ph.DataCtxReader>
              }
              noAutoRepeat={false}
              noLayout={false}
              table={"brandCollabs" as const}
              useDraft={false}
            >
              <ph.DataCtxReader>
                {$ctx => (
                  <React.Fragment>
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___9ZjCv
                      )}
                    >
                      <h2
                        className={classNames(
                          projectcss.all,
                          projectcss.h2,
                          projectcss.__wab_text,
                          sty.h2__hhT0
                        )}
                      >
                        <React.Fragment>
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
                              href={`/brand-collaborations`}
                              platform={"nextjs"}
                            >
                              <React.Fragment>
                                <span
                                  className={
                                    "plasmic_default__all plasmic_default__span"
                                  }
                                  style={{ color: "#BFBFBF" }}
                                >
                                  {"Brand Collaborations"}
                                </span>
                              </React.Fragment>
                            </p.PlasmicLink>
                          }
                          <React.Fragment>{""}</React.Fragment>
                        </React.Fragment>
                      </h2>
                      <h1
                        data-plasmic-name={"leadTitle"}
                        data-plasmic-override={overrides.leadTitle}
                        className={classNames(
                          projectcss.all,
                          projectcss.h1,
                          projectcss.__wab_text,
                          sty.leadTitle
                        )}
                      >
                        {(() => {
                          try {
                            return $ctx.plasmicCmsBrandCollabsItem.data.h1Title;
                          } catch (e) {
                            if (e instanceof TypeError) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}
                      </h1>
                      <h2
                        className={classNames(
                          projectcss.all,
                          projectcss.h2,
                          projectcss.__wab_text,
                          sty.h2__uQ9E
                        )}
                      >
                        {(() => {
                          try {
                            return $ctx.plasmicCmsBrandCollabsItem.data
                              .h2Subtitle;
                          } catch (e) {
                            if (e instanceof TypeError) {
                              return "Enter some text";
                            }
                            throw e;
                          }
                        })()}
                      </h2>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__nFzxZ
                        )}
                      >
                        {(
                          hasVariant(globalVariants, "screen", "mobileOnly")
                            ? true
                            : true
                        ) ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__yjyiH
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__rei3P
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.columns___5FPjg
                                )}
                              >
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    sty.column__ig8DB
                                  )}
                                >
                                  <p.PlasmicImg
                                    alt={""}
                                    className={classNames(sty.img__iPjnw)}
                                    displayHeight={"auto" as const}
                                    displayMaxHeight={"none" as const}
                                    displayMaxWidth={"100%" as const}
                                    displayMinHeight={"0" as const}
                                    displayMinWidth={"0" as const}
                                    displayWidth={"74px" as const}
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
                                    sty.column__fyEvr
                                  )}
                                >
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.text__vuUc5
                                    )}
                                  >
                                    {"Team Hecto"}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : null}
                        {true ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox___4Q4D5
                            )}
                          >
                            <p.PlasmicImg
                              alt={""}
                              className={classNames(sty.img__vzj6D)}
                              displayHeight={"376px" as const}
                              displayMaxHeight={"none" as const}
                              displayMaxWidth={"100%" as const}
                              displayMinHeight={"0" as const}
                              displayMinWidth={"0" as const}
                              displayWidth={"auto" as const}
                              loading={"lazy" as const}
                              src={(() => {
                                try {
                                  return $ctx.plasmicCmsBrandCollabsItem.data
                                    .leadImage.url;
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return undefined;
                                  }
                                  throw e;
                                }
                              })()}
                            />

                            <div
                              data-plasmic-name={"blogBody"}
                              data-plasmic-override={overrides.blogBody}
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.blogBody
                              )}
                            >
                              <div
                                className={projectcss.__wab_expr_html_text}
                                dangerouslySetInnerHTML={{
                                  __html: (() => {
                                    try {
                                      return $ctx.plasmicCmsBrandCollabsItem
                                        .data.body;
                                    } catch (e) {
                                      if (e instanceof TypeError) {
                                        return "Enter some text";
                                      }
                                      throw e;
                                    }
                                  })()
                                }}
                              />
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <PlasmicHead
                      data-plasmic-name={"head"}
                      data-plasmic-override={overrides.head}
                      className={classNames("__wab_instance", sty.head)}
                      description={(() => {
                        try {
                          return $ctx.plasmicCmsBlogArticlesItem.data
                            .metaDescription;
                        } catch (e) {
                          if (e instanceof TypeError) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()}
                      image={"/plasmic/hecto/images/metaImagepng.png"}
                      title={(() => {
                        try {
                          return (
                            "Hecto | " +
                            $ctx.plasmicCmsBlogArticlesItem.data.h1Heading
                          );
                        } catch (e) {
                          if (e instanceof TypeError) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()}
                    />
                  </React.Fragment>
                )}
              </ph.DataCtxReader>
            </CmsQueryRepeater>
            <div className={classNames(projectcss.all, sty.freeBox__cy2LC)}>
              <div className={classNames(projectcss.all, sty.columns__vDIg)}>
                <div className={classNames(projectcss.all, sty.column__c2Dv2)}>
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__jBkut
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
                      sty.text__luWnG
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
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    className={classNames("__wab_instance", sty.button)}
                    color={"blue" as const}
                    endIcon={
                      <ArrowRightsvgIcon
                        data-plasmic-name={"svg"}
                        data-plasmic-override={overrides.svg}
                        className={classNames(projectcss.all, sty.svg)}
                        role={"img"}
                      />
                    }
                    showEndIcon={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__bf3O3
                      )}
                    >
                      {"Search Newsletters"}
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox___6ZxFz)}>
              <div
                data-plasmic-name={"footerBottom"}
                data-plasmic-override={overrides.footerBottom}
                className={classNames(projectcss.all, sty.footerBottom)}
              >
                <Footer
                  data-plasmic-name={"footer"}
                  data-plasmic-override={overrides.footer}
                  className={classNames("__wab_instance", sty.footer)}
                />
              </div>
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
    "cmsDataFetcher",
    "link",
    "leadTitle",
    "blogBody",
    "head",
    "button",
    "svg",
    "footerBottom",
    "footer"
  ],
  hectoNav: ["hectoNav"],
  cmsDataFetcher: ["cmsDataFetcher", "link", "leadTitle", "blogBody", "head"],
  link: ["link"],
  leadTitle: ["leadTitle"],
  blogBody: ["blogBody"],
  head: ["head"],
  button: ["button", "svg"],
  svg: ["svg"],
  footerBottom: ["footerBottom", "footer"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  hectoNav: typeof HectoNav;
  cmsDataFetcher: typeof CmsQueryRepeater;
  link: "a";
  leadTitle: "h1";
  blogBody: "div";
  head: typeof PlasmicHead;
  button: typeof Button;
  svg: "svg";
  footerBottom: "div";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBrandCollaborationsExample__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBrandCollaborationsExample__VariantsArgs;
    args?: PlasmicBrandCollaborationsExample__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBrandCollaborationsExample__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBrandCollaborationsExample__ArgsType,
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
          internalArgPropNames: PlasmicBrandCollaborationsExample__ArgProps,
          internalVariantPropNames:
            PlasmicBrandCollaborationsExample__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBrandCollaborationsExample__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBrandCollaborationsExample";
  } else {
    func.displayName = `PlasmicBrandCollaborationsExample.${nodeName}`;
  }
  return func;
}

export const PlasmicBrandCollaborationsExample = Object.assign(
  // Top-level PlasmicBrandCollaborationsExample renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    hectoNav: makeNodeComponent("hectoNav"),
    cmsDataFetcher: makeNodeComponent("cmsDataFetcher"),
    link: makeNodeComponent("link"),
    leadTitle: makeNodeComponent("leadTitle"),
    blogBody: makeNodeComponent("blogBody"),
    head: makeNodeComponent("head"),
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),
    footerBottom: makeNodeComponent("footerBottom"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicBrandCollaborationsExample
    internalVariantProps: PlasmicBrandCollaborationsExample__VariantProps,
    internalArgProps: PlasmicBrandCollaborationsExample__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Hecto Blog",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicBrandCollaborationsExample;
/* prettier-ignore-end */
