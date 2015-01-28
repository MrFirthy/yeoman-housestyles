Yeoman Housestyles
==================

A Yeoman setup to generate a standards-compliant project from the command line with customisable features.  
This project is based on the house styles repository by Tangent Snowball, which you can find [here](https://github.com/tangentsnowball/house-styles)

---

## Quick setup  

The following needs to be completed before you can use this generator:  

+ Install Node ([Direct download](http://nodejs.org/download/))
+ Install Yeoman `npm install -g yo` (this may require sudo)  

Once these have been installed, clone the repository and `cd` into it. Then run:  
  
`sudo npm link`  
  
This will create a link between this code and Yeoman so it can be recognised as a generator.  

You are all set up!  
  
---

## Using the generator:  

+ Create a directory and `cd` into it.  
+ run `yo housestyles --force` (the force is to automate the overriding of the CSS files when they are customised)  

You will be presented with a list of options:  

+ Name of project (_Default:_ **_Empty_**) - This will be used for the `<title>` attribute and an `<h1>` on the home page  
+ Responsive styles? (_Default:_ **_True_**) - Whether to include Tangent Snowball's default responsive styles
+ Features (_Default:_ **_True_**) - A checkbox that enables you to select/deselect features for the project. These include: 
  * Icomoon (a third-party icon font used in Tangent Snowball's housestyles)  
  * Modernizr (a third-party service used for feature detection)  
+ LESS Features (Aspects of the standard house styles):  
  * Alerts  
  * Tabs  
  * Icons  
  * Popups
   
---

## Questions  

If you find anything wrong with the plugin, have issues getting it working, or think of something cool it could do, feel free to submit an issue.