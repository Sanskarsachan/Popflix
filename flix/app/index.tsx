import { Text, View, TouchableOpacity, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView className="flex-1 bg-neutral-50 dark:bg-neutral-900">
      <View className="p-6">
        {/* Header */}
        <View className="mb-8">
          <Text className="text-3xl font-bold text-brand-crimson mb-2">
            Popflix Color Palette 🎨
          </Text>
          <Text className="text-neutral-600 dark:text-neutral-400 text-lg">
            Your brand colors are now integrated with NativeWind
          </Text>
        </View>

        {/* Brand Colors Section */}
        <View className="mb-8">
          <Text className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Brand Colors
          </Text>
          
          <View className="space-y-4">
            {/* Crimson */}
            <View className="card p-4">
              <View className="flex-row items-center mb-2">
                <View className="w-12 h-12 bg-brand-crimson rounded-lg mr-4"></View>
                <View>
                  <Text className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                    Crimson Red
                  </Text>
                  <Text className="text-muted">#BF092F - Primary brand color</Text>
                </View>
              </View>
            </View>

            {/* Navy */}
            <View className="card p-4">
              <View className="flex-row items-center mb-2">
                <View className="w-12 h-12 bg-brand-navy rounded-lg mr-4"></View>
                <View>
                  <Text className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                    Deep Navy
                  </Text>
                  <Text className="text-muted">#132440 - Professional, trustworthy</Text>
                </View>
              </View>
            </View>

            {/* Ocean */}
            <View className="card p-4">
              <View className="flex-row items-center mb-2">
                <View className="w-12 h-12 bg-brand-ocean rounded-lg mr-4"></View>
                <View>
                  <Text className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                    Ocean Blue
                  </Text>
                  <Text className="text-muted">#16476A - Calm, reliable</Text>
                </View>
              </View>
            </View>

            {/* Teal */}
            <View className="card p-4">
              <View className="flex-row items-center mb-2">
                <View className="w-12 h-12 bg-brand-teal rounded-lg mr-4"></View>
                <View>
                  <Text className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                    Fresh Teal
                  </Text>
                  <Text className="text-muted">#3B9797 - Fresh, balanced</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Component Examples */}
        <View className="mb-8">
          <Text className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Component Examples
          </Text>
          
          <View className="space-y-4">
            {/* Buttons */}
            <View className="card p-4">
              <Text className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-3">
                Buttons
              </Text>
              <View className="space-y-3">
                <TouchableOpacity className="btn-primary">
                  <Text className="text-white font-semibold text-center">
                    Primary Button
                  </Text>
                </TouchableOpacity>
                
                <TouchableOpacity className="btn-secondary">
                  <Text className="text-white font-semibold text-center">
                    Secondary Button
                  </Text>
                </TouchableOpacity>
                
                <TouchableOpacity className="btn-accent">
                  <Text className="text-white font-semibold text-center">
                    Accent Button
                  </Text>
                </TouchableOpacity>
                
                <TouchableOpacity className="btn-outline">
                  <Text className="text-brand-crimson font-semibold text-center">
                    Outline Button
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Brand Card */}
            <View className="card-brand p-6">
              <Text className="text-white text-xl font-bold mb-2">
                Brand Card
              </Text>
              <Text className="text-white/90 mb-4">
                This card uses a gradient from navy to ocean blue
              </Text>
              <TouchableOpacity className="bg-white/20 px-4 py-2 rounded-lg">
                <Text className="text-white font-semibold text-center">
                  Action Button
                </Text>
              </TouchableOpacity>
            </View>

            {/* Form Elements */}
            <View className="card p-4">
              <Text className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-3">
                Form Elements
              </Text>
              <View className="space-y-3">
                <View className="input">
                  <Text className="text-neutral-500">Standard input field</Text>
                </View>
                <View className="input-brand">
                  <Text className="text-neutral-500">Brand input field</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Usage Examples */}
        <View className="mb-8">
          <Text className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Usage Examples
          </Text>
          
          <View className="card p-4">
            <Text className="text-brand font-semibold mb-2">
              Brand Text Color
            </Text>
            <Text className="text-accent font-semibold mb-2">
              Accent Text Color
            </Text>
            <Text className="text-muted mb-4">
              Muted text for secondary information
            </Text>
            
            <View className="flex-row space-x-2">
              <View className="w-6 h-6 bg-brand-crimson rounded-full"></View>
              <View className="w-6 h-6 bg-brand-navy rounded-full"></View>
              <View className="w-6 h-6 bg-brand-ocean rounded-full"></View>
              <View className="w-6 h-6 bg-brand-teal rounded-full"></View>
            </View>
          </View>
        </View>

        {/* Code Examples */}
        <View className="card p-4 mb-8">
          <Text className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-3">
            Usage in Code
          </Text>
          <View className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg">
            <Text className="text-sm text-neutral-700 dark:text-neutral-300 font-mono">
              {`<View className="bg-brand-crimson">
  <Text className="text-white">Primary</Text>
</View>

<View className="bg-brand-navy">
  <Text className="text-white">Navigation</Text>
</View>

<View className="bg-brand-ocean">
  <Text className="text-white">Secondary</Text>
</View>

<View className="bg-brand-teal">
  <Text className="text-white">Accent</Text>
</View>`}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
