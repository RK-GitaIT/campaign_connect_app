# Campaign Connect App

A modern React application for managing campaign calls, customer interactions, and vehicle service information. Built with Next.js, TypeScript, and Tailwind CSS.

## Project Structure

```
campaign_connect_app/
├── src/
│   ├── app/
│   │   └── page.tsx              # Main application page
│   ├── components/
│   │   ├── CustomerInfo.tsx      # Customer information display
│   │   ├── Header.tsx           # Application header
│   │   ├── OngoingCall.tsx      # Call management interface
│   │   ├── ScriptSuggestions.tsx # Call script suggestions
│   │   ├── ServiceInfo.tsx      # Service details form
│   │   └── VehicleInfo.tsx      # Vehicle information display
│   ├── context/
│   │   └── CampaignContext.tsx  # Campaign state management
│   ├── interfaces/
│   │   └── models.ts            # TypeScript interfaces
│   └── services/
│       └── mockData.ts          # Mock data for development
├── public/
├── package.json
└── tailwind.config.js
```

## Campaign Provider

The `CampaignContext` provides centralized state management for:

- Call Management (start, end, mute, pause)
- Auto-dialing System
- Customer Information
- Vehicle Details
- Service Information
- Script Suggestions

### Key Features:
- Manual/Auto mode switching
- Real-time call duration tracking
- Call status management
- Mute/Pause functionality
- Script suggestion management

## Services

The application includes several service modules:

1. **Call Management**
   - Auto-dialing system
   - Call status tracking
   - Call controls (mute, pause, end)

2. **Customer Management**
   - Customer information storage
   - Address management
   - Company details

3. **Vehicle Services**
   - Vehicle information tracking
   - Service history
   - Cost estimation

## Development Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/campaign_connect_app.git
cd campaign_connect_app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Production Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Build Information

To create a production build:

```bash
npm run build
```

This will:
- Compile TypeScript files
- Optimize assets
- Generate static pages
- Create a production-ready build in the `.next` directory

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=your_api_url
# Add other environment variables as needed
```

## Additional Information

### Tech Stack
- Next.js 15+ (App Router)
- TypeScript
- Tailwind CSS
- React Context API

### Key Features
- Real-time call management
- Auto-dialing system
- Customer information tracking
- Vehicle service management
- Script suggestions
- Modern, responsive UI

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Support
For support, email support@campaignconnect.com or open an issue in the repository.

## Troubleshooting

Common issues and their solutions:

1. **Build Errors**
   - Clear `.next` directory
   - Delete `node_modules` and reinstall dependencies

2. **Development Server Issues**
   - Check port availability
   - Verify environment variables

3. **TypeScript Errors**
   - Run `npm run type-check`
   - Update TypeScript dependencies