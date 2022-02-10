FROM debian:10
RUN npm install --save react react-dom @types/react @types/react-dom
RUN npm install --save-dev webpack webpack-cli webpack-dev-server chalk html-webpack-plugin
RUN npm install --save-dev typescript awesome-typescript-loader source-map-loader
RUN npm install sass-loader node-sass style-loader css-loader --save-dev
