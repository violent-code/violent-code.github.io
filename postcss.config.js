module.exports = (context) => ({
  ident: 'postcss',
  syntax: 'postcss-scss',
  map: context.env === 'development' ? context.map : false,
  plugins: {
    'postcss-preset-env': {
      stage: 0,
      preserve: true,
      importFrom: './src/sass/utilities/variables.scss',
      autoprefixer: {
        grid: false,
      },
      features: {
        'nesting-rules': false,
        'custom-properties': false,
      },
    },
    cssnano: context.env === 'production' ? {} : false,
  },
});
