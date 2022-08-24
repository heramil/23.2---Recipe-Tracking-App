import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes}) {

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  
  const [formData, setFormData] = useState({...initialFormState })
  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }
  
  const submitHandler = (event) => {
    event.preventDefault()
    setFormData({...initialFormState})
    setRecipes([...recipes, formData])
  }
  
  console.log(formData)
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td><input id="recipeForm" onChange={handleChange} value={formData.name} name="name" type="text" placeholder="Name"/></td>
            <td><input id="recipeForm" onChange={handleChange} value={formData.cuisine} name="cuisine" type="text" placeholder="Cuisine"/></td>
            <td><input id="recipeForm" onChange={handleChange} value={formData.photo} name="photo" type="url" placeholder="URL"/></td>
            <td><textarea id="recipeForm" onChange={handleChange} value={formData.ingredients} name="ingredients" placeholder="Ingredients"/></td>
            <td><textarea id="recipeForm" onChange={handleChange} value={formData.preparation} name="preparation" placeholder="Preparation"/></td>
            <td>
              <form id="recipeForm" onSubmit={submitHandler}>
                <button   name="create" type="submit">Create</button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
