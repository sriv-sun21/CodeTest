import react from "react";
import renderer from "react-test-renderer";
import { fireEvent, render } from "@testing-library/react-native";

import App from "../App";

const findElement = (tree, element) => {
  for (node in tree.children) {
    let result = false;
    if ((tree.children[node].props.testId = element)) {
      result = true;
    }
  }
  return result;
};

describe("<App />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should able to Add task", () => {
    const { getByTestId } = render(<App />);
    const textInput = getByTestId("textInput");
    fireEvent.changeText(textInput, "go to gym at 8 pm");
    expect(textInput.props.value).toBe("go to gym at 8 pm");

    const handleAddTask = jest.fn();
    console.log("handleAddTask", handleAddTask);
    const addtask = getByTestId("addTask");
    fireEvent.press(addtask);
  });

  it("should click on deleteTask", async () => {
    const { getByTestId } = render(<App />);
    const handleDeleteTask = jest.fn();
  });
  it("should click on editTask", async () => {
    const { getByTestId } = render(<App />);
    const handleEditTask = jest.fn();
  });
 
});