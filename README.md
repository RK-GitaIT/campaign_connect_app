# Campaign Connect App

A modern call center application built with Next.js and Telnyx for managing outbound calling campaigns. The application provides a streamlined interface for agents to manage calls, track vehicle information, and handle customer interactions.

## 🚀 Features

- **Auto-Dialing System**: Automated call queuing with countdown timer
- **Real-time Call Management**: Live call controls including mute, hangup, and keypad
- **Vehicle Information Tracking**: Detailed vehicle and service information display
- **Cost Management**: Track labor and parts costs for services
- **Agent Dashboard**: Comprehensive interface for call center agents
- **Telnyx Integration**: Professional-grade calling capabilities

## 📁 Project Structure

```
📂 src
│── 📂 app                      # App Router-based directory
│   │── 📂 (dashboard)          # Dashboard route group
│   │   │── layout.tsx          # Dashboard layout with navigation
│   │   └── page.tsx           # Main dashboard view
│   │── layout.tsx             # Root layout with providers
│   └── page.tsx               # Landing page
│
│── 📂 components              # React components
│   │── 📂 ui                  # Shared UI components
│   │   └── Card.tsx          # Reusable card component
│   │── CallInterface.tsx      # Auto-dialing interface
│   │── CallDetails.tsx        # Vehicle and company information
│   └── OngoingCall.tsx       # Active call controls
│
│── 📂 services                # API and service integrations
│   └── telnyxService.ts      # Telnyx WebRTC integration
│
│── 📂 styles                  # Global styles
│   └── globals.css           # Tailwind and global CSS
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks & Context
- **Calling Integration**: Telnyx WebRTC SDK
- **Development Tools**: ESLint, Turbopack

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd campaign_connect_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_TELNYX_LOGIN_TOKEN=your_telnyx_token
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📞 Telnyx Integration

The application uses Telnyx for handling calls. Key features include:
- WebRTC-based calling
- Call state management
- Mute/unmute functionality
- DTMF support
- Call duration tracking

To use the calling features:
1. Sign up for a Telnyx account
2. Create a WebRTC credential
3. Add your Telnyx login token to `.env.local`
4. Configure your Telnyx number in the dashboard

## 💻 Component Documentation

### CallInterface
- Displays agent information
- Manages auto-dialing countdown
- Provides manual/auto mode switching
- Shows active call duration

### CallDetails
- Displays company information
- Shows vehicle details
- Manages service costs
- Handles notes and dispositions

### OngoingCall
- Provides call controls (mute, hangup, pause)
- Shows real-time call duration
- Includes keypad functionality
- Displays call status

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS v4 with custom configuration:
- Custom color schemes
- Responsive design utilities
- Component-based styles

### TypeScript
Strict type checking is enabled with custom types for:
- Call states
- Vehicle information
- API responses
- Component props

## 📈 Future Enhancements

- [ ] Add authentication system
- [ ] Implement call recording
- [ ] Add campaign management
- [ ] Include reporting features
- [ ] Add multi-agent support
- [ ] Implement call analytics

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

<!-- ## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details. -->

## 👥 Authors

- Polineni Rama krishan (Gita IT)

## 🙏 Acknowledgments

- Telnyx for providing the WebRTC SDK
- Next.js team for the framework
- Tailwind CSS team for the styling framework