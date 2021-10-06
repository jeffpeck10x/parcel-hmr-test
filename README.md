# parcel-hmr-test
Demonstrate React HMR bug in parcel 2.0.0-rc.0

## Steps to Observe Issue

```
git clone https://github.com/jeffpeck10x/parcel-hmr-test.git
cd parcel-hmr-test
yarn
yarn dev
```

Now, make a change to `src/index.tsx` (for example add `console.log("test")`) and observe that HMR works.

Next, change branches...

