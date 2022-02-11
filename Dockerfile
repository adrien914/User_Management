FROM debian:10
RUN npm install --save react react-dom @types/react @types/react-dom
RUN npm install --save-dev webpack webpack-cli webpack-dev-server chalk html-webpack-plugin
RUN npm install --save-dev typescript awesome-typescript-loader source-map-loader
RUN npm install sass-loader node-sass style-loader css-loader --save-dev
RUN npm i --save @fortawesome/fontawesome-svg-core
RUN npm install --save @fortawesome/free-solid-svg-icons
RUN npm install --save @fortawesome/react-fontawesome
RUN npm install -save file-loader