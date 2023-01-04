export type NavigationItem =
  | NavigationLink
  | NavigationDropdown
  | NavigationSubheading
  | any;

export interface NavigationLink {
  type: 'link';
  route: string | any;
  fragment?: string;
  label: string;
  icon?: string | any;
  routerLinkActiveOptions?: { exact: boolean };
  badge?: {
    value: string;
    bgClass: string;
    textClass: string;
  };
}

export interface NavigationDropdown {
  type: 'dropdown';
  label: string;
  icon?: string | any;
  children: Array<NavigationLink | NavigationDropdown>;
  badge?: {
    value: string;
    bgClass: string;
    textClass: string;
  };
}

export interface NavigationSubheading {
  type: 'subheading';
  label: string;
  children: Array<NavigationLink | NavigationDropdown>;
}
