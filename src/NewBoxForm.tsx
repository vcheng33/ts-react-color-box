import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

// ADD CREATE in Here less confusion


import { NewBoxInterface, CreatePropsInterface } from "./Box";

/** Form for adding box.
 *
 * Props:
 * - createBox: fn to call in parent
 *
 * State:
 * formData: { height, width, backgroundColor }
 *
 * BoxList -> NewBoxForm
 */


// New box from props better naming convention of how things belong
// New box form props, iProps, name of component specific

// Have variable for default for height and width, don't have re-input items.

function NewBoxForm({ createBox }: CreatePropsInterface) {
  const [formData, setFormData] = useState<NewBoxInterface>({
    height: 0,
    width: 0,
    backgroundColor: "",
  });

  /** Update form input. */
  function handleChange(evt: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  /** Submit form: call function from parent & clear inputs. */
  function handleSubmit(evt: React.FormEvent): void {
    evt.preventDefault();
    createBox({ ...formData, id: uuid() });
    setFormData({ height: 0, width: 0, backgroundColor: "" });
  }

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="newBox-height">Height</label>
            <input
                id="newBox-height"
                onChange={handleChange}
                name="height"
                value={formData.height}
            />
          </div>
          <div>
            <label htmlFor="newBox-width">Width</label>
            <input
                id="newBox-width"
                onChange={handleChange}
                name="width"
                value={formData.width}
            />
          </div>
          <div>
            <label htmlFor="newBox-backgroundColor">Background Color</label>
            <input
                id="newBox-backgroundColor"
                onChange={handleChange}
                name="backgroundColor"
                value={formData.backgroundColor}
            />
          </div>
          <button className="NewBoxForm-addBtn">Add a new box!</button>
        </form>
      </div>
  );
}

export default NewBoxForm;
