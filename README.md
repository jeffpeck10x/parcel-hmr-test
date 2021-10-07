# Parcel Broken HMR Test

## Steps

```shell
git clone https://github.com/jeffpeck10x/parcel-hmr-test.git
cd parcel-hmr-test
yarn
yarn dev
```

Make a change to `src/components/Hello.tsx` (i.e. update the console output or change the text to "Hello 1", etc.).

Observe that the page does not update.

Now, remove "@storybook/react" and try again:
```shell
yarn workspace @parcel-hmr-test/storybook remove @storybook/react
yarn dev
```
Make another change to `src/components/Hello.tsx` and observe that HRM works!

Put it back and notice again that HMR is now broken again:
```shell
yarn workspace @parcel-hmr-test/storybook add --dev @storybook/react@^6.1.17
yarn dev
```

Now, take it out again, and try adding the following dependencies from @storybook/react:
```shell
yarn workspace @parcel-hmr-test/storybook remove @storybook/react
yarn workspace @parcel-hmr-test/storybook add --dev react-refresh@^0.8.3
yarn workspace @parcel-hmr-test/storybook add --dev @pmmmwh/react-refresh-webpack-plugin@^0.4.3
```

Notice that HMR is still broken when the dependencies are just:
```json
  {
    "@pmmmwh/react-refresh-webpack-plugin": "^0.4.3",
    "react-refresh": "^0.8.3"
  }
```

I have also observed that just one of those dependencies alone does not break parcel HRM.
