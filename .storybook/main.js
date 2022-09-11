module.exports = {
    core: {
        builder: 'webpack5',
    },
    addons: [
        // '@storybook/addon-essentials',
        '@storybook/addon-links',
        '@storybook/addon-actions',
        '@storybook/addon-postcss'
    ],
    babel: async (options) => ({
        // Update your babel configuration here
        ...options,
    }),
    framework: '@storybook/react',
    stories: ['../stories/**/*.stories.@(js|mdx)'],
    webpackFinal: async (config, { configType }) => {
        // Make whatever fine-grained changes you need
        // Return the altered config
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        })
        config.module.rules.push({
            test: /\.html$/,
            use: [{ loader: 'html-loader', options: { minimize: true } }]
        })
        return config;
    },
};