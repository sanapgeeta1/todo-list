import React from "react";
import { render, screen } from '@testing-library/react';

import ToDoList from "./ToDoList";



test("ToDoList Componant renders successfully", () => {
  render(<ToDoList />);
  const element = screen.getByText(/To Do List App/i);
  expect(element).toBeInTheDocument();
})


//data render
test("List completed successfully",  async () => {
  render(<ToDoList />);
  const ele = screen.getByText(/Completed/i);
  expect(ele).toBeInTheDocument();
})
//data render
test("Add To Do List",  async () => {
  render(<ToDoList />);
  const ele = screen.getByText(/Add/i);
  expect(ele).toBeInTheDocument();
})

test("Button disabled on Add click", async () => {
  render(<ToDoList />);
  const ele = screen.getByText(/Add/i);
  expect(screen.getByText(/Add/i)).toBeDisabled();
})


