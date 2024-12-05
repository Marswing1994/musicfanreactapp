To start the creation of this application, the following steps must be taken:

1. Open the file path in Visual Studio Code in which you want to store the application

2. Open a new terminal and enter the following initialization lines:
	> npx create-react-app billieeilish
	> cd billieeilish
	> code .
These lines in that order will create a new project folder named billieeilish and populate it with all the base assets for a React app, then will navigate to the billieeilish folder, and lastly will open a new window instance of Visual Studio Code that is populated with the React assets that were just downloaded.

3. Next, the project requires Tailwind CSS:
	> npm install tailwindcss postcss autoprefixer
	> npx tailwind init -p
These lines will install tailwind css capabilities to the application and initialize them for use. A file is created during this process named "tailwind.config.js"

4. Navigate to the tailwind.config.js file and add the following string into the content section:
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
This line allows the application to access and utilize any tailwind css styling added to the class names later on in the project.

5. Navigate to the index.css file and add the following rules at the top:
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
These lines inject Tailwind's base styles, component classes, and utility classes into the application.

6. Back in the terminal, the following line is ran:
	> npm install react-tooltip
This adds tooltip functionality to the referenced sections in the project.

7. After all the dependencies are added, we can minimize the amount of assets in the sidebar menu by deleting what we won't use:
	favicon.ico
	logo192.png
	logo512.png
	App.test.js
	logo.svg
	reportWebVitals.js
	setupTests.js

8. This will throw a couple of errors from the files that still reference the deleted assets. On the following pages, deleted these lines to solve the errors:

	In index.js, delete the import reportWebVitals line, both of the StrictMode lines, and the entire commented section and the reportWebVitals call at the bottom.

	In App.js, delete the import logo line at the top, and the entire header from the return inside the function.

9. In the terminal, enter the following install commands to allow the Material UI components to be used:
	> npm install @mui/lab
> npm install @mui/material @emotion/react @emotion/styled
> npm install @fontsource/roboto
> npm install @mui/icons-material

10. In the <head> section of the index.html file, add the following lines to allow custom fonts and access to the Material UI icons:
	 <link rel="preconnect" href="https://fonts.googleapis.com">
   	 <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    	<link href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400..900&display=swap" rel="stylesheet">
    	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />
    	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

11. In the tailwind.config.js file, add the following custom items to the extend section:
fontFamily: {
        		"gabarito": ['Gabarito', 'sans-serif']
     	 },
      	backgroundImage: {
'billiebg': "url('../public/images/other/onstage.png')",
      	},
These customizations allow us to use a custom font from Google fonts, and to include an image as a background element later on.

12. Finally, in order to change the favicon on the browser tab to our project logo, navigate to the index.html file, locate the link line near the top, it should be line 5, and change the image reference to our image file, as follows:
	<link rel="icon" href="billie.png" />

13. Start the application by entering into the terminal:
	> npm start
