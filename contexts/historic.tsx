import { createContext, useState, useEffect, useContext } from 'react';
import { FetchHistoric, IHistoricResponse } from '../services/historic';

interface IHistoricProvider {
  children: JSX.Element;
}

interface IHistoric {
  historics: Array<IHistoricResponse>;
  isHistoricLoading: boolean;
  setHistoric(historics: IHistoricResponse[]): void;
}

const historicContext = createContext<IHistoric>({} as IHistoric);

export function HistoricProvider({ children }: IHistoricProvider) {
  const [historics, setHistoric] = useState<IHistoricResponse[]>([]);
  const [isHistoricLoading, setIsHistoricLoading] = useState(false);

  useEffect(() => {
    async function loadHistoricData() {
      setIsHistoricLoading(true);
      const response = await FetchHistoric();
      setHistoric(response);
      setIsHistoricLoading(false);
    }

    loadHistoricData();
  }, [])

  return (
    <historicContext.Provider value={{historics, isHistoricLoading, setHistoric}}>
      {children}
    </historicContext.Provider>
  )
}

export function useHistoric() {
  const context = useContext(historicContext);
  return context;
}

export default historicContext;
