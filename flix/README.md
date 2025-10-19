# Popflix - React Native Expo App 🎬

A modern React Native application built with Expo Router, featuring tab navigation, modal screens, and theming support.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- pnpm (recommended package manager)
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio/Emulator (for Android development)

### Installation

1. **Install pnpm globally** (if not already installed):
   ```bash
   npm install -g pnpm
   ```

2. **Install project dependencies**:
   ```bash
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   pnpm start
   ```

4. **Run on specific platforms**:
   ```bash
   pnpm android    # Android emulator
   pnpm ios        # iOS simulator
   pnpm web        # Web browser
   ```

## 📦 Why pnpm?

This project uses **pnpm** instead of npm for several advantages:

### Benefits of pnpm:
- **🚀 Faster installs**: Uses hard links and symlinks for efficient storage
- **💾 Disk space savings**: Shared dependencies across projects (up to 50% less disk usage)
- **🔒 Strict dependency resolution**: Prevents phantom dependencies and ensures reproducible builds
- **🛡️ Better security**: Isolated node_modules structure prevents dependency confusion attacks
- **📊 Better performance**: Faster dependency resolution and installation

### pnpm Configuration Files:

#### `.npmrc`
```ini
# Use pnpm as package manager
package-manager=pnpm

# Ensure consistent behavior
shamefully-hoist=true
strict-peer-dependencies=false
```
This file ensures pnpm is used consistently and configures behavior for React Native compatibility.

#### `pnpm-lock.yaml`
- **Purpose**: Lock file that ensures exact dependency versions across all environments
- **Why not package-lock.json**: pnpm uses its own lock file format for better performance and features
- **Benefits**: 
  - Faster installs (only downloads missing packages)
  - Deterministic builds (same versions everywhere)
  - Better conflict resolution

## 📁 Project Structure

```
flix/
├── app/                          # Expo Router app directory
│   ├── _layout.tsx              # Root layout with theme provider
│   ├── (tabs)/                  # Tab navigation group
│   │   ├── _layout.tsx          # Tab layout configuration
│   │   ├── index.tsx            # Home tab screen
│   │   └── explore.tsx          # Explore tab screen
│   └── modal.tsx                # Modal screen
├── components/                  # Reusable UI components
│   ├── ui/                      # UI-specific components
│   │   ├── icon-symbol.tsx      # Cross-platform icon component
│   │   └── icon-symbol.ios.tsx  # iOS-specific icon implementation
│   ├── themed-text.tsx          # Themed text component
│   ├── themed-view.tsx          # Themed view component
│   ├── haptic-tab.tsx           # Haptic feedback tab button
│   ├── hello-wave.tsx           # Animated wave component
│   ├── external-link.tsx        # External link component
│   └── parallax-scroll-view.tsx  # Parallax scroll component
├── constants/
│   └── theme.ts                 # Color schemes and font definitions
├── hooks/                       # Custom React hooks
│   ├── use-color-scheme.ts      # Color scheme detection hook
│   ├── use-color-scheme.web.ts  # Web-specific color scheme hook
│   └── use-theme-color.ts       # Theme color hook
├── assets/                      # Static assets
│   └── images/                  # App icons and images
├── scripts/
│   └── reset-project.js         # Project reset utility
├── app.json                     # Expo configuration
├── package.json                 # Project dependencies and scripts
├── pnpm-lock.yaml              # pnpm lock file
├── .npmrc                      # pnpm configuration
├── tsconfig.json               # TypeScript configuration
├── eslint.config.js            # ESLint configuration
├── expo-env.d.ts               # Expo TypeScript definitions
├── nativewind-env.d.ts        # NativeWind TypeScript definitions
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── metro.config.js             # Metro bundler configuration
├── babel.config.js             # Babel configuration
└── app/globals.css             # Global CSS with Tailwind directives
```

## 🔧 Key Files Explained

### Configuration Files

#### `app.json`
- **Purpose**: Expo app configuration
- **Key features**:
  - App metadata (name, version, icons)
  - Platform-specific settings (iOS, Android, Web)
  - Expo plugins (expo-router, expo-splash-screen)
  - Experiments (typed routes, React compiler)

#### `package.json`
- **Purpose**: Project dependencies and scripts
- **Scripts**:
  - `pnpm start`: Start development server
  - `pnpm android/ios/web`: Platform-specific development
  - `pnpm lint`: Run ESLint
  - `pnpm reset-project`: Reset to blank project

#### `tsconfig.json`
- **Purpose**: TypeScript configuration
- **Key features**:
  - Path aliases (`@/*` maps to `./*`)
  - Strict type checking
  - Expo base configuration

### App Structure

#### `app/_layout.tsx`
- **Purpose**: Root layout component
- **Features**:
  - Theme provider (dark/light mode)
  - Stack navigation setup
  - Status bar configuration
  - Tab and modal screen definitions

#### `app/(tabs)/_layout.tsx`
- **Purpose**: Tab navigation layout
- **Features**:
  - Tab bar configuration
  - Haptic feedback integration
  - Icon definitions
  - Color scheme integration

### Components

#### `components/themed-text.tsx`
- **Purpose**: Text component with theme support
- **Features**:
  - Automatic dark/light mode colors
  - Typography variants (title, subtitle, link)
  - Customizable colors

#### `components/themed-view.tsx`
- **Purpose**: View component with theme support
- **Features**:
  - Background color theming
  - Style variants

### Hooks

#### `hooks/use-color-scheme.ts`
- **Purpose**: Detect system color scheme
- **Returns**: 'light' | 'dark' | null

#### `hooks/use-theme-color.ts`
- **Purpose**: Get theme-specific colors
- **Features**:
  - Light/dark color variants
  - Fallback colors

## 🎨 Theming System

The app includes a comprehensive theming system:

### Colors (`constants/theme.ts`)
```typescript
export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: '#0a7ea4',
    // ... more colors
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: '#fff',
    // ... more colors
  },
};
```

### Fonts
- Platform-specific font definitions
- iOS system fonts
- Web font stacks
- Fallback fonts

## 🛠️ Development Commands

```bash
# Development
pnpm start                 # Start development server
pnpm start --clear         # Start with cleared cache

# Platform-specific
pnpm android              # Run on Android
pnpm ios                  # Run on iOS
pnpm web                  # Run on web

# Utilities
pnpm lint                 # Run ESLint
pnpm reset-project        # Reset to blank project

# Package management
pnpm add <package>         # Add dependency
pnpm add -D <package>     # Add dev dependency
pnpm remove <package>     # Remove dependency
pnpm update               # Update dependencies
```

## 🔄 Migration from npm

If you're migrating from npm:

1. **Remove npm files**:
   ```bash
   rm package-lock.json
   rm -rf node_modules
   ```

2. **Install with pnpm**:
   ```bash
   pnpm install
   ```

3. **Update scripts**: Replace `npm` with `pnpm` in all commands

## 🎨 NativeWind & Tailwind CSS

This project uses **NativeWind** - Tailwind CSS for React Native, providing utility-first styling with full TypeScript support.

### Why NativeWind?
- **🎯 Utility-first**: Rapid UI development with utility classes
- **🌙 Dark mode**: Built-in dark mode support
- **📱 Cross-platform**: Consistent styling across iOS, Android, and Web
- **⚡ Performance**: Optimized for React Native
- **🔧 TypeScript**: Full type safety for className props
- **🎨 Customizable**: Easy theme customization

### NativeWind Dependencies
```json
{
  "nativewind": "^4.2.1",
  "tailwindcss": "^3.4.18",
  "postcss": "^8.5.6",
  "autoprefixer": "^10.4.21"
}
```

### Configuration Files

#### `tailwind.config.js`
```javascript
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./constants/**/*.{js,jsx,ts,tsx}",
    "./hooks/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: { /* Custom color palette */ },
        secondary: { /* Secondary colors */ },
      },
    },
  },
}
```

#### `metro.config.js`
```javascript
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);
module.exports = withNativeWind(config, { input: './app/globals.css' });
```

#### `babel.config.js`
```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      "expo-router/babel",
      "react-native-reanimated/plugin",
    ],
  };
};
```

### Usage Examples

#### Basic Styling
```tsx
import { View, Text } from 'react-native';

export default function MyComponent() {
  return (
    <View className="flex-1 bg-white dark:bg-gray-900 p-4">
      <Text className="text-xl font-bold text-gray-900 dark:text-white">
        Hello NativeWind!
      </Text>
    </View>
  );
}
```

#### Custom Components
```tsx
// Using predefined component classes from globals.css
<TouchableOpacity className="btn-primary">
  <Text className="text-white font-semibold">Primary Button</Text>
</TouchableOpacity>

<View className="card p-4">
  <Text className="text-lg font-medium">Card Content</Text>
</View>
```

#### Responsive Design
```tsx
<View className="w-full md:w-1/2 lg:w-1/3">
  <Text className="text-sm md:text-base lg:text-lg">
    Responsive text sizing
  </Text>
</View>
```

### Custom Component Classes

The project includes pre-built component classes in `app/globals.css`:

- **`.btn-primary`**: Primary button styling
- **`.btn-secondary`**: Secondary button styling  
- **`.card`**: Card container with shadow and border
- **`.input`**: Form input styling with dark mode support

### Dark Mode Support

NativeWind automatically handles dark mode based on the system preference:

```tsx
// Automatic dark mode switching
<View className="bg-white dark:bg-gray-800">
  <Text className="text-gray-900 dark:text-white">
    This text adapts to dark/light mode
  </Text>
</View>
```

### TypeScript Integration

Full TypeScript support with `nativewind-env.d.ts`:

```typescript
import { NativeWindType } from 'nativewind/types';

declare module 'react-native' {
  interface ViewProps extends NativeWindType {}
  interface TextProps extends NativeWindType {}
  interface ScrollViewProps extends NativeWindType {}
  interface ImageProps extends NativeWindType {}
}
```

## 📱 Features

- ✅ **Expo Router**: File-based routing
- ✅ **Tab Navigation**: Bottom tab bar with haptic feedback
- ✅ **Modal Screens**: Full-screen modals
- ✅ **Theme Support**: Dark/light mode
- ✅ **NativeWind**: Tailwind CSS for React Native
- ✅ **TypeScript**: Full type safety
- ✅ **Cross-platform**: iOS, Android, Web
- ✅ **React Compiler**: Optimized builds
- ✅ **Typed Routes**: Type-safe navigation

## 🚀 Deployment

### Building for Production

```bash
# Build for Android
pnpm android --variant release

# Build for iOS
pnpm ios --configuration Release

# Build for Web
pnpm web --prod
```

### EAS Build (Recommended)

```bash
# Install EAS CLI
npm install -g @expo/eas-cli

# Configure EAS
eas build:configure

# Build for all platforms
eas build --platform all
```

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [Expo Router Guide](https://docs.expo.dev/router/introduction/)
- [pnpm Documentation](https://pnpm.io/)
- [React Native Documentation](https://reactnative.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.