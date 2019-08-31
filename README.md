*_Source_*: https://coursetro.com/courses/23/Vue-Tutorial-in-2018---Learn-Vue.js-by-Example
# Vue Project Creation
## Requirements

* NPM must be installed

***

## Step 1: Install vue-cli and yarn
`npm install -g @vue/cli`

`npm install --global yarn`

## Step 2: Create vue project
`vue create nameOfProject`

## Step 3: Step into folder & serve
`cd nameOfProject`

`yarn serve`

***
# Vue Components

## Introduction
Components are composed by the following elements:
* Template
* Script
* Style

## Templating

Interpolation: substitution from something defined in the model. Can also be used on HTML attributes.

## Vue directive

Usual form: v-*

* v-for let's you iterate through a list

## Vue Styling

"Scoped" means that style only applies the style to the template.

You can separate the CSS to a different file from the component using `<style src="./Skills.css" scoped></style>`

## Class Binding

"Attach the class only if the expression evaluates"

`<div v-bind:class="{ alert: showAlert }"></div>`

`<style scoped>
  .alert{
    background-color:yellow;
    width:100%;
    height: 30px;
  }
</style>`

## Multiple class binding
`<div v-bind:class="{ alert: showAlert, 'another-class': showClass }"></div>`

`<style scoped>
  .alert{
    background-color:yellow;
    width:100%;
    height: 30px;
  }
  .another-class{
    border: 5px solid black; 
  }
</style>`

***
# Forms

* v-model directive enables 2-way data binding between the model and the input.
* Form submission is done with:
 ` <form @submit.prevent="addSkill">
      <input type="text" placeholder="Enter a skill you have.."  v-model="skill">
    </form>`

And add to the `export default{...` a new entry called "methods" in which you can define a typical JS function.

