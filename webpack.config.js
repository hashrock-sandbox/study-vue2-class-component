module.exports = {
  entry: './example.ts',
  output: {
    path: './dist',
    filename: 'build.js'
  },
  resolve: {
    extensions: [".js", '.ts', '.tsx'],
    alias: {
      'vue$': 'vue/dist/vue'
    }
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts'
      }
    ]
  },
  devtool: 'source-map'
}
