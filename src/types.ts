import {
  type Metadata as MetadataBase,
  type PageProps as PagePropsBase,
  type GlobalProps as GlobalPropsBase,
} from 'minista';
import { type ReactNode } from 'react';

export interface IGlobalMetadata {
  stylesheetAfter?: ReactNode;
  stylesheetBefore?: ReactNode;
  scriptAfter?: ReactNode;
  scriptBefore?: ReactNode;
}

export interface IMetadata extends MetadataBase, IGlobalMetadata {}
export interface IPageProps extends PagePropsBase {}
export interface IGlobalProps extends GlobalPropsBase, IGlobalMetadata {}
