import { createContext, useState, useEffect, useContext } from 'react';
import { FetchRegistration, IRegistrationResponse } from '../services/registration';

interface IRegistrationProvider {
  children: JSX.Element;
}

interface IRegistration {
  registrations: Array<IRegistrationResponse>;
  isRegistrationLoading: boolean;
  setRegistrations(registrations: IRegistrationResponse[]): void;
}

const registrationContext = createContext<IRegistration>({} as IRegistration);

export function RegistrationProvider({ children }: IRegistrationProvider) {
  const [registrations, setRegistrations] = useState<IRegistrationResponse[]>([]);
  const [isRegistrationLoading, setIsRegistrationLoading] = useState(false);

  useEffect(() => {
    async function loadRegistrationData() {
      setIsRegistrationLoading(true);
      const response = await FetchRegistration();
      setRegistrations(response);
      setIsRegistrationLoading(false);
    }

    loadRegistrationData();
  }, [])

  return (
    <registrationContext.Provider value={{registrations, isRegistrationLoading, setRegistrations}}>
      {children}
    </registrationContext.Provider>
  )
}

export function useRegistration() {
  const context = useContext(registrationContext);
  return context;
}

export default registrationContext;
