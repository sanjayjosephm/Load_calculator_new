import React, { useState } from 'react';
import './App.css';

function App() {
  const [cargoForms, setCargoForms] = useState([
    {
      id: Date.now(),
      name: 'cargo_1',
      length: 'length_1',
      width: 'width_1',
      height: 'height_1',
      quantity: 'quantity_1',
      weight: 'weight_1',
    },
  ]); // State to keep track of cargo forms

  const [formData, setFormData] = useState([]); // State to hold the form data

  const addCargoForm = () => {
    if (cargoForms.length < 5) {
      // Create a new form object with unique IDs for each input field
      const newForm = {
        id: Date.now(),
        name: `cargo_${cargoForms.length + 1}`,
        length: `length_${cargoForms.length + 1}`,
        width: `width_${cargoForms.length + 1}`,
        height: `height_${cargoForms.length + 1}`,
        quantity: `quantity_${cargoForms.length + 1}`,
        weight: `weight_${cargoForms.length + 1}`,
      };

      // Add the new form to the existing forms
      setCargoForms([...cargoForms, newForm]);
    }
  };

  const handleNext = () => {
    // Save the form data in an array of objects
    const newData = cargoForms.map((form) => ({
      name: document.getElementById(form.name).value,
      length: document.getElementById(form.length).value,
      width: document.getElementById(form.width).value,
      height: document.getElementById(form.height).value,
      quantity: document.getElementById(form.quantity).value,
      weight: document.getElementById(form.weight).value,
    }));

    setFormData(newData);
  };

  const feet_20 = {
    length: 589,
    width: 234,
    height: 238,
    max_cbm: 26,
  };
  const feet_40 = {
    length: 1200,
    width: 234,
    height: 238,
    max_cbm: 58,
  };
  const highcube_40 = {
    length: 1200,
    width: 234,
    height: 269,
    max_cbm: 68,
  };

  function calculateContainer20Feet(length, height, width, quantity, weight) {
    const noOfBoxes20feet = Math.floor(feet_20.length / length) * Math.floor(feet_20.width / width) * Math.floor(feet_20.height / height);
    const cbm20PerBox = (length * width * height * noOfBoxes20feet) / 1000000;
    let noOfContainers20feet = quantity / noOfBoxes20feet;
    
    if (!Number.isInteger(noOfContainers20feet)) {
      noOfContainers20feet = Math.floor(noOfContainers20feet + 1);
    }
    const cbmTotal = (length * width * height * quantity) / 1000000;
    console.log(cbmTotal)
    return {
      total: `<span class="same">20dv</span><br><p>Total : ${quantity} packages</p>`,
      cbm: `<p>Total Cargo volume : ${cbmTotal} m<sup>3</sup></p>`,                   //this one
      max_boxes: `<p>Total Cargo per container # : ${noOfBoxes20feet}</p>`,
      wt_per_container: `<p>Total Cargo weight per container # : ${noOfBoxes20feet * weight}kG</p>`,
      cargo_density: `<p>Total Cargo Weight: ${quantity * weight} kg</p>`,
      vol_per_container: `<p>Volume per container : ${cbm20PerBox} m<sup>3</sup></p>`,//this one
      max_containers: `<p>20'dv container : ${noOfContainers20feet}</p>`,
    };
    
  }

  function calculateContainer40Feet(length, height, width, quantity, weight) {
    const noOfBoxes40feet =Math.floor(feet_40.length / length) * Math.floor(feet_40.width / width) * Math.floor(feet_40.height / height);
    const cbm40PerBox = (length * width * height * noOfBoxes40feet) / 1000000;
    let noOfContainers40feet = quantity / noOfBoxes40feet;

    if (!Number.isInteger(noOfContainers40feet)) {
      noOfContainers40feet = Math.floor(noOfContainers40feet + 1);
    }
    const cbmTotal = (length * width * height * quantity) / 1000000;
    return {
      total1: `<span class="same">40dv</span><br><p>Total : ${quantity} packages</p>`,
      cbm1: `<p>Total Cargo volume : ${cbmTotal} m<sup>3</sup></p>`,
      cargo_density1: `<p>Total Cargo Weight: ${quantity * weight} kg</p>`,
      max_boxes1: `<p>Total boxes per unit # : ${noOfBoxes40feet}</p>`,
      wt_per_container1: `<p>Total Cargo weight per container # : ${noOfBoxes40feet * weight}kg</p>`,
      vol_per_container1: `<p>Volume per container : ${cbm40PerBox} m<sup>3</sup></p>`,
      max_containers1: `<p>40'dv Unit : ${noOfContainers40feet}</p>`,
    };
  }

  function calculateContainer40HighCube(length, height, width, quantity, weight) {
    const noOfBoxes40hq = Math.floor(highcube_40.length / length) * Math.floor(highcube_40.width / width) * Math.floor(highcube_40.height / height);
    const cbm40hqPerBox = (length * width * height * noOfBoxes40hq) / 1000000;
    let noOfContainers40hq = quantity / noOfBoxes40hq;

    if (!Number.isInteger(noOfContainers40hq)) {
      noOfContainers40hq = Math.floor(noOfContainers40hq + 1);
    }
    const cbmTotal = (length * width * height * quantity) / 1000000;
    return {
      total2: `<span class="same">40Hq</span><br><p>Total : ${quantity} packages</p>`,
      cbm2: `<p>Total Cargo volume : ${cbmTotal} m<sup>3</sup></p>`,
      cargo_density2: `<p>Total Cargo Weight: ${quantity * weight} kg</p>`,
      max_boxes2: `<p>Total boxes per unit # : ${noOfBoxes40hq}</p>`,
      wt_per_container2: `<p>Total Cargo weight per container # : ${noOfBoxes40hq * weight}kg</p>`,
      vol_per_container2: `<p>Volume per container : ${cbm40hqPerBox} m<sup>3</sup></p>`,
      max_containers2: `<p>40'hq Unit : ${noOfContainers40hq}</p>`,
    };
  }

  function removeContainer20Feet() {
    return {
      total: '',
      cbm: '',
      max_boxes: '',
      wt_per_container: '',
      cargo_density: '',
      vol_per_container: '',
      max_containers: '',
    };
  }

  function removeContainer40Feet() {
    return {
      total1: '',
      cbm1: '',
      cargo_density1: '',
      max_boxes1: '',
      wt_per_container1: '',
      vol_per_container1: '',
      max_containers1: '',
    };
  }

  function removeContainer40HighCube() {
    return {
      total2: '',
      cbm2: '',
      cargo_density2: '',
      max_boxes2: '',
      wt_per_container2: '',
      vol_per_container2: '',
      max_containers2: '',
    };
  }

  const calculateContainer = (length, height, width, quantity, weight) => {
    const container20Feet = calculateContainer20Feet(length,height,width,quantity,weight);
    const container40Feet = calculateContainer40Feet(length,height,width,quantity,weight);
    const container40HighCube = calculateContainer40HighCube(length,height,width,quantity,weight);

    const container20FeetState = container20Feet
      ? container20Feet
      : removeContainer20Feet();
    const container40FeetState = container40Feet
      ? container40Feet
      : removeContainer40Feet();
    const container40HighCubeState = container40HighCube
      ? container40HighCube
      : removeContainer40HighCube();

    return {
      ...container20FeetState,
      ...container40FeetState,
      ...container40HighCubeState,
    };
  };

  const handleCalculate = () => {
    const cargoData = cargoForms.map((form) => ({
      length: parseFloat(document.getElementById(form.length).value),
      width: parseFloat(document.getElementById(form.width).value),
      height: parseFloat(document.getElementById(form.height).value),
      quantity: parseInt(document.getElementById(form.quantity).value),
      weight: parseFloat(document.getElementById(form.weight).value),
    }));
  
    const containerCalculations = cargoData.map((cargo) =>
      calculateContainer(
        cargo.length,
        cargo.height,
        cargo.width,
        cargo.quantity,
        cargo.weight
      )
    );
  
    const containerResults = containerCalculations.reduce(
      (acc, curr) => ({
        total: acc.total + curr.total,
        cbm: acc.cbm + curr.cbm,
        max_boxes: acc.max_boxes + curr.max_boxes,
        wt_per_container: acc.wt_per_container + curr.wt_per_container,
        cargo_density: acc.cargo_density + curr.cargo_density,
        vol_per_container: acc.vol_per_container + curr.vol_per_container,
        max_containers: acc.max_containers + curr.max_containers,
        total1: acc.total1 + curr.total1,
        cbm1: acc.cbm1 + curr.cbm1,
        cargo_density1: acc.cargo_density1 + curr.cargo_density1,
        max_boxes1: acc.max_boxes1 + curr.max_boxes1,
        wt_per_container1: acc.wt_per_container1 + curr.wt_per_container1,
        vol_per_container1: acc.vol_per_container1 + curr.vol_per_container1,
        max_containers1: acc.max_containers1 + curr.max_containers1,
        total2: acc.total2 + curr.total2,
        cbm2: acc.cbm2 + curr.cbm2,
        cargo_density2: acc.cargo_density2 + curr.cargo_density2,
        max_boxes2: acc.max_boxes2 + curr.max_boxes2,
        wt_per_container2: acc.wt_per_container2 + curr.wt_per_container2,
        vol_per_container2: acc.vol_per_container2 + curr.vol_per_container2,
        max_containers2: acc.max_containers2 + curr.max_containers2,
      }),
      {
        total: '',
        cbm: '',
        max_boxes: '',
        wt_per_container: '',
        cargo_density: '',
        vol_per_container: '',
        max_containers: '',
        total1: '',
        cbm1: '',
        cargo_density1: '',
        max_boxes1: '',
        wt_per_container1: '',
        vol_per_container1: '',
        max_containers1: '',
        total2: '',
        cbm2: '',
        cargo_density2: '',
        max_boxes2: '',
        wt_per_container2: '',
        vol_per_container2: '',
        max_containers2: '',
      }
    );
  
    setState(containerResults);
  };
  

  const [state, setState] = useState({
    total: '',
    cbm: '',
    max_boxes: '',
    wt_per_container: '',
    cargo_density: '',
    vol_per_container: '',
    max_containers: '',
    total1: '',
    cbm1: '',
    cargo_density1: '',
    max_boxes1: '',
    wt_per_container1: '',
    vol_per_container1: '',
    max_containers1: '',
    total2: '',
    cbm2: '',
    cargo_density2: '',
    max_boxes2: '',
    wt_per_container2: '',
    vol_per_container2: '',
    max_containers2: '',
  });



  return (
    <div className="App">
      <header className="App-header">
        <h3>Load Calculator</h3>
      </header>
      <h3>Cargo dimensions have to be entered in centimeters (cm) and cargo weight in kilogram (kg)!</h3>
      <div className="hero">
        <button id="addCargo" onClick={addCargoForm} value="addCargo">
          Add Cargo
        </button>
        {cargoForms.map((form, index) => (
          <div key={form.id} className="form">
            <div className="name-section">
              <label htmlFor={form.name}>Name</label>
              <input type="text" id={form.name} step="0" placeholder={`Cargo ${index + 1}`} required />
            </div>
            <div className="length-section">
              <label htmlFor={form.length}>Length (CM)</label>
              <input type="number" id={form.length} step="0" placeholder="Length" required />
            </div>
            <div className="width-section">
              <label htmlFor={form.width}>Width (CM)</label>
              <input type="number" id={form.width} step="0" placeholder="Width" required />
            </div>
            <div className="height-section">
              <label htmlFor={form.height}>Height (CM)</label>
              <input type="number" id={form.height} step="0" placeholder="Height" required />
            </div>
            <div className="quantity-section">
              <label htmlFor={form.quantity}># of units</label>
              <input type="number" id={form.quantity} step="0" placeholder="Quantity" required />
            </div>
            <div className="weight-section">
              <label htmlFor={form.weight}>
                Weight <span>(in kg)</span>
              </label>
              <input type="number" id={form.weight} step="0" placeholder="Weight" required />
            </div>
          </div>
        ))}
      </div>
      <button id="Next" onClick={handleNext}>
        Next
      </button>
      <button id="Calculate" onClick={handleCalculate}>
        Calculate
      </button>
      <div>
        <h3>Form Data:</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
      <div>
        <h3>Container Calculation Results:</h3>
        <div>
          <div className="container-info">
            <div className='info'>
              <h4>20 Feet Container</h4>
              <div dangerouslySetInnerHTML={{ __html: state.total }}></div>
              <div dangerouslySetInnerHTML={{ __html: state.cbm }}></div>
              <div dangerouslySetInnerHTML={{ __html: state.max_boxes }}></div>
              <div dangerouslySetInnerHTML={{ __html: state.wt_per_container }}></div>
              <div dangerouslySetInnerHTML={{ __html: state.cargo_density }}></div>
              <div dangerouslySetInnerHTML={{ __html: state.vol_per_container }}></div>
              <div dangerouslySetInnerHTML={{ __html: state.max_containers }}></div>
            </div>
            <div className='info'>
              <h4>40 Feet Container</h4>
              <div dangerouslySetInnerHTML={{ __html: state.total1 }}></div>
              <div dangerouslySetInnerHTML={{ __html: state.cbm1 }}></div>
              <div dangerouslySetInnerHTML={{ __html: state.cargo_density1 }}></div>
              <div dangerouslySetInnerHTML={{ __html: state.max_boxes1 }}></div>
              <div dangerouslySetInnerHTML={{ __html: state.wt_per_container1 }}></div>
              <div dangerouslySetInnerHTML={{ __html: state.vol_per_container1 }}></div>
              <div dangerouslySetInnerHTML={{ __html: state.max_containers1 }}></div>
            </div>
            <div className='info'>
              <h4>40 High Cube Container</h4>
              <div dangerouslySetInnerHTML={{ __html: state.total2 }}></div>
              <div dangerouslySetInnerHTML={{ __html: state.cbm2 }}></div>
              <div dangerouslySetInnerHTML={{ __html: state.cargo_density2 }}></div>
              <div dangerouslySetInnerHTML={{ __html: state.max_boxes2 }}></div>
              <div dangerouslySetInnerHTML={{ __html: state.wt_per_container2 }}></div>
              <div dangerouslySetInnerHTML={{ __html: state.vol_per_container2 }}></div>
              <div dangerouslySetInnerHTML={{ __html: state.max_containers2 }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className='multiple_cargo'>
          <div className='Total_cargo_cbm'>
            
          </div>
      </div>
    </div>
  );
}

export default App;
