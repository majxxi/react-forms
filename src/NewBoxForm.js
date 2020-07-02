import React, { useState } from 'react';

function NewBoxForm({ buildBox }){
  const INITIAL_STATE = {backgroundColor: "", width: "", height: ""};

  const [formData, setFormData] = useState({
                                  backgroundColor: "",
                                  width: "",
                                  height: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    buildBox(formData);
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor">COLOR:</label>
      <input
        type="text"
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <label htmlFor="width">WIDTH:</label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">HEIGHT:</label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <button>build a box.</button>
    </form>
  );
};

export default NewBoxForm; 