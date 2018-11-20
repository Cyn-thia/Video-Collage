# Project Overview

## Project Links
[Project 4 Repo](https://git.generalassemb.ly/cynthia/Project-4)

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Due Date | Deliverable | Status
|:---:|---|---|:---:|
|Day 1| Nov 19 | Prject Worksheet, Wireframes, Priority Matrix, User Stories, Determine Functional Components | Complete
|Day 2| Nov 20 | Projetct Approval | Incomplete
|Day 3 - 7| Nov 21-25 | App, render camera, take a video,Save each video, replay video | Incomplete
|Day 8| Nov 26 | Delete video, retake video | Incomplete
|Day 9| Nov 27 | Play multiple videos | Incomplete
|Day 10| Nov 28 | VideoContainer, CSS | Incomplete
|Day 11| Nov 29 | Final CSS touches | Incomplete
|Day 12 - 14| Nov 30 - Dec 2 | Possibly Post-MVP | Incomplete
|Day 15| Dec 3 | Present | Incomplete


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

Video collage inspired by the Acapella app. The user will be able to record multiple 10 second videos and play them all at the same time as a collage and save to the camera roll.

[Expo Video Documentation](https://docs.expo.io/versions/latest/sdk/video)

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

[Wireframe picture](https://res.cloudinary.com/dvjtpejbw/image/upload/v1542736159/wireframe.png "Wireframe")


## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

[Priority Matrix](https://res.cloudinary.com/dvjtpejbw/image/upload/v1542734884/Priority_Matrix.png "Priority Matrix")


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- record 4 videos, each 10 seconds long
- save each video
- delete and rerecord video
- play videos simultaneously


#### PostMVP 

- Change length of video
- Change layout of video - select from a list of layouts
- Edit start time of video
- save full video to phone
- Have multiple devices collaborate on one video 


## Architectural Design

Define the the React components and the architectural design of your app.

[React Architectural Design](https://res.cloudinary.com/dvjtpejbw/image/upload/v1542736733/architechture.png)

[ERD](https://res.cloudinary.com/dvjtpejbw/image/upload/v1542734884/ERD.png)


### Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | --- |  
| App | This will render the UI | 
| CollageContainer | Render larger grid containing multiple videos. | 
| Video | Render individual video before and after recorded | 
| Camera | Activate the phone camera and render video |
| Layouts | Play back one of the recorded videos, can delete from this screen |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Wireframing| H | 5hrs | 5hrs | hrs |
| App | H | 2hrs | hrs | hrs |
| Spash Page | H | 1hrs| hrs | hrs |
| VideoContainer | H | 5hrs | hrs | hrs |
| Rednering Camera | H | 4hrs | hrs | hrs |
| Recording Video | H | 6hrs | hrs | hrs |
| Saving Each Video | H | 4hrs| hrs | hrs |
| Playing Multiple Videos | H | 10hrs| hrs | hrs |
| Delete Videos | H | 3hrs| hrs | hrs |
| CSS| H | 8hrs | hrs | hrs |
| Change length of video | L | 8hrs | hrs | hrs |
| Video layouts screen| L | 5hrs | hrs | hrs |
| Select a different layout| L | 8hrs | hrs | hrs |
| Project Management| L | 3hrs | hrs | hrs |
| Total |  | hrs| hrs | hrs |


## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | --- |  
| compondentDidMount | Pulling data when page renders | 
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

[React Native Camera](https://www.npmjs.com/package/react-native-camera) This library will render the camera and record video.

[React Native Video Controls](https://www.npmjs.com/package/react-native-video-controls) This library contains a set of video controls. Includes back button, volume bar, fullscreen toggle, play/pause toggle, seekbar, title, error handling and timer toggle that can switch between time remaining and current time when tapped.
 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

 [TBD Error 1]()

 [TBD Error 2]()

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
