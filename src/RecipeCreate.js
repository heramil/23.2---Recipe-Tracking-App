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
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td><input id="recipeForm" onChange={handleChange} value={formData.name} name="name" type="text" placeholder="Name" required/></td>
            <td><input id="recipeForm" onChange={handleChange} value={formData.cuisine} name="cuisine" type="text" placeholder="Cuisine" required/></td>
            <td><input id="recipeForm" onChange={handleChange} value={formData.photo} name="photo" type="url" placeholder="URL" required/></td>
            <td><textarea id="recipeForm" onChange={handleChange} value={formData.ingredients} name="ingredients" placeholder="Ingredients" required/></td>
            <td><textarea id="recipeForm" onChange={handleChange} value={formData.preparation} name="preparation" placeholder="Preparation" required/></td>
            <td>
                <button   name="create" type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
