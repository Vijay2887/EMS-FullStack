import axios from "axios";

async function updateEmployeeTask(data, setEmployees) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/modify-task",
      data
    );
    // console.log("Backend response:", response); // Log the successful response

    if (response.status === 200) {
      const employeeResponse = await axios.get(
        "http://localhost:3000/api/employees"
      );
      //   console.log(employeeResponse.data);
      setEmployees([...employeeResponse.data]);
    } else {
      console.error("Error modifying task. Response status:", response.status);
    }
  } catch (error) {
    console.error("Error modifying task:", error.response || error);
  }
}

export default updateEmployeeTask;
