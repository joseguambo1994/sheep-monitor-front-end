# Sheep Monitor Front End

Frontend SPA for monitoring a sheep pen in real time.

## Feature Architecture

The app now follows a feature-first structure:

```text
src/app
  core/
    mocks/
    models/
    services/
  features/
    dashboard/
      components/
      models/
      pages/
      services/
  shared/
    ui/
```

### Responsibilities

- `core`: domain contracts and infrastructure services used by multiple features.
- `features/dashboard`: sheep monitoring experience (camera, detections, metrics, facade).
- `shared/ui`: reusable presentation-only UI blocks.

## Run

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## Build And Test

```bash
npm run build
npm test
```

## Backend Integration

The dashboard requests `GET /api/monitoring/snapshot/latest` through `SheepMonitorApiService`.
If unavailable, the app uses local mock data to keep the UI functional.