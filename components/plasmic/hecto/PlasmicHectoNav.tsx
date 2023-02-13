// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jLAmXkGdPPYDvKpL9j3cJd
// Component: 1Xqtr1aGys
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

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
import { NavigationBar } from "@plasmicpkgs/plasmic-nav"; // plasmic-import: jGx9tiKJoex/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_hecto.module.css"; // plasmic-import: jLAmXkGdPPYDvKpL9j3cJd/projectcss
import sty from "./PlasmicHectoNav.module.css"; // plasmic-import: 1Xqtr1aGys/css

export type PlasmicHectoNav__VariantMembers = {};
export type PlasmicHectoNav__VariantsArgs = {};
type VariantPropType = keyof PlasmicHectoNav__VariantsArgs;
export const PlasmicHectoNav__VariantProps = new Array<VariantPropType>();

export type PlasmicHectoNav__ArgsType = {};
type ArgPropType = keyof PlasmicHectoNav__ArgsType;
export const PlasmicHectoNav__ArgProps = new Array<ArgPropType>();

export type PlasmicHectoNav__OverridesType = {
  root?: p.Flex<typeof NavigationBar>;
  text?: p.Flex<"div">;
  pricing?: p.Flex<"a"> & Partial<LinkProps>;
  signUp?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultHectoNavProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHectoNav__RenderFunc(props: {
  variants: PlasmicHectoNav__VariantsArgs;
  args: PlasmicHectoNav__ArgsType;
  overrides: PlasmicHectoNav__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

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

  return (
    <NavigationBar
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      brand={
        <p.PlasmicLink
          className={classNames(projectcss.all, projectcss.a, sty.link__dhYtV)}
          component={Link}
          href={`/`}
          platform={"nextjs"}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            <React.Fragment>
              <React.Fragment>{"hecto"}</React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ color: "#FF0000" }}
              >
                {"."}
              </span>
            </React.Fragment>
          </div>
        </p.PlasmicLink>
      }
      className={classNames("__wab_instance", sty.root)}
      closeButton={
        <p.PlasmicImg
          alt={""}
          className={classNames(sty.img___4Cdh)}
          displayHeight={"auto" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"none" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"auto" as const}
          src={"https://static1.plasmic.app/close.svg" as const}
        />
      }
      itemsGap={8 as const}
      menuItems={
        <React.Fragment>
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__gyu5T
            )}
            component={Link}
            href={`/newsletter-creators`}
            platform={"nextjs"}
            title={"Creators" as const}
          >
            {"Creators"}
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__sbdo8
            )}
            component={Link}
            href={"https://app.hecto.io/blog" as const}
            platform={"nextjs"}
          >
            {"Blog"}
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__esyf1
            )}
            component={Link}
            href={"https://app.hecto.io/search" as const}
            platform={"nextjs"}
          >
            {"Search"}
          </p.PlasmicLink>

          <p.PlasmicLink
            data-plasmic-name={"pricing"}
            data-plasmic-override={overrides.pricing}
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.pricing
            )}
            component={Link}
            href={"https://app.hecto.io/pricing" as const}
            platform={"nextjs"}
          >
            {"Pricing"}
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__ywDm
            )}
            component={Link}
            href={"https://app.hecto.io/login" as const}
            platform={"nextjs"}
          >
            {"Sign In"}
          </p.PlasmicLink>

          <p.PlasmicLink
            data-plasmic-name={"signUp"}
            data-plasmic-override={overrides.signUp}
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.signUp
            )}
            component={Link}
            href={"https://app.hecto.io/login" as const}
            platform={"nextjs"}
          >
            <React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700, color: "#FFFFFF" }}
              >
                {"Sign Up"}
              </span>
            </React.Fragment>
          </p.PlasmicLink>
        </React.Fragment>
      }
      openButton={
        <p.PlasmicImg
          alt={""}
          className={classNames(sty.img__jPdEs)}
          displayHeight={"auto" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"none" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"auto" as const}
          src={"https://static1.plasmic.app/menu.svg" as const}
        />
      }
      responsiveBreakpoint={768 as const}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text", "pricing", "signUp"],
  text: ["text"],
  pricing: ["pricing"],
  signUp: ["signUp"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof NavigationBar;
  text: "div";
  pricing: "a";
  signUp: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHectoNav__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHectoNav__VariantsArgs;
    args?: PlasmicHectoNav__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHectoNav__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHectoNav__ArgsType,
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
          internalArgPropNames: PlasmicHectoNav__ArgProps,
          internalVariantPropNames: PlasmicHectoNav__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHectoNav__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHectoNav";
  } else {
    func.displayName = `PlasmicHectoNav.${nodeName}`;
  }
  return func;
}

export const PlasmicHectoNav = Object.assign(
  // Top-level PlasmicHectoNav renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    pricing: makeNodeComponent("pricing"),
    signUp: makeNodeComponent("signUp"),

    // Metadata about props expected for PlasmicHectoNav
    internalVariantProps: PlasmicHectoNav__VariantProps,
    internalArgProps: PlasmicHectoNav__ArgProps
  }
);

export default PlasmicHectoNav;
/* prettier-ignore-end */
