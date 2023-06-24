export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      groups: undefined;
      new: undefined;
      players: {
        group: string;
      }
    }
  }
}

/**
 * interface RootParamList:
 * nome da rota: tipo de parametro, se nao tiver eh undefined
 * a rota players recebe um parametro group: string
 */