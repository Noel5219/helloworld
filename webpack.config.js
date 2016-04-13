module.exports = {
  entry: ['./js/main.jsx'],
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' },
      {test: /\.css$/ , loader: 'style-loader!css-loader'}
    ]
  }
};