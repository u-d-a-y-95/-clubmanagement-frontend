import "./App.css";
import MasterTable from "./helper/component/master-table/master-table";
import MasterTextArea from "./helper/component/master-text-area/master-text-area";
import MasterTextField from "./helper/component/master-text-field/master-text-field";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-6">
          <MasterTextField
            id="name"
            label="Age"
            placeholder="Enter your Age"
            error={"sd"}
            type="number"
          />
        </div>
        <div className="col-6">
          <MasterTextArea
            id="name"
            label="Age"
            placeholder="Enter your Age"
            error={"sd"}
          />
        </div>
        <div className="col-12">
          <MasterTable
            header={[
              {
                key: "name",
                label: "Name",
                alignment: "Middle",
              },
              {
                key: "Age",
                label: "Age",
                alignment: "Middle",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
