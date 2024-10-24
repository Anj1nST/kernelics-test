import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import Search from "./components/Search/Search";
import Grid from "./components/Grid/Grid";
import Logo from "./components/Logo/Logo";

import { StatusType } from "./types";

import "./App.scss";
import Button from "./components/Button/Button";
import { fetchEmployees, updateEmployeeStatus } from "./api/employees";
import MutationContextProvider from "./context/MutationContext";
import Spinner from "./Spinner/Spinner";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const [filter, setFilter] = useState<null | StatusType>(null);

  const { data: employees, isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: fetchEmployees,
    refetchOnWindowFocus: false,
  });

  const queryClient = useQueryClient();

  const employeesMutation = useMutation({
    mutationFn: updateEmployeeStatus,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["employees"] }),
  });

  const handleClickLoginButton = (): void => {
    setIsLoggedIn(!isLoggedIn);
  };

  const filteredEmployees = useMemo(() => {
    if (!employees) return [];

    return employees.filter((employee) => {
      const matchesSearch = employee.name
        .toLowerCase()
        .includes(searchValue.toLowerCase());

      const matchesFilter = filter ? employee.status === filter : true;

      return matchesSearch && matchesFilter;
    });
  }, [employees, searchValue, filter]);

  return (
    <MutationContextProvider value={employeesMutation.mutate}>
      <header className="header">
        <Logo />
        {!isLoggedIn && (
          <Button
            text="Log In"
            size="sm"
            variant="outlined"
            onClick={handleClickLoginButton}
          />
        )}
        {isLoggedIn && (
          <Button
            text="Log Out"
            size="sm"
            variant="outlined"
            onClick={handleClickLoginButton}
          />
        )}
      </header>
      {isLoading && (
        <main className="main--loading">
          <Spinner />
        </main>
      )}
      {!isLoading && (
        <main className="main">
          {isLoggedIn && (
            <Search
              value={searchValue}
              setValue={setSearchValue}
              filter={filter}
              setFilter={setFilter}
            />
          )}
          {isLoggedIn && <Grid employees={filteredEmployees} />}
        </main>
      )}
    </MutationContextProvider>
  );
}

export default App;
