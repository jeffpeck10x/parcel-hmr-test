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
