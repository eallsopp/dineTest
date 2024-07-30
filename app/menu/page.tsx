"use client";

import React, { useState } from "react";

import { title } from "@/components/primitives";
import RecipeCard from "@/components/recipecard";
import Calendar from "@/components/calendar";
import {
  today,
  getLocalTimeZone,
  CalendarDate,
  parseDate,
} from "@internationalized/date";

import layout from "./layouts.module.css";

const recipes = require("../data/testRecipes.json");

export default function MenuPage() {
  const [calDate, setCalDate] = useState(today(getLocalTimeZone()));
  const [recipe, setCurrentRecipe] = useState(recipes[0]);
  //recipe has a datesAvailable ArrayType which can indicate in the calendar when the item is available
  const nextDateAvailable = recipe.datesAvailable[0];

  const nextRecipe = () => {
    const currentIndex = recipes.indexOf(recipe);
    const nextIndex = currentIndex + 1;

    if (recipes[nextIndex]) {
      buildDate(recipes[nextIndex].datesAvailable[0]);
    } else {
      buildDate(recipes[0].datesAvailable[0]);
    }

    return recipes[nextIndex] || recipes[0];
  };

  let buildDate = (nextRecipeDateString) => {
    let nums = parseDate(nextRecipeDateString);

    setCalDate(nums);
  };

  //Next Available Date will be dependant on the input of the admin
  //so a change in the date available will be reflected in the calendar
  //and the recipe card will display menu item that is available for that day
  //the arrow on the recipecard will also change the date, to the time that
  //recipe is next available

  const handleRecipe = () => {
    setCurrentRecipe(nextRecipe);
  };

  const handleCalDate = (e) => {
    setCalDate(e);
  };

  //import the recipe data into state
  //map over the data and create a RecipeCard for each recipe
  //that display will be a clickable arrow for the next one
  //date will be displayed fr when it will be avilable for that day's meal
  return (
    <>
      <h1 className={title()}>Menu</h1>
      <div className="flex">
        <Calendar
          calDate={calDate}
          handleCalDate={handleCalDate}
          handleRecipe={handleRecipe}
        />
        <RecipeCard
          calDate={calDate}
          data={recipes}
          handleRecipe={handleRecipe}
          nextDateAvailable={nextDateAvailable}
          recipe={recipe}
        />
      </div>
    </>
  );
}
