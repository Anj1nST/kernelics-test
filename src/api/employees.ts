import { IEmployee } from "../types";

export async function fetchEmployees(): Promise<IEmployee[]> {
  const response = await fetch("http://localhost:3001/users");

  if (!response.ok) {
    throw new Error("Failed to fetch daata");
  }

  return response.json();
}

export async function updateEmployeeStatus({
  id,
  status,
}: Pick<IEmployee, "id" | "status">): Promise<IEmployee> {
  const response = await fetch(`http://localhost:3001/users/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

  if (!response.ok) {
    throw new Error("Failed to update data");
  }

  return response.json();
}
