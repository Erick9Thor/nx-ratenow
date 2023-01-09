import { Route } from '@angular/router';

export interface RateNowRouteData {
  scrollDisabled?: boolean | any;
  toolbarShadowEnabled?: boolean;
  containerEnabled?: boolean;

  [key: string]: any;
}

export interface RateNowRoute extends Route {
  data?: RateNowRouteData;
  children?: RateNowRoute[];
}

export type RateNowRoutes = RateNowRoute[];
