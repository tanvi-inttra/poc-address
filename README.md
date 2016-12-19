# Angular Seed TypeScript
This is based on https://github.com/angular/angular-seed. If you are curious about how the conversion of the JS project was done to the TS project checkout [CONVERSION.md](./CONVERSION.md).

## Running
The following are specific to TypeScript

Setup TypeScript:
```bash
npm install typescript -g
npm install tsd -g
```
Start the TypeScript compiler in watch mode (either in the `app` folder or in the `e2e-tests` folder) and **leave it running**:

```bash
# For app
tsc --watch --p app
# For e2e-tests
tsc --watch --p e2e-tests
```

That's it. You have typescript setup and ready to go and visit : http://localhost:8001/app/
