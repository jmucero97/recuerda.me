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
