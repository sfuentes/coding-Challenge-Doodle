# coding-Challenge-Doodle

Requirements : https://github.com/DoodleScheduling/hiring-challenges/tree/master/frontend-engineer


## Remarks
- no api polling, that would have required alot more tinkering ( bookkeeping, consistency ect )
- no tests, most of the things are super easy to test, but i decided against, i would have used Jest & Mocca for Selectors
- Simple Structure, simple API Handling
- No Error Case Handling what so ever
- Material UI has been used for ease of use, in a real World application the use of a Heavy Weight like Material UI needs to be considered with care 
- The Code is pretty verbose but should be self explanatory 
- No Selectors, that would have been overkill for this ( usually i use them everywhere )
- I used Parcel instead of WebPack for the ease of configuration, i tend to prefer Parcel for small Projects 
- not much Reducer Logic
- the styling of the Login is awful, but i ran out of time
- build is not optimised in any way 

## Libs & Tools used
- Axios : my favorite Network Lib 
- Material UI : the goto UI Lib for me
- Luxon : the better Moment 
- Babel with : 
    - plugin-proposal-export-default-from ( the importing by gateways is much easier with it) 
    - transform-function-bind ( :: syntax sugar for bind)
- Parcel : (no) config alternative for WebPack i start to like

## Commands
- npm start : for running the app
- npm run build : for building it
