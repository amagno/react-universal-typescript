export interface RouteParamsInterface<PropsInterface = {}> {
  pathname: string;
  context?: PropsInterface;
  params?: any;
}
