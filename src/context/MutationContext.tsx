import { createContext } from "react";
import { IEmployee } from "../types";

interface IMutationContextProviderProps {
  children: React.ReactNode;
  value: ({ id, status }: Pick<IEmployee, "id" | "status">) => void;
}

export const MutationContext = createContext<
  IMutationContextProviderProps["value"] | null
>(null);

const MutationContextProvider: React.FC<IMutationContextProviderProps> = ({
  children,
  value,
}) => {
  return (
    <MutationContext.Provider value={value}>
      {children}
    </MutationContext.Provider>
  );
};

export default MutationContextProvider;
