# SSR-CSR-Express-Webpack-React
# This project is set up and configured so that you can run your app both in client side and server side. I've used Express framework for SSR and Webpack dev server 5 for CSR to run a simple React App. 
#...You can use 'npx create-react-app' if you don't want to use Webpack. Also you can use 'Next JS' framework to enable SSR. 

1. git clone
2. npm install / yarn add 
3. open two terminal to trigger both SSR and CSR command 
   a> In one terminal - Run -->  npm run dev  ( client side - webpack server will run and open the app in Port : 8081 )
   b> In another terminal - Run --> npm run ssr ( server side - express server will run using Nodemon plugin and open the app in Port : 8088 ) 
   
 4. Check the network tab and refresh both the page. See the time difference for initial page rendering for both SSR and CSR
