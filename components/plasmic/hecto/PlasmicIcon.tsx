// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jLAmXkGdPPYDvKpL9j3cJd
// Component: MOzF3Fhy2s
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_hecto.module.css"; // plasmic-import: jLAmXkGdPPYDvKpL9j3cJd/projectcss
import sty from "./PlasmicIcon.module.css"; // plasmic-import: MOzF3Fhy2s/css

export type PlasmicIcon__VariantMembers = {};
export type PlasmicIcon__VariantsArgs = {};
type VariantPropType = keyof PlasmicIcon__VariantsArgs;
export const PlasmicIcon__VariantProps = new Array<VariantPropType>();

export type PlasmicIcon__ArgsType = {};
type ArgPropType = keyof PlasmicIcon__ArgsType;
export const PlasmicIcon__ArgProps = new Array<ArgPropType>();

export type PlasmicIcon__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultIconProps {
  className?: string;
}

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

function PlasmicIcon__RenderFunc(props: {
  variants: PlasmicIcon__VariantsArgs;
  args: PlasmicIcon__ArgsType;
  overrides: PlasmicIcon__OverridesType;

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

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
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
          src: "/plasmic/hecto/images/hectoFaviconpng.png",
          fullWidth: 500,
          fullHeight: 500,
          aspectRatio: undefined
        }}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicIcon__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicIcon__VariantsArgs;
    args?: PlasmicIcon__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicIcon__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicIcon__ArgsType,
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
          internalArgPropNames: PlasmicIcon__ArgProps,
          internalVariantPropNames: PlasmicIcon__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicIcon__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIcon";
  } else {
    func.displayName = `PlasmicIcon.${nodeName}`;
  }
  return func;
}

export const PlasmicIcon = Object.assign(
  // Top-level PlasmicIcon renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicIcon
    internalVariantProps: PlasmicIcon__VariantProps,
    internalArgProps: PlasmicIcon__ArgProps
  }
);

export default PlasmicIcon;
/* prettier-ignore-end */
